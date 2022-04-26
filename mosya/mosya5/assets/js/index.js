$(function() {

  $(window).on('load resize', function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();

    /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scroll);
  });
  



  // ハンバーガーメニュー
  
  $(".header_hamburger").click(function () {
    // activeがあったらモーダルのdisplayをnoneにする
    $(this).toggleClass('active');
    
    $(".header_modal-content").toggleClass("header_slide-in-top");
    });
  
  
  // メインビジュアルをスクロールで拡大
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    mv_scale(scroll);
  });
  
  
  function mv_scale(scroll) {
    
          // window.innerWidthで画面幅を取得
          // PC表示の場合の処理（画面幅が900pxより大きい場合
          // ※900pxはCSSのブレークポイントとあわせる）
          if (window.innerWidth > 900) {
            // メインビジュアルのCSS（width）を変更する
            // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
            $('#main-visual div').css({
              'width': 100/3 + scroll/10  + '%'
            });
          // スマホ表示の場合の処理（画面幅が900px以下の場合）
          } else {
            // メインビジュアルのCSS（width）を変更する
            // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
            $('#main-visual div').css({
              'width': 100 - scroll/10  + '%'
            });
          }
    
  }
  
  
  // ヘッダーを表示
  
  $(window).scroll(function (){
      const elemPos = $('.information').offset().top+50;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      // 画面の中に入ったら
      $('.header').fadeIn(500) 
      // 0.5秒なら500、1秒なら1000と指定。
      }
      else{
        $('.header').fadeOut(500)
      }
  });
  
  // サイドボタンを表示
  $(window).scroll(function (){
      const elemPos = $('.gallery').offset().top+50;
      const elemPos2 = $('.access .section-title').offset().top+0;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight && scroll <= elemPos2 - windowHeight){
      // 画面の中に入ったら
      $('.side-btn').addClass('side-btn-active');
      }
      else{
        $('.side-btn').removeClass('side-btn-active');
      }
  });
  
  // ギャラリーのイメージをフェイドイン
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
  
  // ACCESSの文字が入った時のアニメーション
  $(window).scroll(function (){
    const elemPos = $('.access .section-title').offset().top+0;
    const elemPos2 =$('.contact .section-title').offset().top+0;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight && scroll <= elemPos2 - windowHeight){
    // 画面の中に入ったら
      $('.access_back').fadeIn(300);
      $('.gallery').css({
        'opacity': 0
      });
    }
    else{
      $('.access_back').fadeOut(300);
      $('.gallery').css({
        'opacity': 1
      });
      // 親要素のopacityを１にしても子要素が0なら子要素は0のまま
    }
  });
  
});
  
  
  
