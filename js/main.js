document.addEventListener("DOMContentLoaded", () => {
  /********************* lnb_section scroll Change *********************/
  window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
      document.getElementById("gnb").style.opacity = "0";
      document.getElementById("lnb_section").style.opacity = "0";
      document.getElementById("gnb_scroll").style.opacity = "1";
      document.getElementById("lnb_scroll").style.opacity = "1";
    } else {
      document.getElementById("gnb").style.opacity = "1";
      document.getElementById("lnb_section").style.opacity = "1";
      document.getElementById("gnb_scroll").style.opacity = "0";
      document.getElementById("lnb_scroll").style.opacity = "0";
    }
  });
  /********************* lnb_section scroll Change *********************/

  /********************* search_box *********************/
  const Searchicon = document.getElementById("gnbsearch");
  const Searchbox = document.getElementById("gnbsearchbox");

  Searchicon.addEventListener("click", () => {
    Searchbox.style.width = "250px ";
    Searchbox.style.background = "#f3efdf";
    Searchbox.focus();
  });

  Searchbox.addEventListener("blur", () => {
    Searchbox.style.width = "0";
  });

  const ScrollSearch = document.getElementById("scrollSearch");
  const ScrollSearchbox = document.getElementById("scrollSearchBox");

  ScrollSearch.addEventListener("click", () => {
    ScrollSearchbox.style.width = "250px ";
    ScrollSearchbox.style.border = "1px solid #000";
    ScrollSearchbox.focus();
  });

  ScrollSearchbox.addEventListener("blur", () => {
    ScrollSearchbox.style.width = "0";
  });

  /********************* search_box *********************/

  /********************* user modal *********************/
  const User_modal = document.getElementById("user_modal");
  const User_info = document.getElementById("user_info");
  const User_info_scroll = document.getElementById("user_info_scroll");

  User_info.addEventListener("click", () => {
    gsap.to(User_modal, 1.5, {
      right: 0,
    });
  });
  User_info_scroll.addEventListener("click", () => {
    gsap.to(User_modal, 1.5, {
      right: 0,
    });
  });
  // open

  const Close_btn = document.getElementById("close_btn");

  Close_btn.addEventListener("click", () => {
    gsap.to(User_modal, 1.5, {
      right: "-100%",
    });
  });
  // close

  const Tab_name1 = document.getElementById("tab_name1");
  const Tab_name2 = document.getElementById("tab_name2");
  const Delivery_tab = document.getElementById("delivery_tab");
  const Community_tab = document.getElementById("community_tab");

  Tab_name1.addEventListener("click", () => {
    gsap.to(Tab_name1, {
      backgroundColor: "#007157",
      color: "#fff",
    });
    gsap.to(Tab_name2, {
      backgroundColor: "#fff",
      color: "#007157",
    });
    gsap.to(Delivery_tab, 0, {
      display: "block",
      delay: 0,
    });
    gsap.to(Community_tab, 0, {
      display: "none",
      delay: 0,
    });
  });
  Tab_name2.addEventListener("click", () => {
    gsap.to(Tab_name2, {
      backgroundColor: "#007157",
      color: "#fff",
      delay: 0,
    });
    gsap.to(Tab_name1, {
      backgroundColor: "#fff",
      color: "#007157",
      delay: 0,
    });
    gsap.to(Community_tab, 0, {
      display: "block",
    });
    gsap.to(Delivery_tab, 0, {
      display: "none",
    });
  });
  /********************* user modal *********************/

  /********************* heart *********************/
  const hearts = document.querySelectorAll(".xi-heart-o");
  let liked = 0;
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      if (liked) {
        heart.className = "xi-heart";
        liked = 0;
      } else {
        heart.className = "xi-heart-o";
        liked = 1;
      }
    });
  });

  /********************* heart *********************/

  /********************* best-탭메뉴 *********************/
  const best_bag_tab = document.getElementById("best_bag_tab");
  const best_pouch_tab = document.getElementById("best_pouch_tab");
  const best_sprots_tab = document.getElementById("best_sprots_tab");
  const best_bag = document.getElementById("best_bag");
  const best_pouch = document.getElementById("best_pouch");
  const best_sports = document.getElementById("best_sports");

  best_bag_tab.addEventListener("click", () => {
    best_bag_tab.classList.add("change");
    best_pouch_tab.classList.remove("change");
    best_sprots_tab.classList.remove("change");
    best_bag.classList.add("on");
    best_pouch.classList.remove("on");
    best_sports.classList.remove("on");
  });
  best_pouch_tab.addEventListener("click", () => {
    best_bag_tab.classList.remove("change");
    best_pouch_tab.classList.add("change");
    best_sprots_tab.classList.remove("change");
    best_bag.classList.remove("on");
    best_pouch.classList.add("on");
    best_sports.classList.remove("on");
  });
  best_sprots_tab.addEventListener("click", () => {
    best_bag_tab.classList.remove("change");
    best_pouch_tab.classList.remove("change");
    best_sprots_tab.classList.add("change");
    best_bag.classList.remove("on");
    best_pouch.classList.remove("on");
    best_sports.classList.add("on");
  });
  /********************* best-탭메뉴 *********************/
  /********************* best-imgChange *********************/
  let Best_imgs = document.querySelectorAll(".best_item > img ");

  Best_imgs.forEach((Best_img) => {
    Best_img.addEventListener("mouseover", function () {
      Best_img.setAttribute("src", this.src.replace(".jpg", "-1.jpg"));
    });
  });
  Best_imgs.forEach((Best_img) => {
    Best_img.addEventListener("mouseout", function () {
      Best_img.setAttribute("src", this.src.replace("-1.jpg", ".jpg"));
    });
  });
  /********************* best-imgChange *********************/

  /********************* promotion - swiper - sliders *********************/
  const swiper1 = new Swiper(".promiotion_slide1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    observer: true,
    observeParents: true,
  });
  const swiper2 = new Swiper(".promiotion_slide2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    observer: true,
    observeParents: true,
  });
  const swiper3 = new Swiper(".promiotion_slide3", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    observer: true,
    observeParents: true,
  });
  const swiper4 = new Swiper(".promiotion_slide4", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    observer: true,
    observeParents: true,
  });
  const swiper5 = new Swiper(".promiotion_slide5", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    observer: true,
    observeParents: true,
  });
  const swiper6 = new Swiper(".promiotion_slide6", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    observer: true,
    observeParents: true,
  });
  const swiper7 = new Swiper(".promiotion_slide7", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    observer: true,
    observeParents: true,
  });
  const swiper8 = new Swiper(".promiotion_slide8", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    observer: true,
    observeParents: true,
  });
  /********************* promotion - swiper - sliders *********************/

  /********************* promotion_pattern_tab *********************/
  const Patterns = document.querySelectorAll(".pattern");
  const SwiperSlides = document.querySelectorAll(".swiper");
  const PatternImgNames = document.querySelectorAll(".promotion_pattern_img");
  let PatternName = document.getElementById("pattern_name");

  Patterns.forEach((Pattern) => {
    Pattern.addEventListener("click", Promotion_tab);
  });

  function Promotion_tab(e) {
    SwiperSlides.forEach((SwiperSlide) => {
      SwiperSlide.classList.remove("promotion_active");
    });

    let currentTab = e.currentTarget;
    let parentEl = currentTab.parentElement;
    let childEl = parentEl.children;
    let tabIndex = Array.from(childEl).indexOf(currentTab);

    SwiperSlides[tabIndex].classList.add("promotion_active");
  }
  /********************* promotion_pattern_tab *********************/

  PatternImgNames.forEach((PatternImgName) => {
    PatternImgName.addEventListener("click", () => {
      let Name = PatternImgName.getAttribute("alt");
      PatternName.innerText = Name;
    });
  });
  /********************* promotion_pattern_tab_title *********************/

  /********************* rolling_banner *********************/
  let tl = gsap.timeline();
  tl.fromTo(
    ".rolling_banner",
    {
      duration: 10,
      position: "absolute",
      left: "0",
      overflow: "hidden",
      repeat: -1,
      ease: "none",
      zIndex: 1,
    },
    {
      duration: 10,
      left: "-100%",
      repeat: -1,
      ease: "none",
      zIndex: 1,
    }
  )
    .fromTo(
      ".rolling_banner_clone",
      {
        duration: 10,
        position: "absolute",
        left: "100%",
        repeat: -1,
        ease: "none",
        overflow: "hidden",
      },
      {
        duration: 10,
        left: "0",
        repeat: -1,
        ease: "none",
      }
    )
    .fromTo(
      ".rolling_banner_clone01",
      {
        duration: 10,
        position: "absolute",
        left: "-100%",
        repeat: -1,
        ease: "none",
        overflow: "hidden",
        zIndex: -1,
      },
      {
        duration: 10,
        left: "100%",
        repeat: -1,
        ease: "none",
        zIndex: -1,
      }
    )
    .fromTo(
      ".rolling_banner_clone01",
      {
        duration: 10,
        position: "absolute",
        left: "100%",
        repeat: -1,
        ease: "none",
        overflow: "hidden",
        zIndex: -1,
      },
      {
        duration: 10,
        left: "0",
        repeat: -1,
        ease: "none",
        zIndex: -1,
      }
    );

  /********************* rolling_banner *********************/
  /********************* top bottom scroll *********************/

  const topBtn = document.querySelector(".top_btn");

  topBtn.addEventListener("click", () => {
    gsap.to(window, 0.5, {
      scrollTo: 0,
    });
  });
  const bottomBtn = document.querySelector(".bottom_btn");

  bottomBtn.addEventListener("click", () => {
    gsap.to(window, 0.5, {
      scrollTo: document.documentElement.scrollHeight,
    });
  });

  /********************* top bottom scroll *********************/
});
