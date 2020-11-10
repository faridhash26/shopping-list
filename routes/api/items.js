const router = require('express').Router();
const auth = require( '../../middleware/auth');

// item model 


const Item = require('../../models/Item');

//@route get api/items
// @des get all items 
// @access public
router.get('/' , (req,res)=>{
    Item.find()
    .sort({ date: -1})
    .then(items => res.json(items));
});

//@route post  api/items
// @des create post 
// @access public
router.post ('/' , auth , (req,res)=>{
    const newItem = new Item({
        name:req.body.name
    });


    newItem.save().then(item => res.json(item));

});

//@route delete  api/items/:id
// @des  delete a item 
// @access public
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id).then(item =>item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))


});





module.exports = router;
