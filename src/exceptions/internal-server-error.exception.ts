import { HttpException } from "../exceptions/http.exception";

export class InternalServerErrorException extends HttpException {
    constructor() {
        super(500, 'Internal Server Error');
    }
}