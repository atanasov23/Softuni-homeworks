import { register } from '../api/user.js';
import { html } from '../libraryPaths.js';
import { createSubmitHandler } from '../util.js';

let registerTemplate = (onRegister) => html`<form @submit=${onRegister}>
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
        <div class="form-group">
            <label class="form-control-label" for="rePass">Repeat</label>
            <input class="form-control" id="rePass" type="password" name="rePass">
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
    </div>
</div>
</form>`; 

export function registerView(ctx){

    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister(data){

        console.log(data);

        if (data.email == '' && data.password == '' && data['rePass'] == '') {

            return alert('All fields are required!');
        }

        if(data.password !== data['rePass']){

            return alert('Password don\'t match');

        }

        await register(data.email, data.password);

        ctx.updateNavigationBar();

        ctx.page.redirect('/');


    }


}

