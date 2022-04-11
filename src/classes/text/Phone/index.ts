export class Phone {
    static testPhoneNumber (number: string) {
        const phoneRegExp = /^(\+7)(9)\d{9}$/
        return phoneRegExp.test(number)
    }
}