 jQuery(document).ready(function($){
  $( ".navigation__submenu-trigger" ).hover(
    function() {
      $( this ).trigger('click');
    }, function() {
    }
  );
});
