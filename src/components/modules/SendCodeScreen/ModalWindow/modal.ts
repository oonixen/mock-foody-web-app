import http from "../../../../services/http";
import api from "../../../../services/api";
import {Phone} from "../../../../classes/text/Phone";

export function sendPhone(phone: string, success: () => any, error: () => any) {

    if (!Phone.testPhoneNumber(phone)) {
        error()
        return
    }

    http.iRequestHandler.handle(() => {
            return api.iAuthApi.authSendCode({phoneNumber: phone})
        },
        success,
        error
    )
}