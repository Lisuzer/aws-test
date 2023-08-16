import S3, { ClientConfiguration } from 'aws-sdk/clients/s3';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import * as dotenv from 'dotenv';
import { StreamConfiguration } from 'aws-sdk/clients/nimble';

dotenv.config();

const s3 = new S3({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

export const uploadFile = async (file: Express.Multer.File) => {
  try {
    // const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME as string,
      Body: file.buffer,
      Key: file.originalname,
    };

    const res = await s3.upload(uploadParams).promise();

    return res;
  } catch (err) {
    console.log(err);
  }
};
