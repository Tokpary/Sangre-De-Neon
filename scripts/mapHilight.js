$(function() {
    $('.maparea').maphilight();
    imageMapResize();
});

$(document).ready(function() {
    var img = document.getElementById("ImagenMapa");
    var anchoOriginal = img.width;
    var altoOriginal = img.naturalHeight;
    var anchoActual = img.width;
    var altoActual = img.height;
    var relacionAncho = anchoActual / anchoOriginal;
    var relacionAlto = altoActual / altoOriginal;
    var areas = document.getElementsByTagName("area");
    for (var i = 0; i < areas.length; i++) {
    var coords = areas[i].getAttribute("coords").split(",");
    for (var j = 0; j < coords.length; j++) {
        if (j % 2 === 0) {
        // coordenada x
        coords[j] = Math.round(coords[j] * relacionAncho);
        } else {
        // coordenada y
        coords[j] = Math.round(coords[j] * relacionAlto);
        }
    }
    areas[i].setAttribute("coords", coords.join(","));
    }
    imageMapResize();
  });

