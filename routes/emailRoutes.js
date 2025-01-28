const express = require('express');
const router = express.Router();
const emailController = require('../src/controllers/emailController');
const middlewares = require('../core/middlewares/validations');
const { validationResult} = require("express-validator");

// Routes to controllers
router.post(
    '/',
    ...middlewares.validationInputs(),
    async (req, res) => {
     try{
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
             return res.status(400).json({
                 success: false,
                 message: 'Validation error',
                 errors: errors.array(),
             });
         }

         const result = await emailController.sendEmail(req.body);
         // Send success response
         return res.status(200).json({
             success: true,
             message: 'Email sent successfully',
             data: result,
         });
     } catch (err) {
         console.error('Error in email sending:', err);
         return res.status(500).json({
             success: false,
             message: err.message || 'Failed to send email',
             error: err.stack || ''
         });
     }

});

module.exports = router;