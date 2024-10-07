import { createTransport } from "nodemailer";
import smtp from "nodemailer-smtp-transport";

const transporter = createTransport(
  smtp({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  })
);


export default transporter