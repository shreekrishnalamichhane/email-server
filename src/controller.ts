import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';
import { TResponse } from './@types/response';

import { T_EmailForgotPassword } from './@types/emails';
import { SMTP_FROM, SMTP_FROM_NAME, SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_SECURE, SMTP_USER } from './config/constants';
import { ResponseErrorhandler } from './errors/response';
import { ForgotPasswordMail } from './modules/account/forgot-password';

const transport = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE, // true for 465, false for other ports
  auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  tls: { rejectUnauthorized: false },
});

const FromString = (name = SMTP_FROM_NAME) => '"' + name + '" <' + SMTP_FROM + '>';

type ExpressResponse = Promise<Response<TResponse>>;

export const EmailController = {
  forgotPassword: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailForgotPassword = req.body;

      // Convert the component to html with data
      const html = renderToString(ForgotPasswordMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);

      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },
};
