require('dotenv').config();
const core = require('../../core/email');

exports.sendEmail = async (req) => {
    try {
        return new Promise((resolve, reject) => {
            core.transporterEmail().sendMail(core.mailOption(req), (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                    return reject(new Error('Failed to send email: ' + error.message)); // Reject the Promise with an error
                }
                // return json with success,if you want a message, replace variable info to your message
                resolve(info);
            });
        });
     } catch (error) {
        console.error('Error sending email:', error);
        return  error.message;
    }
};





