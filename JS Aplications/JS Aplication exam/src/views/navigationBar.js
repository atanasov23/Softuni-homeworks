import { logout } from '../api/user.js';
import { html, render, page } from '../libraryPaths.js';
import { getUserData } from '../util.js';

let header = document.querySelector('header');

let navigationTemplate = (hasUser) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

<nav>
        <div>
          <a href="/catalog">Dashboard</a>
        </div>

    ${hasUser ? html`  <div class="user">
    <a href="/create">Add Album</a>
    <a href="#" @click=${onLogout}>Logout</a>
  </div>` : html`<li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>`}`

export function updateNavigationBar(){

    let user = getUserData();

    render(navigationTemplate(user), header);

}

function onLogout(){

    logout();
    updateNavigationBar();
    page.redirect('/');

}