import { login } from '../api/user.js';
import { html } from '../libraryPaths.js';
import { createSubmitHandler } from '../util.js';

let loginTemplate = (onLogin) => html`<form @submit=${onLogin}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`;

export function loginView(ctx) {

    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }) {

        if (email == '' && password == '') {

            return alert('All fields are required!');

        }

        await login(email, password);

        ctx.updateNavigationBar();

        ctx.page.redirect('/');

    }

}