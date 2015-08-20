(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-60834140-1', 'auto');
ga('send', 'pageview');

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
