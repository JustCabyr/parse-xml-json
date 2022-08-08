import { Response } from 'express';
import { InternalErrorResponse, NotFoundResponse } from './ApiResponse';

enum ErrorType {
  NOT_FOUND = 'NotFoundError',
}

export abstract class ApiError extends Error {
  // eslint-disable-next-line
  constructor(
    public type: ErrorType,
    public message: string = 'error',
    protected data?: any
  ) {
    super(type);
  }

  public static handle(err: ApiError, res: Response): Response {
    switch (err.type) {
      case ErrorType.NOT_FOUND:
        return new NotFoundResponse(err.message).send(res);
      default: {
        let message = err.message;
        return new InternalErrorResponse(message).send(res);
      }
    }
  }
}

export class NotFoundError extends ApiError {
  constructor(message = 'Not Found') {
    super(ErrorType.NOT_FOUND, message);
  }
}
