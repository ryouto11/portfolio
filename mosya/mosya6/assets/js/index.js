$(function() {
  // ローディング画面を消す
  $(window).on('load', function(){
    $('.loading').delay(1200).fadeOut(800);
    console.log("ローディング完了");
  });

  // ミュージック再生に関して
  const se = document.querySelector('#sound');
  $('#music-btn').on('click', function (){
    console.log("クリック")
    if ($(this).hasClass("sound-on")){
      console.log("sound-onを持ってる")
      se.pause();
      $(this).toggleClass("sound-on")
      $(this).children("p").remove();
      $(this).prepend('<p>SOUND OFF</p>');
    }
    else{
        se.play();
        $(this).toggleClass("sound-on")
        $(".sound-on p").remove();
        $('.sound-on').prepend('<p>SOUND ON</p>');
    }
  });

// 下部の固定ボタンの表示の設定
$(window).on('load resize scroll', function() {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    const elemPos = $(".story_contents-bottom--text").offset().top-50;
    if($(window).width() < 768){
        if (scroll >= elemPos - windowHeight){
          $(".play-btn").fadeIn();
        }else{
          $(".play-btn").fadeOut();
        }
    }
    else{
      $(".play-btn").fadeOut();
    }
  });
});

// スムーススクロールの設定
$('a[href*="#"]').click(function () {
  const elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  if(elmHash=="#"){
    $('body,html').animate({scrollTop: 0}, 1000);
  }
  else{
    const pos = $(elmHash).offset().top;//idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 1000); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  }
  return false;
  });