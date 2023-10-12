const express = require('express');
const topicsRouter = express.Router();
require('dotenv').config();

const { Topics } = require('../models');

topicsRouter.get("/");

topicsRouter.post("/");

topicsRouter.post("/:id/vocabularies");

topicsRouter.delete("/:id/vocabularies/:vocabularyId");