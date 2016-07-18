jQuery(document).ready(function($){

  //Promo textslider
  $(".promo__textslider").slick({
    arrows: false,
    dots: true
  });

  //Student textslider
  $(".works__slider").slick();

  //Partners textslider
  $(".partners__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6
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
