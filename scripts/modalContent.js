$(document).ready(function() {

  imageMapResize();

    $('area').click(function() {
      var areaId = $(this).data('id');
      $.getJSON('./data/distInfo.json', function(data) {
        var areaData = data.distInfo.filter(function(item) {
          return item.id === areaId;
        });
        var imageSrc = areaData[0].image;

        $('.modal').css('background-image', imageSrc);
        

        $('#modal-image').attr('src', imageSrc);
        $('#modal-title').text(areaData[0].name);
        $('#modal-content').text(areaData[0].description);
        $('#myModal').fadeIn(400);
      });
    });
  
    $(document).click(function() {
        
      $('#myModal').fadeOut(400);
    });
  });
