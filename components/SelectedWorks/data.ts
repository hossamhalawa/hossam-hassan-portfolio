
export const videoSectionsData = [
  {
    videoUrl:
      'https://drive.google.com/file/d/1YBeUXKFM6c3TwhuD01mOIQ8XB8DL_2w9/preview',
      imgBg: '/v1.webp'
  },
  {
    videoUrl:
      "https://drive.google.com/file/d/1Kigzqex7qDwQ_ZlbmdJpKWhoFDhiWjLX/preview",
      imgBg: '/v2.webp'
  }
]

const videoCarouselresponsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

const imageCarouselresponsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

export const videoCarouselSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: 'linear',
  centerMode: true,
  centerPadding: '40px',
  responsive: videoCarouselresponsive,
   
}


export const imageCarouselSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: 'linear',
  centerMode: true,
  centerPadding: '40px', // Shows part of next/prev slides
  responsive: imageCarouselresponsive
}
