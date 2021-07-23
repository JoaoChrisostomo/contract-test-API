/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service';

// GET

When(`fazer uma requisição de /usuarios`, () => {
ServeRest.get_all_users().then(get_users_response => {
        cy.wrap(get_users_response).as('Response')
    })
});

Then(`deverá ser retornado o schema {string} com o status {int}`, (schema, status) => {
    cy.get('@Response').then(res => {
        cy.contractValidation(res, schema, status).then(valid => {
            expect(valid).to.be.true
        })
    })
});

// POST
When(`realizar o cadastro do usuário do tipo {string}`, (user_type) => {
    ServeRest.post_user_by_type(user_type).then(post_user_response => {
        cy.wrap(post_user_response).as('Response')
    })
});

Then(`deverá ser retornado o schema {string} com o status {int}`, (schema, status) => {
    cy.get('@Response').then(res => {
        cy.contractValidation(res, schema, status).then(valid => {
            expect(valid).to.be.true
        })
    })
});

// PUT

When(`editar o usuário de id {string} do tipo {string} `, (_id, user_type) => {
    ServeRest.put_user_by_type(_id, user_type).then(put_user_response => {
        cy.wrap(put_user_response).as('Response')
    })
});

Then(`deverá ser retornado o schema {string} com o status {int}`, (schema, status) => {
    cy.get('@Response').then(res => {
        cy.contractValidation(res, schema, status).then(valid => {
            expect(valid).to.be.true
        })
    })
});

// DELETE
Given(`que o usuário não tenha um carrinho cadastrado`, () => {
    cy.StepNotImplemented()
});

When(`deletar o usuário de id {string}`, (_id) => {
    ServeRest.deletar_user(_id).then(del_user_response => {
        cy.wrap(del_user_response).as('Response')
    })
});

Then(`deverá ser retornado o schema {string} com o status {int}`, (schema, status) => {
    cy.get('@Response').then(res => {
        cy.contractValidation(res, schema, status).then(valid => {
            expect(valid).to.be.true
        })
    })
});

/* Neste arquivo esta os steps que são escritos em linguagem gherkin. La dentro da contrato.feature. Importante lembrar que para cada Funcionalidade de uma API é feito uma feature.

// Exemplos: vamos pegar exemplo deste próprio Step. Aqui temos uma funcionalidade que é de cadastrar usúarios. Agora irei fazer uma suposição. Dado que eu seja um usuario. Para eu poder postar videos no youtube quais são os requisitos para isso ser realizado o tenho que fazer? 

*Preencher os campos obrigatórios para realizar o cadastro vamos supor que para realizar o cadastro só é necessario    nome, data de nascimento, email e telefone isso tudo é a regra de negócio para ser realizado o cadastro de usúarios.

Requisições ou Request ====> Essas são as Requisições que mais veremos em APIs
GET => Consultar
POST => Enviar alguma informação  
PUT => Atualizar
DELETE => Deletar algo
PATCH Não sei o que é 

Agora vocês concordam comigo que Apartir do momento que eu crio um usúario eu consigo consultar se o usúario esta cadastrado, consigo, enviar alguma informação, Atualização por exemplo o usuário alterou o email e o usúario consegue deletar também o cadastro. 
*/