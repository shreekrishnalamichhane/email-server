import { NextFunction, Request, Response } from 'express';
import { EMAIL_AUTH_SECRET } from './config/constants';
import { CustomError } from './errors/CustomError';
import { ResponseErrorhandler } from './errors/response';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Retrieve the access token from the cookie or the authorization header
    const authToken = req.headers['authorization']?.split(' ')[1];

    // If the access token is not present, throw an error
    if (!authToken) throw new CustomError('Unauthorized', 401);

    // Verify the access token
    // If the access token is invalid, throw an error
    if (authToken !== EMAIL_AUTH_SECRET) throw new CustomError('Unauthorized', 401);

    // Else if the access token is valid, proceed to the next middleware
    next();
  } catch (error) {
    // If any error occurs, handle the error
    const handledError = ResponseErrorhandler.handleError(error);

    // Return the error response
    return res.status(handledError.status).json(handledError);
  }
};
