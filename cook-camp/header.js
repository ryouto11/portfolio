console.log("接続中");

// ハンバーガーメニュー
$(".hamburger-wrap").click(function () {
  $('.header-modal-bg').fadeIn(0);
  // activeがあったらモーダルのdisplayをnoneにする
  if ($(".header-hamburger").hasClass('active')){
  console.log("消すよー")
  $("#header-modal-bg").fadeOut(0);
  console.log("消したよー")
  };
  $(".header-hamburger").toggleClass('active');
  $(this).toggleClass('active');
  
  $(".header-modal-content").toggleClass("header-slide-in-left");
  });
  
  $(".header-modal-bg,.header-modal-menu-list li a").click(function(){
    // $(".header-modal-bg").click(()=>
  $(".header-modal-bg").fadeOut(0);
  $(".header-hamburger").toggleClass('active');
  $(".header-modal-content").toggleClass("header-slide-in-left");
  $(".hamburger-wrap").toggleClass('active');
  });