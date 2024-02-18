import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(Error)
export class GenericExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GenericExceptionFilter.name);

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    const isProduction = process.env.NODE_ENV === 'production';

    this.logger.error(
      `Unexpected error: ${exception.message}`,
      exception.stack,
    );

    response.status(status).json(
      isProduction
        ? {
            statusCode: status,
            message: 'Internal server error',
            timestamp: new Date().toISOString(),
          }
        : {
            statusCode: status,
            message: 'Internal server error',
            timestamp: new Date().toISOString(),
            stacktrace: exception.stack,
          },
    );
  }
}
