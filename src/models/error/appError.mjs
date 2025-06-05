export default class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    switch (statusCode) {
      case 400:
        this.status = 'Bad Request, information is missing';
        break;
      case 401:
        this.status = 'Unauthorized, you must be logged in';
        break;
      case 403:
        this.status = 'Forbidden, you do not have permission';
        break;
      case 404:
        this.status = 'Not Found, we cannot locate the requested resource';
        break;
      case 405:
        this.status = 'Method Not Allowed';
        break;
      case 415:
        this.status = 'Unsupported Media Type';
        break;
      case statusCode.toString().startsWith('5'):
        this.status = 'Internal Server Error';
        break;
      default:
        this.status = 'Something went wrong, unknown error';
    }

    Error.captureStackTrace(this, this.constructor);
  }
}
