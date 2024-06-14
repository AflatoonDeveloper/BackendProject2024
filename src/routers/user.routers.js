import { Router } from 'express';
import { registorUser } from '../controllers/user.controllers.js';
import { upload } from '../middlewares/multer.middlewares.js';
import multer from 'multer';


const router = Router();

router.route('/register').post((req, res, next) => {
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 }
    ])(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return res.status(400).json({ error: err.message,
                massage:"eror multer"
             });
        } else if (err) {
            // An unknown error occurred when uploading.
            return res.status(500).json({ error: err.message });
        }
        // Everything went fine.
        next();
    });
}, registorUser);

export default router;
