const botaoLateral = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');

botaoLateral.addEventListener("click", () => {
    menuLateral.classList.toggle('menu-lateral--ativo') //-- toggle ativa e destiva a class au tomaticamente --
});


/*menuLateral.style.visibility = 'hidden';

function mostrarEsconderMenuLateral() {

    if (menuLateral.style.visibility == 'hidden') {
        menuLateral.style.visibility = 'visible';
        
    }
    else if (menuLateral.style.visibility == 'visible') {
        menuLateral.style.visibility = 'hidden';
    } else {
        
    }
};*/