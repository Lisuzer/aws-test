import AWS from 'aws-sdk';
import * as dotenv from 'dotenv';

dotenv.config();

AWS.config.update({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

export const dynamoClient = new AWS.DynamoDB.DocumentClient();
