const router = require('express').Router();
const bcrypt =require ('bcrypt');
const config = require('config');
const jwt = require ('jsonwebtoken');
const auth = require('../../middleware/auth');

// User model 


const User = require('../../models/User');

//@route post api/auth
// @des auth user
// @access public
router.post('/' , (req,res)=>{
    const { email , password } = req.body;
    if(!email || !password){
        return res.status(400).json({
            msg:'please enter all fields'
        })
    }
    User.findOne({
        email:email
    }).then(user => {
        if(!user) return res.status(400).json({
            msg: 'user does not exist'
        });
        
    //    validating password

    bcrypt.compare(password , user.password)
        .then(isMatch =>{
            if(!isMatch) return res.status(400).json({msg:'invalid credentials' });
            jwt.sign(
                {id : user.id},
                config.get('jwtSecret'),
                {expiresIn:3600},
                (err , token)=>{
                    if(err) throw err ;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email

                        }
                    });
                }
            )
        })

    });
});

//@route get  api/auth/user
// @des fet user data
// @access public
router.get('/user' , auth , (req ,res) =>{
    User.findById(req.user.id)
    .select('-password')
    .then(user =>res.json(user));
})

module.exports = router;
