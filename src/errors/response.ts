import { ZodError } from 'zod';
import { DEV_ENV } from '../config/constants';
import DiscordPingService from '../utils/discordPing';
import { CustomError } from './CustomError';

export const ResponseErrorhandler = {
  handleError: function (error: any) {
    if (error instanceof ZodError) return this.handleZodError(error);
    else if (error instanceof CustomError) return this.handleCustomError(error);

    DiscordPingService.error(error);
    DEV_ENV && console.log(error);
    return { success: false, status: 500, message: 'Server error occured, system engineers are notified.', data: null };
  },

  handleZodError: function (error: ZodError) {
    return { success: false, status: 422, message: 'Validation Error', data: error.flatten().fieldErrors };
  },

  handleCustomError: function (error: CustomError) {
    return { success: false, status: error.status, message: error.message, data: [] };
  },
};
