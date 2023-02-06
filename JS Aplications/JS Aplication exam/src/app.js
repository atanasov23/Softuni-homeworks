import { registerView } from './views/register.js';
import { page, render } from './libraryPaths.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { catalogView } from './views/catalog.js'
import { updateNavigationBar } from './views/navigationBar.js';
import { getUserData } from './util.js';
import { detailsView, edit } from './views/showDetails.js';
import { createView } from './views/create.js';

let main = document.querySelector('main');


page(decorationContext);
page('/', homeView);
page('/catalog', catalogView);
page('/catalog/:id', detailsView);
page('/login', loginView);
page('/register', registerView);
page('/edit/:id', edit);
page('/create', createView);
//page('/create', () => console.log('create'));

updateNavigationBar();

page.start();

function decorationContext(ctx, next) {

    ctx.render = renderMain;
    ctx.updateNavigationBar = updateNavigationBar;

    let user = getUserData();

    if (user) {

        ctx.user = user;

    }

    next();
}

function renderMain(content) {

    render(content, main);

}




