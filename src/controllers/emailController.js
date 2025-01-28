const emailService = require('../services/emailService');
exports.sendEmail = async (req) => {
   return emailService.sendEmail(req)
};