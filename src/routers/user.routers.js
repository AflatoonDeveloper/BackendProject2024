import { Router } from 'express';
import { registorUser } from '../controllers/user.controllers.js';
import { upload } from '../middlewares/multer.middlewares.js';
import multer from 'multer';

const router = Router();

const uploadMiddleware = upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'coverImage', maxCount: 1 }
]);

router.route('/register').post((req, res, next) => {
  uploadMiddleware(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.status(400).json({
        error: err.message,
        message: "Multer error"
      });
    } else if (err) {
      // An unknown error occurred when uploading.
      return res.status(500).json({
        error: err.message
      });
    }
    // Everything went fine.
    console.log("Files received:", req.files); // Debugging line to check received files
    next();
  });
}, registorUser);

export default router;
