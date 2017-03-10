
var colorear = function(){
  $("#div1").addClass("bg-red");
  $("#div2").addClass("bg-blue");
  $("#div3").addClass("bg-green");

  $("#ul1 > li").addClass("txt-red");
  $("#ul2 > li").addClass("txt-blue");
  $("#ul3 > li").addClass("txt-green");

  $("#ul1 > li:last").hover(function() {
    $(this).addClass("txt-blue");
  },function(){
     $(this).removeClass("txt-blue");
  });
  $("#ul2 > li:last").hover(function() {
    $(this).addClass("txt-green");
  },function(){
    $(this).removeClass("txt-green");
  });
  //La clase verde tiene preferencia
  $("#ul3 > li:last").hover(function() {
    $(this).removeClass("txt-green").addClass("txt-red");
    console.log("borro verde - añado rojo");
  },function(){
    $(this).removeClass("txt-blue").removeClass("txt-red");
    console.log("borro azul - añado rojo");
  });
};

//se ejecuta cuando está cargado el DOM
jQuery(document).ready(colorear);
