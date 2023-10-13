const express = require('express');
const foldersRouter = express.Router();

const { Folders } = require('../models');
const { createFolder, getFolderById, getAllFolders } = require('../controllers/folders.controller');

foldersRouter.post("/", createFolder);

foldersRouter.get("/", getAllFolders);

foldersRouter.get("/:id" , getFolderById);

foldersRouter.put("/:id");
module.exports = foldersRouter;