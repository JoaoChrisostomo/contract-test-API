import faker from 'faker'

export class Factory{
    
    static postUsuario(type, admin = true){
        switch(type){
            case 'valido':
                return {
                    "nome": faker.name.findName(),
                    "email": faker.internet.email(),
                    "password": faker.internet.password(),
                    "administrador": admin.toString()
                }
                
            case 'invalido':
                return {
                    "nome": "Fulano da Silva",
                    "email": "beltrano@qa.com.br",
                    "password": "teste",
                    "administrador": "true"
                }

            case 'vazio':
                return {
                    "nome": "",
                    "email": "",
                    "password": "",
                    "administrador": admin.toString()
                }
            
            case 'novo_usuario':
                return {
                    "nome": faker.name.findName(),
                    "email": faker.internet.email(),
                    "password": faker.internet.password(),
                    "administrador": admin.toString()
                }
        }
    }

    static updateUsuario(admin = true){
        return {
            "nome": faker.name.findName(),
            "email": faker.internet.email(),
            "password": faker.internet.password(),
            "administrador": admin.toString()
        }
    }
}