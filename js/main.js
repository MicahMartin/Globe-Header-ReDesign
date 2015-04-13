$(document).ready(function(){
  $("#searchIcon").live({
  click: function() {
      $(this).css({'z-index':'10'});
  },
  mouseout: function() {
      $(this).css({'z-index':'0'});
  }
});
});
