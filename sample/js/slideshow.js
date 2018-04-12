$(function () {


    var objLi = $("#graphic li");
    var length = $("#graphic ul li img").length;
    var now = length - 1;
    var i = 0;

    objLi.eq(i).fadeIn(1000);

    setInterval(function () {
        objLi.eq(i).fadeOut(1000);
        i++;
        if (i > now) {
            i = 0;
        }
        objLi.eq(i).fadeIn(1000);
    }, 4000);

}); //ドムコンテントがおわったら