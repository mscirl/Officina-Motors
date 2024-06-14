$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true
    });

    $('.menu_hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('.lista_motocicletas button').click(function() {
        const nomeMoto = $(this).siblings('h3').text();
        window.location.href = `contato.html?moto=${encodeURIComponent(nomeMoto)}`;
    });


})