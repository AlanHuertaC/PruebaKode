import { ValueObject } from "../../../common/value.object";

export class UserPassword extends ValueObject<string> {
    static passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?`~\-])(?=.{8,})/;

    protected validate(value: string): boolean {
        return UserPassword.passwordRegex.test(value);
    }
}