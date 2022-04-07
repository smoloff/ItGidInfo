class Valid2 extends Valid {
    constructor(email, password, isValid = false, emaiError = '', passwordError = '') {
        super(email, password, isValid)
        this.emaiError = emaiError;
        this.passwordError = passwordError
    }
}