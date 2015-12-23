(function() {
  //Seleceiona os elementos e os atribuia a variaveis
  var btnOpen = document.getElementById("btnOpen");
  var menu = document.getElementById("menu");

  //Função para exibir ou ocultar os itens do menu
  function toggleMenu() {
    if(menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  //Atribui a função ao evento click no botão abrir
  btnOpen.addEventListener("click",toggleMenu);

  //Cria a media querie
  var mediaQuery = window.matchMedia("(min-width: 480px)");

  //Verifica a media query e determina se os itens do menu deve aparecer ou não
  if (mediaQuery.matches) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  //Verifica alterações e e determina se os itens do menu deve aparecer ou não
  mediaQuery.addListener(function(changed) {
    if(changed.matches) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
})();

// Menu feedback
$(document).ready(function(){

  var navLink = $('.menu-link'),
     local = window.location.pathname.split('/').pop();

  menuFeedback();

  function menuFeedback() {
    navLink.each(function(){
      if ($(this).attr('href') == local ) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  };

  if(local == "") {
    console.log('dsd');
    $('.menu-link:first').addClass('active');
  }

});
