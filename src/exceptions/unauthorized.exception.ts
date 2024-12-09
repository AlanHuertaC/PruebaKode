import { HttpException } from "../exceptions/http.exception";

export class UnauthorizedException extends HttpException {
    constructor() {
        super(401, 'Unauthorized');
    }
}