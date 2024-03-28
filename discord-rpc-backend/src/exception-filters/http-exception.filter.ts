import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
  LoggerService,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger: LoggerService = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const isProduction = process.env.NODE_ENV === 'production';

    this.logger.error(`Exception: ${exception.message}, status: ${status}`);

    response.status(status).json(
      isProduction
        ? {
            statusCode: status,
            message: exception.message,
            timestamp: new Date().toISOString(),
          }
        : {
            statusCode: status,
            message: exception.message,
            timestamp: new Date().toISOString(),
            stacktrace: exception.stack,
          },
    );
  }
}
