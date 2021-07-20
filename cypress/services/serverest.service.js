import Rest from './common/_rest.service'
import {Factory} from '../fixtures/factory.js'

const URL_USERS = '/usuarios'


export class ServeRest extends Rest {

    static get_all_users() {
        return super.httpRequestWithoutBody('GET', URL_USERS)
    }

    static post_user_by_type(type) {
        let body = Factory.getUser(type)
        return super.httpRequestWithBody('POST', URL_USERS, body)
    }
}