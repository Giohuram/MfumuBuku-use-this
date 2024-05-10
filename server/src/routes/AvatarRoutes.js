const express = require('express');
const router = express.Router();
const { uploadAvatar } = require('../controllers/AvatarController');

// Définir la route pour le téléchargement d'avatar
router.post('/upload-avatar', upload.single('avatar'), uploadAvatar);

module.exports = router;
