const {body} = require("express-validator");
exports.validationInputs = () => {
    return [
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Email must be valid'),
        body('subject').trim().notEmpty().withMessage('Subject is required'),
        body('message').trim().notEmpty().withMessage('Message is required')
    ];
};