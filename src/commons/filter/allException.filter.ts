import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status: HttpStatus;
    let errorMessage: string;
    let responseCode: string;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      errorMessage = exception.message;
      responseCode = HttpStatus[status];
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      errorMessage =
        'The server encountered an unexpected condition which prevented it from fulfilling the request.';
      responseCode = 'INTERNAL_ERROR';
    }

    response.status(status).json({ responseCode, errorMessage });
  }
}
