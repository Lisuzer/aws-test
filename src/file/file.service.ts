import * as S3 from '../services/s3.service';
import * as FileRepository from './repository/file.repository';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

export const uploadFile = async (file: Express.Multer.File) => {
  const res = await S3.uploadFile(file);

  return res;
};

export const getFiles = async () => {
  try {
    const files = await FileRepository.getFiles();

    return files;
  } catch (err) {
    console.error(err);
  }
};

export const getFileById = async (id: number) => {
  try {
    const file = await FileRepository.getFileById(id);

    return file;
  } catch (err) {
    console.error(err);
  }
};

export const addFile = async (newFile: CreateFileDto) => {
  try {
    const result = await FileRepository.createFile(newFile);

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const updateFile = async (newFile: UpdateFileDto, id: number) => {
  try {
    const result = await FileRepository.updateFile(newFile, id);

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deleteFile = async (id: number) => {
  try {
    const result = await FileRepository.deleteFile(id);

    return result;
  } catch (err) {
    console.error(err);
  }
};
