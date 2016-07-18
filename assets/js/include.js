
jQuery(document).ready(function($){

  //Promo textslider
  $(".promo__textslider").slick({
    arrows: false,
    dots: true
  });

  //Faculty change img
  $(".faculty__item").click(function(){
    var imgpath = $(this).attr("dir");
    $("#facultyImage").html("<img src="+imgpath+">");
  });

  $(".btn").click(function(){
    $("#thumbs").fadeIn(500);
    $("#image").animate({marginTop:"10px"},200);
    $(this).hide();
    $("#hide").fadeIn("slow");
  });

  $("#hide").click(function(){
    $("#thumbs").fadeOut(500,function (){
    $("#image").animate({marginTop:"50px"},200);
    });
    $(this).hide();
    $("#show").fadeIn("slow");
  });

});
