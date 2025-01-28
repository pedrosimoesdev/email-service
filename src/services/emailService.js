require('dotenv').config();
const core = require('../../core/email');

exports.sendEmail = async (req) => {
    try {
        return new Promise((resolve, reject) => {
            core.transporterEmail().sendMail(core.mailOption(req), (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                    return reject(new Error('Failed to send email: ' + error.message));
                }
                resolve(info);
            });
        });
     } catch (error) {
        console.error('Error sending email:', error);
        return  error.message;
    }
};





