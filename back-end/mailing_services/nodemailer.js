"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendingMail = async (actionType, userInfo, orderInfo) => {

    console.log(actionType, userInfo, orderInfo)

    const confirmationEmail = {
        from: '"JJFresh Shop" <JJFreshCustomerCentre@gmail.com>',
        to: userInfo.email,
        subject: "(no-reply)Order Confirmation: Your order has been successfully placed!",
        html: `<h1>Dear customer,</h1>
                <p>Thank you for your order! Here are the details of your order: </p>
                <p>${orderInfo.type} (${orderInfo.size}) x 1          - $${orderInfo.price}</p>
                <p>It is scheduled to be delivered at ${orderInfo.deliveryTime}</p>`
    }

    const cancellationEmail = {
        from: '"JJFresh Shop" <JJFreshCustomerCentre@gmail.com>',
        to: userInfo.email,
        subject: "(no-reply)Order Cancellation: We are sorry to see you go.",
        html: `<h1>Dear customer,</h1>
                <p>Your order for ${orderInfo.type} (${orderInfo.size}) has been cancelled,</p>
                <p>we look forward to doing business with you in the future!</p>
                <p>Best regards,<br/>JJFresh Shop Team</p>`
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        requireTLS: true,
        pool: true, // prevent 'too many login attempts' error
        auth: {
            user: process.env.JJFRESH_USERNAME, // generated ethereal user
            pass: process.env.JJFRESH_PASSWORD // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info;
    if (actionType === 'confirm') {
        info = await transporter.sendMail(confirmationEmail);
    } else {
        info = await transporter.sendMail(cancellationEmail);
    }
    

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

module.exports = sendingMail;