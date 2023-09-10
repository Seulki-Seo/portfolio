//메인 페이지 글자 타이핑
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

//스크롤 시 progress bar
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

//스크롤 시 네비 하단 라인 및 글자 색상
$(window).scroll(function(){
    const scr = $(document).scrollTop();
    let all_h = $(document).height();
    let abo_h = $("#about").offset().top;
    let pub_h = $("#publishing").offset().top;
    let con_h = $("#contact").offset().top;

    //네비 글자 색상
    if (con_h > scr && scr >= abo_h) {
        //네비 글자색 #616161
        $("#header").addClass("color");
    } else {
        //네비 글자색 #fff
        $("#header").removeClass("color");
    }

    //네비 하단 라인 색상 변화 및 ABOUT, CONTACT 자연스럽게 나타나게
    if (scr < abo_h) {
        //home 라인
        $(".gnb li").removeClass("on");
        $(".gnb #h").addClass("on");
    } else if (scr >= abo_h && scr < pub_h) {
        //about 라인
        $(".gnb li").removeClass("on");
        $(".gnb #a").addClass("on");
    } else if (scr >= pub_h && scr < con_h) {
        //publishing 라인
        $(".gnb li").removeClass("on");
        $(".gnb #p").addClass("on");
    } else if (scr >= con_h && scr < all_h) {
        //contact 라인
        $(".gnb li").removeClass("on");
        $(".gnb #c").addClass("on");
        if($(window).width() > 991) {
            $("#contact .contact_wrap").stop().animate({ left: 0, opacity: 1 }, 1200);
        }else{

        }
    }

    //가로 스크롤_PUBLISHING
    let offset = scr - pub_h

    if (scr > pub_h) {
        $("#publishing .container").css({ left: -offset });
    }
});

//메인 메뉴 클릭 시 해당 페이지로 자연스럽게 스크롤
$(".gnb li a").on("click", function () {
    let hr = $(this).attr("href");
    let target = $(hr).offset().top;

    $("html, body").animate({ scrollTop: target }, 800);
});

//top 버튼 클릭 시 페이지 상단으로 자연스럽게 스크롤
$("#top").click(function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 800);
});