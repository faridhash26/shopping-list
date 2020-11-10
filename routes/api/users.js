const router = require('express').Router();
const bcrypt =require ('bcrypt');
const config = require('config');
const jwt = require ('jsonwebtoken');
// User model 


const User = require('../../models/User');

//@route post api/users
// @des register new user
// @access public
router.post('/' , (req,res)=>{
    const {name , email , password } = req.body;
    if(!name || !email || !password){
        return res.status(400).json({
            msg:'please enter all fields'
        })
    }
    User.findOne({
        email:email
    }).then(user => {
        if(user) return res.status(400).json({
            msg: 'user already exist'
        });
        const newUser = new User({
            name,
            email,
            password
        });

        // create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => {

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

                        
                    });
            });
        });

    });
});



module.exports = router;
