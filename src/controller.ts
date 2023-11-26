import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { renderToString } from 'react-dom/server';
import { TResponse } from './@types/response';

import {
  T_EmailChangePassword,
  T_EmailCompanyRegister,
  T_EmailCompanySubscriptionDowngradeMail,
  T_EmailCompanySubscriptionRenewMail,
  T_EmailCompanySubscriptionUpgradeMail,
  T_EmailCompanyVerificationApprovedMail,
  T_EmailCompanyVerificationReceivedMail,
  T_EmailCompanyVerificationRejectedMail,
  T_EmailForgotPassword,
  T_EmailLoginOTP,
  T_EmailUserCreate,
  T_EmailUserInvite,
} from './@types/emails';
import { SMTP_FROM, SMTP_FROM_NAME, SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_SECURE, SMTP_USER } from './config/constants';
import { ResponseErrorhandler } from './errors/response';
import { ForgotPasswordMail } from './modules/account/forgot-password';
import { LoginOTPMail } from './modules/account/otp';
import { ChangePasswordMail } from './modules/account/reset-change-password';
import { UserCreateMail } from './modules/account/user-create';
import { UserInviteMail } from './modules/account/user-invite';
import { CompanyRegistrationMail } from './modules/company/registration';
import { CompanyVerificationApprovedMail } from './modules/company/verification-approved';
import { CompanyVerificationReceivedMail } from './modules/company/verification-received';
import { CompanyVerificationRejectedMail } from './modules/company/verification-rejected';
import { CompanySubscriptionDowngradeMail } from './modules/subscription/subscription-downgrade';
import { CompanySubscriptionRenewMail } from './modules/subscription/subscription-renewed';
import { CompanySubscriptionUpgradeMail } from './modules/subscription/subscription-upgrade';

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
  loginOTP: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailLoginOTP = req.body;

      // Convert the component to html with data
      const html = renderToString(LoginOTPMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);

      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  forgotPassword: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailForgotPassword = req.body;

      // Convert the component to html with data
      const html = renderToString(ForgotPasswordMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);

      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  changePassword: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailChangePassword = req.body;

      // Convert the component to html with data
      const html = renderToString(ChangePasswordMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);

      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  userCreate: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailUserCreate = req.body;

      // Convert the component to html with data
      const html = renderToString(UserCreateMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);

      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  userInvite: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailUserInvite = req.body;

      // Convert the component to html with data
      const html = renderToString(UserInviteMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);

      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  companyRegistration: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailCompanyRegister = req.body;

      // Convert the component to html with data
      const html = renderToString(CompanyRegistrationMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);

      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  companyVerificationReceived: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailCompanyVerificationReceivedMail = req.body;

      // Convert the component to html with data
      const html = renderToString(CompanyVerificationReceivedMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);

      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  companyVerificationApproved: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailCompanyVerificationApprovedMail = req.body;

      // Convert the component to html with data
      const html = renderToString(CompanyVerificationApprovedMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);
      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  companyVerificationRejected: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailCompanyVerificationRejectedMail = req.body;

      // Convert the component to html with data
      const html = renderToString(CompanyVerificationRejectedMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);
      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  subscriptionUpgrade: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailCompanySubscriptionUpgradeMail = req.body;

      // Convert the component to html with data
      const html = renderToString(CompanySubscriptionUpgradeMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);
      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },

  subscriptionDowngrade: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailCompanySubscriptionDowngradeMail = req.body;

      // Convert the component to html with data
      const html = renderToString(CompanySubscriptionDowngradeMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

      // Return the response
      return res.status(200).json({ status: 200, message: 'Email sent', data: response });
    } catch (error) {
      // If any error occurs, handle the error
      const handledError = ResponseErrorhandler.handleError(error);
      // Return the error response
      return res.status(handledError.status).json(handledError);
    }
  },
  subscriptionRenew: async (req: Request, res: Response): ExpressResponse => {
    try {
      // Retrieve the data from the request body
      const data: T_EmailCompanySubscriptionRenewMail = req.body;

      // Convert the component to html with data
      const html = renderToString(CompanySubscriptionRenewMail(data));

      // Send the email
      const response = await transport.sendMail({ ...data, from: FromString(data.from), html });

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
