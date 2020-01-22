$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  // 3D VIEW
  var init = function() {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  }; 

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