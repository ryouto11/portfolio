// ポップアップ
$(".vegetables img").click(function(){
  // ナンバーを取ってくる
  let num =$(this).attr("class");
  console.log(num);
  $(".popup").fadeIn();
  // 特定する
  $('.' + "vegetables" + num).css("display","block");
  $("body").css("overflow-y","hidden")
});
$(".cross-icon,.popup-modal-bg").click(function(){
  $(".popup").fadeOut();
  $(".popup-contents").fadeOut();
  $("body").css("overflow-y","auto")
});
// クラスで特定、表示
$("")