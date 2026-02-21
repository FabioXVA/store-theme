export const slide_config = {
  navigation: false,
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1080: {
      loop: true,
      slidesPerView: 3,
      autoplay: {
        delay: 3000,
      },
    },
    600: {
      loop: true,
      navigation: false,
      slidesPerView: 2,
      autoplay: {
        delay: 3000,
      },
    },
    320: {
      loop: true,
      navigation: false,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
    },
  },
  pagination: { clickable: true },
}
