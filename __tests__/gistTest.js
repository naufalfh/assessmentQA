import Element from '../page-model';
import * as data from '../data';
require('dotenv').config();

fixture('GIST QA Scenarios')
    .meta({ author: 'Naufal', creationDate: '09/13/2020' })
    .page(process.env.GIST_WEB)

test('As a user, I want to create a public gist', async t => {
    await t
        .click(Element.loginButton)
        .typeText(Element.usernameField, data.inputData.username)
        .click(Element.passwordField)
        .typeText(Element.passwordField, data.inputData.password)
        .click(Element.submitLogin)
        .click(Element.addButton)
        .click(Element.description)
        .typeText(Element.description, data.inputData.descriptionFill)
        .click(Element.fileName)
        .typeText(Element.fileName, data.inputData.fileName)
        .click(Element.content)
        .typeText(Element.content, data.inputData.fileContent)
        .click(Element.dropdownCreate)
        .click(Element.publicGist)
        .click(Element.createButton)
});

test('As a user, I want to edit an existing gist', async t => {
    await t
    .click(Element.loginButton)
    .typeText(Element.usernameField, data.inputData.username)
    .click(Element.passwordField)
    .typeText(Element.passwordField, data.inputData.password)
    .click(Element.submitLogin)
    .click(Element.profileButton)
    .click(Element.yourGist)
    .click(Element.chooseToEdit)
    .click(Element.editButton)
    .click(Element.content)
    .typeText(Element.content, data.inputData.fileContentEdit)
    .click(Element.updateButton)
});

test('As a user, I want to delete an existing gist', async t => {
    await t
    .click(Element.loginButton)
    .typeText(Element.usernameField, data.inputData.username)
    .click(Element.passwordField)
    .typeText(Element.passwordField, data.inputData.password)
    .click(Element.submitLogin)
    .click(Element.profileButton)
    .click(Element.yourGist)
    .click(Element.chooseToDelete)
    .click(Element.deleteButton)
});

test('As a user, I want to see my list of gists', async t => {
    await t
    .click(Element.loginButton)
    .typeText(Element.usernameField, data.inputData.username)
    .click(Element.passwordField)
    .typeText(Element.passwordField, data.inputData.password)
    .click(Element.submitLogin)
    .click(Element.profileButton)
    .click(Element.yourGist)
    .expect(Element.verifyProductUrl()).contains(data.inputData.yourGists)
});