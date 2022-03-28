$(window).scroll(function () {
    const scr = $(document).scrollTop();
    let all_h = $(document).height();
    let abo_h = $("#about").offset().top;
    let pub_h = $("#publishing").offset().top;
    let gra_h = $("#graphic").offset().top;
    let scr_h = $("#script").offset().top;
    let con_h = $("#contact").offset().top;

    /* 네비 글자 색상 변화 */
    if (con_h > scr && scr >= abo_h) { //네비 글자색 #616161
        $("#header").addClass("color");
    } else { //네비 글자색 #fff
        $("#header").removeClass("color");
    }

    /* 네비 하단 라인 색상 변화 및 ABOUT, CONTACT 자연스럽게 나타나게 */
    if (scr < abo_h) { //home 라인
        $(".gnb li").removeClass("on");
        $(".gnb #h").addClass("on");
        $("#about .about_wrap").stop().animate({ left: 0, opacity: 1 }, 600);
    } else if (scr >= abo_h && scr < pub_h) { //about 라인
        $(".gnb li").removeClass("on");
        $(".gnb #a").addClass("on");
    } else if (scr >= pub_h && scr < gra_h) { //publishing 라인
        $(".gnb li").removeClass("on");
        $(".gnb #p").addClass("on");
    } else if (scr >= gra_h && scr < scr_h) { //graphic 라인
        $(".gnb li").removeClass("on");
        $(".gnb #g").addClass("on");
    } else if (scr >= scr_h && scr < con_h) { //script 라인
        $(".gnb li").removeClass("on");
        $(".gnb #s").addClass("on");
    } else if (scr >= con_h && scr < all_h) { //contact 라인
        $(".gnb li").removeClass("on");
        $(".gnb #c").addClass("on");
        $("#contact .contact_wrap").stop().animate({ left: 0, opacity: 1 }, 600);
    }

    /* top 버튼 fadeIn, fadeOut*/
    if (scr > 1200) {
        $("#top").fadeIn();
    } else {
        $("#top").fadeOut();
    }

    /*가로 스크롤_PUBLISHING*/
    let offset = scr - pub_h

    if (scr > pub_h) {
        $("#publishing .container").css({ left: -offset });
    }
});

/* 메뉴를 클릭했을 때 해당 페이지로 자연스럽게 스크롤 */
$(".gnb li a").on("click", function () {
    let hr = $(this).attr("href");
    let target = $(hr).offset().top;

    $("html, body").stop().animate({ scrollTop: target }, 600);
});

/* 메인 페이지 글자 타이핑 효과 */
$(".split").each(function () {
    let text = $(this).text();
    let split = text.split('').join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
});

setTimeout(function () {
    gsap.to(".split span", {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.1
    });
}, 100);

/* MOBILE_MOCKUP */
$(".mobile_btn").click(function () {
    $(".overlay").css({ display: "block" });
    $("body").css({ overflow: "hidden" });
    $("#header").css({ position: "static" });
});

$(".btn_close").click(function () {
    $(".overlay").css({ display: "none" });
    $("body").css({ overflow: "auto" });
    $("#header").css({ position: "fixed" });
});

/* top 버튼을 클릭했을 때 페이지 상단으로 자연스럽게 스크롤 */
$("#top").click(function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 800);
});

/* 페이지를 스크롤할 때 상단 progress bar가 자연스럽게 변화하게 */
const progressBar = document.querySelector("#progress");
const bodyTag = document.querySelector("body");

window.addEventListener("scroll", () => {
    const y = window.scrollY;
    let pageHeight = bodyTag.offsetHeight;
    let windowHeight = window.innerHeight;
    let totalHeight = pageHeight - windowHeight;
    let percent = (y / totalHeight) * 100;

    progressBar.style.width = percent + "%";
});