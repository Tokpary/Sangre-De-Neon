
$("#background-image-container").scroll( function() {
    var div = $(".containerShadow");
    
    var scrollTop = $("#background-image-container").scrollTop();

    var windowH = $(window).height();
    var windowW = $(window).width();
    var divH = $("#container").height();

    if (divH == 0) {
      divH = 1;
    }
    var divisor = divH / windowH;


    var divPadre = $("#container").width();
  

    
    div.css("height", scrollTop/divisor + "%");
    div.css("width", divPadre + "px");
    div.css("left", (windowW - divPadre) / 2  + "px");
  });
  