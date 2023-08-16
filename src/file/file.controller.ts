import { Request, Response } from 'express';
import * as FileService from './file.service';
import * as util from 'util';
import fs from 'fs';

const unlinkFile = util.promisify(fs.unlink);

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const file = req.file;

    if (!file) {
      return res.send({ message: 'File does not exist' });
    }

    console.log(file);

    const result = await FileService.uploadFile(file);

    if (!result) {
      return res.send({ message: 'File does not exist' });
    }

    res.send({ imagePath: `/images/${result.Key}` });
  } catch (err) {
    console.log(err);
  }
};

export const getFiles = async (req: Request, res: Response) => {
  const files = await FileService.getFiles();

  return res.json(files);
};

export const getFileById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const file = await FileService.getFileById(id);

    return res.json(file);
  } catch (err) {
    console.error(err);
  }
};

export const addFile = async (req: Request, res: Response) => {
  try {
    const newFile = req.body;

    const result = await FileService.addFile(newFile);

    return res.json(result);
  } catch (err) {
    console.error(err);
  }
};

export const updateFile = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const newFile = req.body;

    const result = await FileService.updateFile(newFile, id);

    return res.send({ message: 'Successfully updated' });
  } catch (err) {
    console.error(err);
  }
};

export const deleteFile = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const result = await FileService.deleteFile(id);

    return res.json(result);
  } catch (err) {
    console.error(err);
  }
};
