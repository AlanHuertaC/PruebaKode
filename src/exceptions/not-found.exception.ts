import { HttpException } from "../exceptions/http.exception";

export class NotFoundException extends HttpException {
    constructor() {
        super(404, 'Not Found');
    }
}