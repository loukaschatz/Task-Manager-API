const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'loukasxatzialexiou@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const deleteAccountMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'loukasxatzialexiou@gmail.com',
        subject: 'Sad to leaving us!.',
        text: `Hello ${name}. We noticed that you want to delete your account what happend?`
    })
}

module.exports = {
    sendWelcomeEmail,
    deleteAccountMail
}