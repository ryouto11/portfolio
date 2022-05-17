$(function(){

    //*** fadeIn ***//

    var scrollAnimationElm = document.querySelectorAll('.fadein');

    var scrollAnimationFunc = function() {
        //scrollAnimationElmの数だけ繰り返す
        for(var i = 0; i < scrollAnimationElm.length; i++) {
            var triggerMargin = 300;
            // console.log(window.innerHeight)
            // console.log(scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin)
            if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                target = scrollAnimationElm[i].dataset.class;
                scrollAnimationElm[i].classList.add(target);
            }
        }
    }

    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);

});
