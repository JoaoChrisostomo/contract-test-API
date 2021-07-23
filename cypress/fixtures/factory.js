import faker from 'faker'

export class Factory{

    static postUser(type, admin = true) {
        switch (type) {
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
                    "email": "fulano@qa.com",
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
                return { 
                    notfound:"The user type was not found, please verify!" 
                }
        }
    }

    static postLogin(type) {
        switch (type) {
            case 'invalid':
                return {
                    "email": faker.internet.email(),
                    "password": faker.internet.password
                    ()
                }
            case 'valid':
                return {
                    "email": "fulano@qa.com",
                    "password": "teste"
                }
            case 'empty':
                return {
                    "email": "",
                    "password": ""
                }
            default: 
                return { 
                    notfound:"The user type was not found, please verify!" 
                }
        }
    }

    static putUser(type, admin = true) {
        switch (type) {
            case 'new':
                return {
                    "nome": faker.name.findName(),
                    "email": faker.internet.email(),
                    "password": faker.internet.password(),
                    "administrador": admin.toString()
                }
            case 'valid':
                return {
                    "nome": "Peters one",
                    "email": "Peters_Jiks@hotmail.com",
                    "password": "teste",
                    "administrador": "true"
                  }
            case 'invalid':
                return {
                    "nome": "",
                    "email": "",
                    "password": "",
                    "administrador": ""
                }
            default: 
                return { 
                    notfound:"The user type was not found, please verify!" 
                }
        }
    }
}