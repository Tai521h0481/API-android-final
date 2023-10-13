const { Folder } = require('../models');


const createFolder = async (req, res) => {
    const {foldeNameEnglish, folderNameVietnamese} = req.body;
    try {
        const folder = await Folder.create({foldeNameEnglish, folderNameVietnamese});
        res.status(200).json({ folder });
    } catch (error) {
        res.status(500).json({ error });
    }
}

const getFolderById = async (req, res) => {
    const id = req.params.id || req.query.id;
    try {
        const folder = await Folder.findById(id);
        res.status(200).json({ folder });
    } catch (error) {
        res.status(500).json({ error });
    }
}

const getAllFolders = async (req, res) => {
    try {
        const folders = await Folder.find();
        if (folders.length === 0) {
            res.status(404).json({ message: "Folders not found" });
            return;
        }
        res.status(200).json({ folders });
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = {
    createFolder,
    getFolderById,
    getAllFolders
}