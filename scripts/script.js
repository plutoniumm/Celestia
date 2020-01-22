$(window).on('load', function(){

  var solarsys = $("#solar-system");

// Names Activity
  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  
  init();

});