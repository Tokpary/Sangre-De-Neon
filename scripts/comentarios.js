$(document).ready(function() {
    showComments();
  });

  function showComments(){
    $('#comentarios').empty();
    var comentarios = JSON.parse(localStorage.getItem('comentarios'));
    console.log(comentarios);
    comentarios.forEach(function(element) {
      console.log(element);
      $('#comentarios').append('<h5>'+ element.name +' </h5> \n <p> ' + element.descripcion +' </p>');
    });
  }

  $('#enviarBtn').on( "click", function() {

    var comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    var name = document.getElementById("comentarioName").value;
    var comentario = document.getElementById("comentarioContent").value;

    var nuevoComentario = {
        "id": comentarios.length + 1,
        "name": name,
        "descripcion": comentario
    };

    comentarios.push(nuevoComentario);

    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    document.getElementById("comentarioName").value = "";
    document.getElementById("comentarioContent").value = "";

    showComments();
  })


