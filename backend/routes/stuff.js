const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, stuffCtrl.createSauce);
router.put('/:id', auth, multer, stuffCtrl.modifySauce);
router.delete('/:id', auth, multer, stuffCtrl.deleteSauce);
router.get('/:id', auth, multer, stuffCtrl.getOneSauce);
router.get('/', auth, multer, stuffCtrl.getAllSauce);

module.exports = router;