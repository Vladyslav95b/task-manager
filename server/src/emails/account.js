const sgMail = require('@sendgrid/mail');

const sendgridAPIkey =
process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIkey);


const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dev.vladyslavb@gmail.com',
        subject: 'Thanks for join in',
        text: `Welcome to the app, ${name}`
    });
}

const sendCancelationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dev.vladyslavb@gmail.com',
        subject: 'Bye, have a good day',
        text: `Bye, have a good day, ${name}`
    });
}

module.exports = {
    sendWelcomeMail,
    sendCancelationMail
}
