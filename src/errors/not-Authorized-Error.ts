import { CustomError } from "./custom-Error";

export class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor(){
        super('Not Authorized');

            Object.setPrototypeOf(this, NotAuthorizedError.prototype);
        
    }

    serializeError() {
        return [{message: 'Not Authorized'}];
    }
}