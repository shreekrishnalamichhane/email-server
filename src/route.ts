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
router.post('/account/forgot-password', EmailController.forgotPassword);

export default router;
