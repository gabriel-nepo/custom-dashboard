const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const {host,port,user,pass} = require('../../config/mail');

const transport = nodemailer.createTransport({
    host: host,
    port: port,
    auth: {
        user: user,
        pass: pass
    }
});

transport.use('compile',hbs({
    viewEngine: {
        extName: '.html',
        partialsDir: path.resolve('./src/resources/mail/'),
        layoutsDir: path.resolve('./src/resources/mail/'),
        defaultLayout: 'auth/mail.html',
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html'

}))

module.exports = transport;