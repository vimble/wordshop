jQuery(document).ready(function($){

  //Promo textslider
  $(".promo__textslider").slick({
    arrows: false,
    dots: true
  });

  //Faculty img change
  $("#advList").find(".faculty__item").hover(function(event){
    var imgpath = $(this).attr("data-img");
    $("#advImage").html("<img class='faculty__img' src="+imgpath+">");
  });

  $("#filmList").find(".faculty__item").hover(function(event){
    var imgpath = $(this).attr("data-img");
    $("#filmImage").html("<img class='faculty__img' src="+imgpath+">");
  });

  $("#produceList").find(".faculty__item").hover(function(event){
    var imgpath = $(this).attr("data-img");
    $("#produceImage").html("<img class='faculty__img' src="+imgpath+">");
  });

});
