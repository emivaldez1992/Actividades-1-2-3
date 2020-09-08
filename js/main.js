(function() {
  "use strict";

  var materia = document.getElementById('materia');

  document.addEventListener('DOMcontentLoaded', function() {

    //cargamos aca los datos del usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    //aqui estan los tickets
    var pase_dia = document.getElementById("pase_dia");
    var pase_completo = document.getElementById("pase_completo");
    var pase_tresdias = document.getElementById("pase_tresdias");

    //Botones
    var calcular = document.getElementById("calcular");
    var errordiv = document.getElementById("error");
    var botonRegistro = document.getElementById("BtnRegistro");
    var resultado = document.getElementById("lista_productos");

    calcular.addEventListener('click',calcularMontos);

    function calcularMontos(event){
      event.preventDefault();
      if (materia.value)
      console.log('pase_dia.value');
      console.log('pase_tresdias.value');
      console.log('pase_completo');
      }
  }); //DOM CONTENT LOADED
})();
