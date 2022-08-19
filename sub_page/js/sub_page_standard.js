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

  /** cart 공백 배열 우선선언 필요 */
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
          <span>${this.price}</span><span>원</span>
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
      "바꾸 일렉트릭 스트로베리 믹스",
      12900,
      "../img/sub_page/standard_img01.jpg",
      false
    )
  );
  products.push(
    new Product(
      1,
      "바꾸 스탠다드 파머스 마켓",
      12900,
      "../img/sub_page/standard_img02.jpg",
      false
    )
  );
  products.push(
    new Product(
      2,
      "바꾸 스탠다드 리버베드",
      11900,
      "../img/sub_page/standard_img03.jpg",
      false
    )
  );
  products.push(
    new Product(
      3,
      "바꾸 스탠다드 플라워베드",
      12900,
      "../img/sub_page/standard_img04.jpg",
      false
    )
  );
  products.push(
    new Product(
      4,
      "바꾸 스탠다드 우드블럭 프로랄 블랙",
      13500,
      "../img/sub_page/standard_img05.jpg",
      false
    )
  );
  products.push(
    new Product(
      5,
      "바꾸 스탠다드 데드스톡 해피 믹스",
      13500,
      "../img/sub_page/standard_img06.jpg",
      false
    )
  );
  products.push(
    new Product(
      6,
      "바꾸 스탠다드 데드스톡 오렌지 글러브",
      13500,
      "../img/sub_page/standard_img07.jpg",
      false
    )
  );
  products.push(
    new Product(
      7,
      "바꾸 스탠다드 데드스톡 카모 플라워",
      11900,
      "../img/sub_page/standard_img08.jpg",
      false
    )
  );
  products.push(
    new Product(
      8,
      "바꾸 스탠다드 데드스톡 럭스",
      12900,
      "../img/sub_page/standard_img09.jpg",
      false
    )
  );
  products.push(
    new Product(
      9,
      "바꾸 스탠다드 데드스톡 우드랜드",
      11900,
      "../img/sub_page/standard_img10.jpg",
      false
    )
  );
  products.push(
    new Product(
      10,
      "바꾸 스탠다드 팝 플로랄",
      13500,
      "../img/sub_page/standard_img11.jpg",
      false
    )
  );
  products.push(
    new Product(
      11,
      "바꾸 스탠다드 와일드 데이지",
      12900,
      "../img/sub_page/standard_img12.jpg",
      false
    )
  );
  products.push(
    new Product(
      12,
      "바꾸 와일드 데이지",
      12900,
      "../img/sub_page/standard_img13.jpg",
      false
    )
  );
  products.push(
    new Product(
      13,
      "바꾸 스탠다드 라임 로즈",
      12900,
      "../img/sub_page/standard_img14.jpg",
      false
    )
  );
  products.push(
    new Product(
      14,
      "바꾸 스탠다드 메달리온 플로랄",
      13500,
      "../img/sub_page/standard_img15.jpg",
      false
    )
  );
  products.push(
    new Product(
      15,
      "바꾸 스탠다드 레이디버그 리프",
      13500,
      "../img/sub_page/standard_img16.jpg",
      false
    )
  );
  products.push(
    new Product(
      16,
      "바꾸 스탠다드 스네일 프렌즈",
      11900,
      "../img/sub_page/standard_img17.jpg",
      false
    )
  );
  products.push(
    new Product(
      17,
      "바꾸 스탠다드 엘리펀트 블러썸",
      12900,
      "../img/sub_page/standard_img18.jpg",
      false
    )
  );
  products.push(
    new Product(
      18,
      "바꾸 스탠다드 빅 체크 멀티",
      13500,
      "../img/sub_page/standard_img19.jpg",
      false
    )
  );
  products.push(
    new Product(
      19,
      "바꾸 스탠다드 70s 마드라스",
      11900,
      "../img/sub_page/standard_img20.jpg",
      false
    )
  );
  products.push(
    new Product(
      20,
      "바꾸 스탠다드 아카이브 그레이프 프루트",
      11900,
      "../img/sub_page/standard_img21.jpg",
      false
    )
  );
  products.push(
    new Product(
      21,
      "바꾸 스탠다드 플러피 캣",
      12900,
      "../img/sub_page/standard_img22.jpg",
      false
    )
  );
  products.push(
    new Product(
      22,
      "바꾸 스탠다드 바나나",
      13500,
      "../img/sub_page/standard_img23.jpg",
      false
    )
  );
  products.push(
    new Product(
      23,
      "바꾸 스탠다드 라즈베리 해피",
      12900,
      "../img/sub_page/standard_img24.jpg",
      false
    )
  );
  products.push(
    new Product(
      24,
      "바꾸 스탠다드 옐로우 해피",
      12900,
      "../img/sub_page/standard_img25.jpg",
      false
    )
  );
  products.push(
    new Product(
      25,
      "바꾸 스탠다드 블랙 칼리코 플로랄",
      11900,
      "../img/sub_page/standard_img26.jpg",
      false
    )
  );
  products.push(
    new Product(
      26,
      "바꾸 스탠다드 하프 스퀘어",
      11900,
      "../img/sub_page/standard_img27.jpg",
      false
    )
  );
  products.push(
    new Product(
      27,
      "바꾸 스탠다드 푸들",
      12900,
      "../img/sub_page/standard_img28.jpg",
      false
    )
  );
  products.push(
    new Product(
      28,
      "바꾸 스탠다드 리브라",
      13500,
      "../img/sub_page/standard_img29.jpg",
      false
    )
  );
  products.push(
    new Product(
      29,
      "바꾸 스탠다드 세지타우러스",
      12900,
      "../img/sub_page/standard_img30.jpg",
      false
    )
  );
  products.push(
    new Product(
      30,
      "바꾸 스탠다드 타우러스",
      12900,
      "../img/sub_page/standard_img31.jpg",
      false
    )
  );
  products.push(
    new Product(
      31,
      "바꾸 스탠다드 퍼시몬 컬리지",
      13500,
      "../img/sub_page/standard_img32.jpg",
      false
    )
  );

  /** 객채 선언 및 생성 (상품초기배열) =map 동일*/
  products.forEach((product) => {
    productwrap.insertAdjacentHTML("beforeend", product.output());
  });

  /** 필터 */

  // 오름차순
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

  // 내림차순
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

  // 초기 배열로 되돌리기
  function ProductBasic() {
    while (productwrap.hasChildNodes()) {
      productwrap.removeChild(productwrap.firstChild);
    }
    products.forEach((product) => {
      productwrap.insertAdjacentHTML("beforeend", product.output());
    });
  }

  // 버튼박스 & 버튼
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

  /** 카트 리스트추가 명령선언 */

  let addtocarts = document.querySelectorAll("#add-to-cart");
  addtocarts.forEach((e) => {
    e.addEventListener("click", () => addToCart(e.parentNode.parentNode.id));
  });

  function addToCart(id) {
    if (!products[id].itemInCart) {
      cartList = [...cartList, products[id]];
      addItem();
      alert("장바구니 추가 되었습니다.");
    } else {
      alert("이미 추가된 상품입니다.");
    }
    products[id].itemInCart = true;
  }

  /** 카트 리스트추가 작업 */
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
      "총 가격 " + totalPrice + "원";
    document.getElementById("total-items").innerHTML =
      "총 수량 : " + totalItems;
  }

  cartbtn.addEventListener("click", () => {
    cartbox.style.right = "0";
  });

  const cart_close = document.querySelector(".cart_close");

  cart_close.addEventListener("click", () => {
    cartbox.style.right = "-100%";
  });
  /** 카트 리스트삭제 */
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
      more.children.TextContent = "닫기";
    } else {
      standard_item_container.style.height = newHeight + "px";
      more.children.TextContent = "더보기";
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
