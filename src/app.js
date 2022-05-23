// Importando lógica de rotas
import Utils from "./service/Utils";

// Importando páginas
import Home from './views/home';
import ErrorPage from './views/error';
import Contato from './views/contato';


// rotas
let routes = {
    '/': Home,
    '/contato': Contato
}

const router = async () => {
    const app = document.getElementById('app');
    let request = Utils.parseRequestURL();

    let parseURL = ( request.resource ? '/' + request.resource : '/' ) + (request.id ? '/:id' + request.id : '') + (request.verb ? '/' + request.verb : '');
    let page = routes[parseURL] ? routes[parseURL] : ErrorPage;

    app.innerHTML = await page.render();
    await page.after_render();
}

// Observa mudanças na hash
window.addEventListener('hashchange', router);

// Carregamento da página
window.addEventListener('load', router);