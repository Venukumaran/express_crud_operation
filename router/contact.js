const express=require("express")
const router = express.Router()
const{getcontact,createcontact,getsinglecontact,updatecontact,deleteecontact}=require("../controllers/contactcontroller")

router.route('/').get(getcontact)

router.route('/:id').get(getsinglecontact)

router.route('/').post(createcontact)

router.route('/:id').put(updatecontact)

router.route('/:id').delete(deleteecontact)


module.exports=router