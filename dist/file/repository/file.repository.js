"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.updateFile = exports.createFile = exports.getFileById = exports.getFiles = void 0;
const dynamodb_config_1 = require("../../config/dynamodb.config");
const TABLE_NAME = 'user-file';
const getFiles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            TableName: TABLE_NAME,
        };
        const files = yield dynamodb_config_1.dynamoClient.scan(params).promise();
        return files;
    }
    catch (err) {
        console.log(err);
    }
});
exports.getFiles = getFiles;
const getFileById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id,
            },
        };
        const file = yield dynamodb_config_1.dynamoClient.get(params).promise();
        return file;
    }
    catch (err) {
        console.error(err);
    }
});
exports.getFileById = getFileById;
const createFile = (newFile) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            TableName: TABLE_NAME,
            Item: newFile,
        };
        const result = yield dynamodb_config_1.dynamoClient.put(params).promise();
        return result;
    }
    catch (err) {
        console.error(err);
    }
});
exports.createFile = createFile;
const updateFile = (newFile, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileForUpdate = Object.assign({ id }, newFile);
        console.log(fileForUpdate);
        const params = {
            TableName: TABLE_NAME,
            Item: fileForUpdate,
        };
        const result = yield dynamodb_config_1.dynamoClient.put(params).promise();
        return result;
    }
    catch (err) {
        console.error(err);
    }
});
exports.updateFile = updateFile;
const deleteFile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id,
            },
        };
        const result = yield dynamodb_config_1.dynamoClient.delete(params).promise();
        return result;
    }
    catch (err) {
        console.error(err);
    }
});
exports.deleteFile = deleteFile;
