/*************************************
 *  Basis File for Captain Hook API
 *  Service: Github.com
 *  Version: 1
 **************************************/

//MODULES
const express   = require('express');
const router    = express.Router();
const basis     = require('../../functions/basis');

//All Endpoints are for /api/v1/github


//Route for Nginx User
router.post("/nginx", (req, res) => {

    //Get Clone URL from the provided hook
    const cloneurl = req.body.repository.archive_url;

    console.log(cloneurl);

    //Download the repo content to the nginx folder
    basis.clonerepo('https://gwce.de/assets/images/logo_gwce.jpg');

    res.status(200).json({ message: "Webhook processed" })
})


//Route for Apache User
router.post("/apache", (req, res) => {

    
    res.status(200).json({ message: "Webhook processed" })
})

//CLOSE
module.exports = router;

