import faker from 'faker'

export class Factory{
    
    static getUser(type, admin = true){
        switch (type){
            case 'valid':
                return {
                    "nome": faker.name.findName(),
                    "email": faker.internet.email(),
                    "password": faker.internet.password(),
                    "administrador": admin.toString()
                }
                
            case 'invalid':
                return {
                    "nome": "Fulano da Silva",
                    "email": "beltrano@qa.com.br",
                    "password": "teste",
                    "administrador": "true"
                }

            case 'empty':
                return {
                    "nome": "",
                    "email": "",
                    "password": "",
                    "administrador": admin.toString()
                
            
                }
                default:
                    return {notfound:"The user type was not found, please verify!" }         
        }
    }
}   