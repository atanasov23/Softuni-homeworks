import { logout } from '../api/user.js';
import { html, render, page } from '../libraryPaths.js';
import { getUserData } from '../util.js';

let header = document.querySelector('header');

let navigationTemplate = (hasUser) => html`<nav>
<img src="./images/headphones.png">
<a href="#">Home</a>
<ul>
    <!--All user-->
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
    <!--Only guest-->

    ${hasUser ? html`<li><a href="/create">Create Album</a></li>
    <li @click=${onLogout}><a href="javascript: void(0)">Logout</a></li>` : html`<li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>`}
    
    <!--Only user-->

</ul>
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