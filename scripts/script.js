$(window).on('load', function(){

  const solarsys = $("#solar-system");
function init(){}
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
