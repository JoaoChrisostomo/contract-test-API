/// <reference types="cypress" />
import {When, Then, Given, And, But, Before} from 'cypress-cucumber-preprocessor/steps'
import { ServeRest } from '../../services/serverest.service';

When(`request all the users from /usuarios`, () => {
	ServeRest.get_all_users().then( users => {
        cy.wrap(users).as('Response')
    })
});

When(`post the user of type {string}`, (user_type) => {
	ServeRest.post_user_by_type(user_type).then(post_response => {
        cy.wrap(post_response).as('Response')
    })
});

Then(`must be responsed the schema {string} with status {int}`, (schema, status) => {
	 cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
});
