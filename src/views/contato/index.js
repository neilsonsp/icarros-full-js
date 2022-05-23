import Nav from '../../components/nav';
import Footer from '../../components/footer';
import loaderContent from '../../img/loading.gif';
import axios from 'axios';

let Contato = {
    render: async () => {
        let view = `
        ${Nav}
            <div>
                <h1>Contato</h1>
                <div id="loader"></div>
                <form id="contact">
                    <input type="text" id="name" placeholder="Seu nome">
                    <input type="text" id="phone" placeholder="Seu telefone">
                    <input type="submit" value="Enviar">
                </form>
            </div>
        ${Footer}
        `

        return view
    },
    after_render: async () => {
        let form = document.getElementById("contact")
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let loader = document.getElementById("loader")

            let userName = document.getElementById('name').value,
                userPhone = document.getElementById('phone').value

            loader.innerHTML = `
                <img src="${loaderContent}" alt="loader">
            `

            axios.post('https://webhook.site/14daf0bb-75c8-4fde-8c5a-6d8bcc037928', {
                name: userName,
                phone: userPhone
            })
            .then( res => {
                loader.innerHTML = ``
            })
            .catch( e => console.error(e) )
            .finally( () => {
                loader.innerHTML = ``
            });
        })
    }
};

export default Contato;