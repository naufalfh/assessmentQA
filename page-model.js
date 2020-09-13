import {Selector} from 'testcafe';
import {ClientFunction} from 'testcafe';

class Element {
    constructor(){
        this.loginButton = Selector('.HeaderMenu-link').withText('in');
        this.usernameField = Selector('#login_field');
        this.passwordField = Selector('#password');
        this.submitLogin = Selector('.btn-primary');
        this.addButton = Selector('.d-none.octicon-plus');
        this.description = Selector('.input-contrast');
        this.fileName = Selector('.js-blob-filename');
        this.content = Selector('.CodeMirror-scroll');
        this.dropdownCreate = Selector('.select-menu-button');
        this.publicGist = Selector('.select-menu-item').withText('Create public gist');
        this.createButton = Selector('.hx_create-pr-button');
        this.profileButton = Selector('.name');
        this.yourGist = Selector('.dropdown-item').withText('Your gists');
        this.chooseToEdit = Selector('div.px-lg-2 .css-truncate-target');
        this.chooseToDelete = Selector('.css-truncate-target').withText('delete-gist.md');
        this.deleteButton = Selector('.btn-danger');
        this.editButton = Selector('.btn-sm').withText('Edit');
        this.verifyProductUrl = ClientFunction(() => document.location.href);
        this.updateButton = Selector('.btn-primary').withText('Update public gist');
    }
}

export default new Element();