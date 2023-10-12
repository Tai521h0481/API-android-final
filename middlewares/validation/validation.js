const validateInput = (requiredFields) => (req, res, next) => {
    for (const field of requiredFields) {
        if (!req.body[field]) {
            res.status(400).json({ error: `Missing field ${field}` });
            return;
        }
        if (typeof req.body[field] === 'string') {
            const value = req.body[field].trim();
            if (value.length === 0) {
                res.status(400).json({ error: `The field ${field} cannot be empty` });
                return;
            }
        }
    }
    next();
};

const isExistId = (Model) => async (req, res, next) => {
    const userId = req.params.userId || req.body.userId || req.query.userId;
    try {
        const model = await Model.findById(userId);
        if (!model) {
            return res.status(404).json({ message: `${Model.name} does not exist with id: ${userId}` });
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const isCreated = (Model) => async (req, res, next) => {
    const email = req.body.email || req.query.email || req.params.email;
    try {
        const user = await Model.findOne({ email });
        if (user) {
            res.status(409).json({ error: `Email: ${email} already exists` });
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const isExistEmail = (Model) => async (req, res, next) => {
    const email = req.body.email || req.query.email || req.params.email;
    try {
        const user = await Model.findOne({ email });
        if (!user) {
            res.status(404).json({ error: `Email: ${email} does not exists` });
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const isCreatedUsername = (Model) => async (req, res, next) => {
    const username = req.body.username || req.query.username || req.params.username;
    try {
        const user = await Model.findOne({ username });
        if(user){
            res.status(409).json({ error: `Username: ${username} already exists` });
        }
        else{
            next();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    validateInput,
    isExistId,
    isCreated,
    isExistEmail,
    isCreatedUsername
};