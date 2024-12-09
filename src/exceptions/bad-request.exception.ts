import { HttpException } from "../exceptions/http.exception";

export class BadRequestException extends HttpException {
    constructor() {
        super(400, 'Bad Request');
    }
}