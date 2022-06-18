$(window).on('load', function(){
  $("body").css("overflow-y","hidden")
  $('.loading').delay(1200).fadeOut(800);
  setTimeout(function(){
    $("body").css("overflow-y","auto");
        },1900);
  console.log("ローディング完了");
  });
  $(function(){
  setTimeout('stopload()', 10000);
  })
  function stopload(){
  $('.loading').delay(900).fadeOut(800);
  console.log("10秒経過");
  }
  
  
  // ローディング中のスクロール禁止

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
  

  // スライドイン
  $(window).scroll(function (){
    $('.slide-in').each(function(){
    const elemPos = $(this).offset().top+50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass("slide-in-active"); 
    }
    });
});


// ポップアップ
$(".works a").click(function(){
  // ナンバーを取ってくる
  let num =$(this).attr("class");
  console.log(num);
  $(".popup").fadeIn();
  $(".hamburger-wrap").fadeOut(0);
  // 特定する
  $('.' + "works" + num).css("display","flex");
  $("body").css("overflow-y","hidden")
});
$(".cross-icon,.popup-modal-bg").click(function(){
  $(".popup").fadeOut();
  $(".popup-contents").fadeOut();
  $(".hamburger-wrap").fadeIn();
  $("body").css("overflow-y","auto")
});
// クラスで特定、表示

// メールについて
  let address, subject, body, hiddenData;
  let sendmail = document.getElementsByClassName('mail-btn');
  // 変数にmail-btnを2個入れた
  for( let $i = 0; $i < sendmail.length; $i++ ) {
    sendmail[$i].onclick = function () {
      address1 = 'ryouto1010';
      address2 = '@gmail.com';
      address = address1+address2;
      subject = '○○の件について';
      body = 'メール本文' + '%0D%0A'; 
      // %0D%0Aは改行

      location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
    }
}
  

