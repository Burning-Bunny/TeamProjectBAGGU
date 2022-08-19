document.addEventListener("DOMContentLoaded", () => {
  /********************* user modal *********************/
  const User_modal = document.getElementById("user_modal");
  const User_info = document.getElementById("user_info");

  User_info.addEventListener("click", () => {
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

  /********************* search_box *********************/

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

  /********************* purchaseitm *********************/
  const pur_wrap = document.querySelector(".pur_wrap");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      gsap.to(pur_wrap, {
        top: "150px",
      });
    } else {
      gsap.to(pur_wrap, {
        top: "-100%",
      });
    }
  });
  /********************* purchaseitm *********************/

  /********************* best_item *********************/
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
  // shop_itemimg swiper
  /********************* best_item *********************/

  /********************* count *********************/
  const plus = document.getElementById("itm_plus");
  const minus = document.getElementById("itm_minus");
  const item_count = document.getElementById("item_count");
  const total = document.getElementById("total_price");
  const totalprice = document.getElementById("totalprice");

  plus.addEventListener("click", () => {
    item_count.innerText = parseInt(item_count.innerText) + 1;
    total.innerText = parseInt(item_count.innerText) * 15000;
    totalprice.innerText = parseInt(item_count.innerText) * 15000;
  });
  minus.addEventListener("click", () => {
    item_count.innerText = parseInt(item_count.innerText) - 1;
    if (item_count.innerText <= 0) {
      item_count.innerText = 1;
    }
    total.innerText = parseInt(item_count.innerText) * 15000;
    totalprice.innerText = parseInt(item_count.innerText) * 15000;
  });

  /********************* count *********************/

  /********************* related_item *********************/
  const rel_swiper = new Swiper(".rel_swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    autoplay: true,
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
  /********************* related_item *********************/
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
  /********************* page_nav *********************/
  const To_product_detailInfo = document.getElementById(
    "To_product_detailInfo"
  );
  const To_exchange = document.getElementById("To_exchange");
  const To_related = document.getElementById("To_related");
  const To_review = document.getElementById("To_review");

  const product_detail = document.getElementById("product_detail");
  const payment_info = document.getElementById("payment_info");
  const related_product = document.getElementById("related_product");
  const review = document.getElementById("review");

  To_product_detailInfo.addEventListener("click", () => {
    window.scrollBy({
      top: product_detail.getBoundingClientRect().top,
      behavior: "smooth",
    });
    To_product_detailInfo.classList.add("page_nav_on");
    To_exchange.classList.remove("page_nav_on");
    To_related.classList.remove("page_nav_on");
    To_review.classList.remove("page_nav_on");
  });
  To_exchange.addEventListener("click", () => {
    window.scrollBy({
      top: payment_info.getBoundingClientRect().top,
      behavior: "smooth",
    });
    To_exchange.classList.add("page_nav_on");
    To_product_detailInfo.classList.remove("page_nav_on");
    To_related.classList.remove("page_nav_on");
    To_review.classList.remove("page_nav_on");
  });
  To_related.addEventListener("click", () => {
    window.scrollBy({
      top: related_product.getBoundingClientRect().top,
      behavior: "smooth",
    });
    To_related.classList.add("page_nav_on");
    To_product_detailInfo.classList.remove("page_nav_on");
    To_exchange.classList.remove("page_nav_on");
    To_review.classList.remove("page_nav_on");
  });
  To_review.addEventListener("click", () => {
    window.scrollBy({
      top: review.getBoundingClientRect().top,
      behavior: "smooth",
    });
    To_review.classList.add("page_nav_on");
    To_product_detailInfo.classList.remove("page_nav_on");
    To_exchange.classList.remove("page_nav_on");
    To_related.classList.remove("page_nav_on");
  });

  const page_nav = document.getElementById("page_nav");

  window.onscroll = function scrollIf() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      page_nav.style.bottom = "0";
    } else {
      page_nav.style.bottom = "-100px";
    }
  };

  /********************* page_nav *********************/
});
