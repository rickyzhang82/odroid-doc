$(document).ready(function(){
  // gnb
  
	$("#gnb li a.changeImgOn").mouseenter(function(){
		$(this).children().attr("src",$(this).children().attr("src").replace(".gif","_on.gif"));
	});
	$("#gnb li a.changeImgOn").mouseleave(function(){
		$(this).children().attr("src",$(this).children().attr("src").replace("_on.gif",".gif"));
	});


  // store 상위상품 이미지 정렬
  var img_width = $(".store_main .product_list .high_rank_product .img_area img").width()/2;
  var img_height = $(".store_main .product_list .high_rank_product .img_area img").height()/2;

  $(".store_main .product_list .high_rank_product .img_area img").css({
    top:"50%",
    left:"50%",
    margin:"-" + img_height + "px 0 0 -" + img_width +"px"
  });

  // board_list tab
  $("#board_list_tab ul li a").click(function(){
    $("#board_list_tab ul li a").removeClass();
    $(this).addClass("on");
  });



});//document.ready End

