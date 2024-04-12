const script_do_google = 'https://script.google.com/macros/s/AKfycbzk_Npj7wOejWqMRP1roLe8u4ltyZneWwQIWye3DzmRCJeQas1bzzVW8kJ8Pf6safMOyg/exec' ;
const dados_do_formulario = document.forms['formulario'];

dados_do_formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(script_do_google, {method: 'POST', body: new FormData(dados_do_formulario) })
    .then(response => {
        alert('Parabéns, você está inscrito! Aguarde o contato de nosso professor via WhatsApp', response);
        dados_do_formulario.reset();
    })
    .catch(error =>
    console.error('Erro no envio dos dados!', error));
    });

