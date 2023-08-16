import express from 'express';
import multer from 'multer';
import * as FileController from '../file/file.controller';

const upload = multer();
const router = express.Router();

router.get('/');

router.get('/files', FileController.getFiles);
router.get('/files/:id', FileController.getFileById);
router.post('/files', FileController.addFile);
router.put('/files/:id', FileController.updateFile);
router.delete('/files/:id', FileController.deleteFile);

router.post('/upload-file', upload.single('file'), FileController.uploadFile);

export { router };
