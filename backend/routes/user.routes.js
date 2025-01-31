import express from 'express'
import multer from 'multer';
import path from 'path';
import { addUser, uploadImage } from '../controller/userController.js';
const router= express.Router();

router.post('/api/users', addUser);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload_images/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });
router.post('/api/users/upload', upload.single('image'), uploadImage);
export default router;