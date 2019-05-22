$(document).ready(function () {
    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 900) {
                $(this).addClass("slide");
            }
        });
    });
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function getAge() {
    var birthday = new Date("2006-11-18");
    var today = Date.now();
    var age = Math.floor((today - birthday) / 1000 / 60 / 60 / 24 / 365);
    document.getElementById("age").innerHTML = age;
}