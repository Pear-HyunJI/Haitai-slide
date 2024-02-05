let ww = $(window).width();
if (ww > 1088) {
  $("html").addClass("pc");
} else {
  $("html").addClass("mobile");
}

//slidePage1
$(".slideContainer1").slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,

  responsive: [
    {
      breakpoint: 1089, // 화면 크기가 768px 이하일 때
      settings: {
        slidesToShow: 1, // 한 번에 보여질 슬라이드 수를 1개로 조절
        slidesToScroll: 1,
        vertical: true,
        arrows: true,
        prevArrow:
          '<button class="slick-prev slick-arrow" aria-label="previous" type="button" ><i class="fa-solid fa-chevron-up"></i></button>',
        nextArrow:
          '<button class="slick-next slick-arrow" aria-label="Next" type="button" ><i class="fa-solid fa-chevron-down"></i></button>',
      },
    },
  ],
});

$(".productSlideInner").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
});
$(".eventSlideInner").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
});
$(".mallSlideInner").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
});

//slidePage2
$(".honeySlideInner").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="previous" type="button" ><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button" ><i class="fa-solid fa-chevron-right"></i></button>',
});

// nav

$("#nav .depth1 > li").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
  }
});
$("#nav .depth1 > li").on("click", function () {
  if ($("html").hasClass("mobile")) {
    $(this).toggleClass("on");
    $(this).siblings().removeClass("on");
  }
});