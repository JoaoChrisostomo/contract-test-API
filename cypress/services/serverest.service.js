import Rest from './common/_rest.service'
import {Factory} from '../fixtures/factory'

const URL_USERS = '/usuarios'
const URL_LOGIN = '/login'

export class ServeRest extends Rest {


     // Usuarios
     static get_all_users() {
        return super.httpRequestWithoutBody('GET', URL_USERS)
    }

    static post_user_by_type(type){
        let body = Factory.postUser(type)
        return super.httpRequestWithBody('POST', URL_USERS, body)
    }

    static put_user_by_type( _id, type){
        let body = Factory.putUser(type)
        return super.httpRequestWithBody('PUT', `${URL_USERS}/${_id}`, body)
    }

    static deletar_user(_id){
        return super.httpRequestWithoutBody('DELETE', `${URL_USERS}/${_id}`)
        
    }

    //LOGIN
    static post_login_by_type(type){
        let body = Factory.postLogin(type)
        return super.httpRequestWithBody('POST', URL_LOGIN, body)
    }
}