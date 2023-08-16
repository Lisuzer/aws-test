import { dynamoClient } from '../../config/dynamodb.config';
import { CreateFileDto } from '../dto/create-file.dto';
import { UpdateFileDto } from '../dto/update-file.dto';

const TABLE_NAME = 'user-file';

export const getFiles = async () => {
  try {
    const params = {
      TableName: TABLE_NAME,
    };

    const files = await dynamoClient.scan(params).promise();

    return files;
  } catch (err) {
    console.log(err);
  }
};

export const getFileById = async (id: number) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id,
      },
    };

    const file = await dynamoClient.get(params).promise();

    return file;
  } catch (err) {
    console.error(err);
  }
};

export const createFile = async (newFile: CreateFileDto) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Item: newFile,
    };

    const result = await dynamoClient.put(params).promise();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const updateFile = async (newFile: UpdateFileDto, id: number) => {
  try {
    const fileForUpdate = {
      id,
      ...newFile,
    };

    console.log(fileForUpdate);

    const params = {
      TableName: TABLE_NAME,
      Item: fileForUpdate,
    };

    const result = await dynamoClient.put(params).promise();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deleteFile = async (id: number) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id,
      },
    };

    const result = await dynamoClient.delete(params).promise();

    return result;
  } catch (err) {
    console.error(err);
  }
};
