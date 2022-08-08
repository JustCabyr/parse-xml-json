import { Request, Response } from 'express';
import { NotFoundError } from '../../core/ApiError';
import { SuccessResponse } from '../../core/ApiResponse';

import asyncHandler from '../../helpers/asyncHandler';

export const parseXmlJson = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const { xml } = req.body;

    // Validate user input
    if (!xml)
      throw new NotFoundError('Kindly provide a xml data');

    return new SuccessResponse('Success!', xml).send(res);
  }
);
