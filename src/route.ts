import express, { Request, Response } from 'express';
import { EmailController } from './controller';
import { auth } from './middleware';
const router = express.Router();

// Attach the auth middleware to all the routes
router.use(auth);

// Email server status
router.get('/status', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Email server is running' });
});

// Account emails
router.post('/account/login-otp', EmailController.loginOTP);
router.post('/account/forgot-password', EmailController.forgotPassword);
router.post('/account/change-password', EmailController.changePassword);
router.post('/account/user-create', EmailController.userCreate);
router.post('/account/user-invite', EmailController.userInvite);

// Company emails
router.post('/company/registration', EmailController.companyRegistration);
router.post('/company/verification-received', EmailController.companyVerificationReceived);
router.post('/company/verification-approved', EmailController.companyVerificationApproved);
router.post('/company/verification-rejected', EmailController.companyVerificationRejected);

// Subscription emails
router.post('/subscription/upgrade', EmailController.subscriptionUpgrade);
router.post('/subscription/downgrade', EmailController.subscriptionDowngrade);
router.post('/subscription/renew', EmailController.subscriptionRenew);

export default router;
