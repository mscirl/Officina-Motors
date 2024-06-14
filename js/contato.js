$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true
    });

    $('.menu_hamburguer').click(function(){
        $('nav').slideToggle();
});

$('#telefone').mask('(00)00000-0000')
    
//validações de campos do formulário
$('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required:true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome aqui',
            email: 'Insira aqui um e-mail válido',
            telefone: 'Digite um número de telefone válido',
            mensagem: 'Insira aqui uma mensagem para a nossa equipe'
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos obrigatórios que não foram preenchidos`)
            }
        },
        submitHandler: function(form) {
            alert("Em breve entraremos em contato com você");
            window.location.href = "./index.html";
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const motoInteresse = urlParams.get('moto');
    if (motoInteresse) {
        $('#motocicleta-interesse').val(motoInteresse);
    }
});