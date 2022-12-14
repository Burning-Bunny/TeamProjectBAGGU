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

  /********************* best_item *********************/
  const swiper = new Swiper(".swiper", {
    autoplay: {
      speed: 300,
      delay: 1000,
    },
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
  /********************* best_item *********************/

  /********************* best-imgChange *********************/
  let Best_imgs = document.querySelectorAll(".swiper-slide> a > img ");

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
  /********************* cart filter *********************/

  let cartbtn = document.querySelector(".cartbtn");
  let cartbox = document.querySelector(".cartchart");

  let displaytoggle = document.querySelector(".displaytoggle");

  let productwrap = document.querySelector(".productwrap");
  let filterbox = document.querySelector(".filterbox");
  let sortreset = document.querySelector(".sortreset");
  let descending = document.querySelector(".descending");
  let ascending = document.querySelector(".ascending");

  /** cart ?????? ?????? ???????????? ?????? */
  let cartList = [];

  class Product {
    constructor(id, name, price, img, itemInCart) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.img = img;
      this.itemInCart = itemInCart;
    }
    output() {
      return `
    <div class='product' id='${this.id}'>
      <a href ='../detail_page/detail_page_standardFarmersMarket.html'>  
        <div class='imgwrap' id='cart-img' name=''>
          <img src='${this.img}' alt=''>
        </div>
      </a>
      <div class='textwrap'>
        <div>
          <p>${this.name}</p>
          <span>${this.price}</span><span>???</span>
        </div>
        <i class='xi-cart-o' id='add-to-cart'></i>
      </div>
    </div>`;
    }
  }

  const products = [];

  products.push(
    new Product(
      0,
      "?????? ???????????? ??????????????? ??????",
      12900,
      "../img/sub_page/standard_img01.jpg",
      false
    )
  );
  products.push(
    new Product(
      1,
      "?????? ???????????? ????????? ??????",
      12900,
      "../img/sub_page/standard_img02.jpg",
      false
    )
  );
  products.push(
    new Product(
      2,
      "?????? ???????????? ????????????",
      11900,
      "../img/sub_page/standard_img03.jpg",
      false
    )
  );
  products.push(
    new Product(
      3,
      "?????? ???????????? ???????????????",
      12900,
      "../img/sub_page/standard_img04.jpg",
      false
    )
  );
  products.push(
    new Product(
      4,
      "?????? ???????????? ???????????? ????????? ??????",
      13500,
      "../img/sub_page/standard_img05.jpg",
      false
    )
  );
  products.push(
    new Product(
      5,
      "?????? ???????????? ???????????? ?????? ??????",
      13500,
      "../img/sub_page/standard_img06.jpg",
      false
    )
  );
  products.push(
    new Product(
      6,
      "?????? ???????????? ???????????? ????????? ?????????",
      13500,
      "../img/sub_page/standard_img07.jpg",
      false
    )
  );
  products.push(
    new Product(
      7,
      "?????? ???????????? ???????????? ?????? ?????????",
      11900,
      "../img/sub_page/standard_img08.jpg",
      false
    )
  );
  products.push(
    new Product(
      8,
      "?????? ???????????? ???????????? ??????",
      12900,
      "../img/sub_page/standard_img09.jpg",
      false
    )
  );
  products.push(
    new Product(
      9,
      "?????? ???????????? ???????????? ????????????",
      11900,
      "../img/sub_page/standard_img10.jpg",
      false
    )
  );
  products.push(
    new Product(
      10,
      "?????? ???????????? ??? ?????????",
      13500,
      "../img/sub_page/standard_img11.jpg",
      false
    )
  );
  products.push(
    new Product(
      11,
      "?????? ???????????? ????????? ?????????",
      12900,
      "../img/sub_page/standard_img12.jpg",
      false
    )
  );
  products.push(
    new Product(
      12,
      "?????? ????????? ?????????",
      12900,
      "../img/sub_page/standard_img13.jpg",
      false
    )
  );
  products.push(
    new Product(
      13,
      "?????? ???????????? ?????? ??????",
      12900,
      "../img/sub_page/standard_img14.jpg",
      false
    )
  );
  products.push(
    new Product(
      14,
      "?????? ???????????? ???????????? ?????????",
      13500,
      "../img/sub_page/standard_img15.jpg",
      false
    )
  );
  products.push(
    new Product(
      15,
      "?????? ???????????? ??????????????? ??????",
      13500,
      "../img/sub_page/standard_img16.jpg",
      false
    )
  );
  products.push(
    new Product(
      16,
      "?????? ???????????? ????????? ?????????",
      11900,
      "../img/sub_page/standard_img17.jpg",
      false
    )
  );
  products.push(
    new Product(
      17,
      "?????? ???????????? ???????????? ?????????",
      12900,
      "../img/sub_page/standard_img18.jpg",
      false
    )
  );
  products.push(
    new Product(
      18,
      "?????? ???????????? ??? ?????? ??????",
      13500,
      "../img/sub_page/standard_img19.jpg",
      false
    )
  );
  products.push(
    new Product(
      19,
      "?????? ???????????? 70s ????????????",
      11900,
      "../img/sub_page/standard_img20.jpg",
      false
    )
  );
  products.push(
    new Product(
      20,
      "?????? ???????????? ???????????? ???????????? ?????????",
      11900,
      "../img/sub_page/standard_img21.jpg",
      false
    )
  );
  products.push(
    new Product(
      21,
      "?????? ???????????? ????????? ???",
      12900,
      "../img/sub_page/standard_img22.jpg",
      false
    )
  );
  products.push(
    new Product(
      22,
      "?????? ???????????? ?????????",
      13500,
      "../img/sub_page/standard_img23.jpg",
      false
    )
  );
  products.push(
    new Product(
      23,
      "?????? ???????????? ???????????? ??????",
      12900,
      "../img/sub_page/standard_img24.jpg",
      false
    )
  );
  products.push(
    new Product(
      24,
      "?????? ???????????? ????????? ??????",
      12900,
      "../img/sub_page/standard_img25.jpg",
      false
    )
  );
  products.push(
    new Product(
      25,
      "?????? ???????????? ?????? ????????? ?????????",
      11900,
      "../img/sub_page/standard_img26.jpg",
      false
    )
  );
  products.push(
    new Product(
      26,
      "?????? ???????????? ?????? ?????????",
      11900,
      "../img/sub_page/standard_img27.jpg",
      false
    )
  );
  products.push(
    new Product(
      27,
      "?????? ???????????? ??????",
      12900,
      "../img/sub_page/standard_img28.jpg",
      false
    )
  );
  products.push(
    new Product(
      28,
      "?????? ???????????? ?????????",
      13500,
      "../img/sub_page/standard_img29.jpg",
      false
    )
  );
  products.push(
    new Product(
      29,
      "?????? ???????????? ??????????????????",
      12900,
      "../img/sub_page/standard_img30.jpg",
      false
    )
  );
  products.push(
    new Product(
      30,
      "?????? ???????????? ????????????",
      12900,
      "../img/sub_page/standard_img31.jpg",
      false
    )
  );
  products.push(
    new Product(
      31,
      "?????? ???????????? ????????? ?????????",
      13500,
      "../img/sub_page/standard_img32.jpg",
      false
    )
  );

  /** ?????? ?????? ??? ?????? (??????????????????) =map ??????*/
  products.forEach((product) => {
    productwrap.insertAdjacentHTML("beforeend", product.output());
  });

  /** ?????? */

  // ????????????
  function ProductSortUp() {
    while (productwrap.hasChildNodes()) {
      productwrap.removeChild(productwrap.childNodes[0]);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
      return b.price < a.price ? 1 : -1;
    });
    NewProducts.forEach((product) => {
      productwrap.insertAdjacentHTML("beforeend", product.output());
    });
  }

  // ????????????
  function ProductSortDown() {
    while (productwrap.hasChildNodes()) {
      productwrap.removeChild(productwrap.firstChild);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
      return a.price < b.price ? 1 : -1;
    });
    NewProducts.forEach((product) => {
      productwrap.insertAdjacentHTML("beforeend", product.output());
    });
  }

  // ?????? ????????? ????????????
  function ProductBasic() {
    while (productwrap.hasChildNodes()) {
      productwrap.removeChild(productwrap.firstChild);
    }
    products.forEach((product) => {
      productwrap.insertAdjacentHTML("beforeend", product.output());
    });
  }

  // ???????????? & ??????
  filterbox.addEventListener("click", (e) => {
    if (e.target == descending) {
      ProductSortUp();
    } else if (e.target == ascending) {
      ProductSortDown();
    } else if (e.target == sortreset) {
      ProductBasic();
    } else {
      return;
    }
  });

  function removeFromCart(itemId) {
    products[itemId].itemInCart = false;
    cartList = cartList.filter((list) => list.id != itemId);
    addItem();
  }

  /** ?????? ??????????????? ???????????? */

  let addtocarts = document.querySelectorAll("#add-to-cart");
  addtocarts.forEach((e) => {
    e.addEventListener("click", () => addToCart(e.parentNode.parentNode.id));
  });

  function addToCart(id) {
    if (!products[id].itemInCart) {
      cartList = [...cartList, products[id]];
      addItem();
      alert("???????????? ?????? ???????????????.");
    } else {
      alert("?????? ????????? ???????????????.");
    }
    products[id].itemInCart = true;
  }

  /** ?????? ??????????????? ?????? */
  let totalPrice;
  let totalItems;

  function addItem() {
    totalPrice = 0;
    totalItems = 0;
    let clrNode = document.getElementById("item-body");
    clrNode.innerHTML = "";
    console.log(clrNode.childNodes);
    cartList.map((cart) => {
      let cartCont = document.getElementById("item-body");
      totalPrice = totalPrice + cart.price;
      totalItems = totalItems + 1;

      let tempCart = document.createElement("div");
      tempCart.setAttribute("class", "cart-list");
      tempCart.setAttribute("id", cart.id);

      let listImg = document.createElement("img");
      listImg.setAttribute("id", "list-img");
      listImg.setAttribute("class", "list-img");
      listImg.src = cart.img;
      tempCart.appendChild(listImg);

      let listName = document.createElement("h3");
      listName.setAttribute("class", "list-name");
      listName.innerHTML = cart.name;
      tempCart.appendChild(listName);

      let listprice = document.createElement("h3");
      listprice.setAttribute("class", "price");
      listprice.innerHTML = cart.price;
      tempCart.appendChild(listprice);

      let listQuantity = document.createElement("h3");
      listQuantity.setAttribute("class", "quantity");
      listQuantity.innerHTML = "1";
      tempCart.appendChild(listQuantity);

      let listTrash = document.createElement("i");
      listTrash.setAttribute("class", "xi-trash-o");
      listTrash.setAttribute("id", "remove");
      tempCart.appendChild(listTrash);
      cartCont.appendChild(tempCart);
    });
    document.getElementById("total-amount").innerHTML =
      "??? ?????? " + totalPrice + "???";
    document.getElementById("total-items").innerHTML =
      "??? ?????? : " + totalItems;
  }

  cartbtn.addEventListener("click", () => {
    cartbox.style.right = "0";
  });

  const cart_close = document.querySelector(".cart_close");

  cart_close.addEventListener("click", () => {
    cartbox.style.right = "-100%";
  });
  /** ?????? ??????????????? */
  document.addEventListener("click", function (e) {
    if (e.target.id == "remove") {
      let itemId = e.target.parentNode.id;
      removeFromCart(itemId);
    }
  });

  /********************* cart filter *********************/
  /********************* standard_items-imgChange *********************/
  let Standard_items = document.querySelectorAll("#cart-img > img ");

  Standard_items.forEach((Standard_item) => {
    Standard_item.addEventListener("mouseover", function () {
      Standard_item.setAttribute("src", this.src.replace(".jpg", "-1.jpg"));
    });
  });
  Standard_items.forEach((Standard_item) => {
    Standard_item.addEventListener("mouseout", function () {
      Standard_item.setAttribute("src", this.src.replace("-1.jpg", ".jpg"));
    });
  });
  /********************* best-imgChange *********************/

  /********************* more *********************/
  const more = document.querySelector(".more");
  const standard_item_container = document.getElementById(
    "standard_item_container"
  );

  more.addEventListener("click", () => {
    let height = standard_item_container.offsetHeight;
    let newHeight = height + 1050;
    if (standard_item_container.offsetHeight >= 4000) {
      standard_item_container.style.height = "1050px";
      more.children.TextContent = "??????";
    } else {
      standard_item_container.style.height = newHeight + "px";
      more.children.TextContent = "?????????";
    }
  });

  /********************* more *********************/

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
