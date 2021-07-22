/// <reference types="cypress" />
import { When, Then, Given, And, But, Before } from 'cypress-cucumber-preprocessor/step'
import  {ServeRest}  from '../../services/serverest.service';

When(`solicitar dados para /login`, () => {
    ServeRest.post_de_login().then(users => {
        cy.wrap(users).as('Response')
    })
});
    
When(`logar com usuario do tipo {string}`, (user_type) => {
	ServeRest.logar_usuario_do_tipo(user_type).then(post_login => {
        cw.wrap(post_login).as('Response')
    })
});

Then(`deve ser retornado o schema {string} com  status {int}`, (schema, status) => {
	cy.get('@Response').then( res => {
        cy.loginValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true 
    
        }) 
    })
});

