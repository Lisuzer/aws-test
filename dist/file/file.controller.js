"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.updateFile = exports.addFile = exports.getFileById = exports.getFiles = exports.uploadFile = void 0;
const FileService = __importStar(require("./file.service"));
const util = __importStar(require("util"));
const fs_1 = __importDefault(require("fs"));
const unlinkFile = util.promisify(fs_1.default.unlink);
const uploadFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.file;
        if (!file) {
            return res.send({ message: 'File does not exist' });
        }
        console.log(file);
        const result = yield FileService.uploadFile(file);
        if (!result) {
            return res.send({ message: 'File does not exist' });
        }
        res.send({ imagePath: `/images/${result.Key}` });
    }
    catch (err) {
        console.log(err);
    }
});
exports.uploadFile = uploadFile;
const getFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const files = yield FileService.getFiles();
    return res.json(files);
});
exports.getFiles = getFiles;
const getFileById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const file = yield FileService.getFileById(id);
        return res.json(file);
    }
    catch (err) {
        console.error(err);
    }
});
exports.getFileById = getFileById;
const addFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newFile = req.body;
        const result = yield FileService.addFile(newFile);
        return res.json(result);
    }
    catch (err) {
        console.error(err);
    }
});
exports.addFile = addFile;
const updateFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const newFile = req.body;
        const result = yield FileService.updateFile(newFile, id);
        return res.send({ message: 'Successfully updated' });
    }
    catch (err) {
        console.error(err);
    }
});
exports.updateFile = updateFile;
const deleteFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield FileService.deleteFile(id);
        return res.json(result);
    }
    catch (err) {
        console.error(err);
    }
});
exports.deleteFile = deleteFile;
