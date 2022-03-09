const express = require('express');
const router = express.Router();
const userRoute = require('../controller/usercontroller');
const authentication = require('../middleware/jwt');

router.get('/', authentication, async (req, res) => {
    res.send(req.user);
  });

router.post('/login', userRoute.login)
router.post('/add', userRoute.createUser);

module.exports = router;