import { logout } from '../api/user.js';
import { html, render, page } from '../libraryPaths.js';
import { getUserData } from '../util.js';

let header = document.querySelector('header');

let navigationTemplate = (hasUser) => html`
<a id="logo" href="/"
><img id="logo-img" src="./images/logo.jpg" alt=""
/></a>

<nav>

<div>
<a href="/catalog">Dashboard</a>
</div>

    ${hasUser ? html` <div class="user">
    <a href="/create">Create Offer</a>
    <a href="javascript:void(0)" @click=${onLogout}>Logout</a>
  </div>` : html`   <div class="guest">
  <a href="/login">Login</a>
  <a href="/register">Register</a>
</div>`}
    
    <!--Only user-->
</nav>`

export function updateNavigationBar(){

    let user = getUserData();

    render(navigationTemplate(user), header);

}

function onLogout(){

    logout();
    updateNavigationBar();
    page.redirect('/');

}