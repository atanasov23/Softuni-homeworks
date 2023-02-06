import { logout } from '../api/user.js';
import { html, render, page } from '../libraryPaths.js';
import { getUserData } from '../util.js';


let header = document.querySelector('header');

let navigationTemplate = (hasUser) => html`
<h1><a href="/">Furniture Store</a></h1>
<nav>
    ${hasUser ? html`
            <a id="catalogLink" href="/catalog" class="active">Dashboard</a>
            <div id="user">
                <a id="createLink" href="/create" >Create Furniture</a>
                <a id="#profileLink" href="/myFurnitures">My Publications</a>
                <a id="logoutBtn" href="javascript:void(0)" @click=${onLogout}>Logout</a>
            </div>`: html`<div id="guest">
            <a id="catalogLink" href="/catalog" class="active">Dashboard</a>
            <a id="loginLink" href="/login">Login</a>
            <a id="registerLink" href="/register">Register</a>
        </div>`}

</nav>`

export function updateNavigationBar() {

    let user = getUserData();

    render(navigationTemplate(user), header);

}

function onLogout() {

    logout();
    updateNavigationBar();
    page.redirect('/');

}