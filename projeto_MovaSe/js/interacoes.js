$(document).ready(function(){
    $('#destaque').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false 
    });
});

// Interação Menu
function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none';
    }else{
        itens.style.display = 'block'
    }
} 
