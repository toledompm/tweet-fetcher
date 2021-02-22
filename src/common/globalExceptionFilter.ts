import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch(Error)
export class GlobalExceptionFilter implements ExceptionFilter<Error> {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = this.getExceptionStatus(exception);

    response.status(statusCode).json({
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
  }

  private getExceptionStatus(exception: Error): number {
    if (exception instanceof HttpException) {
      return (exception as HttpException).getStatus();
    }

    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
