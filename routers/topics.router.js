const express = require('express');
const topicsRouter = express.Router();

const { Topics } = require('../models');

topicsRouter.get("/");

topicsRouter.get("/:id");

topicsRouter.post("/");

topicsRouter.post("/vocabularies/:id");

topicsRouter.delete("/:id/vocabularies/:vocabularyId");

topicsRouter.put("/:id/vocabularies/:vocabularyId");

module.exports = topicsRouter;