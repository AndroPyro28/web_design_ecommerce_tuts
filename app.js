const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productDesc = document.querySelector(".productDesc");
const productImg = document.querySelector(".productImg");
const colors = document.querySelectorAll(".color");
const productCollection = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 113.99,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },

  {
    id: 2,
    title: "AIR JORDAN",
    price: 110.99,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },

  {
    id: 3,
    title: "BLAZER",
    price: 105.99,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },

  {
    id: 4,
    title: "CRATER",
    price: 101.99,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "HIPPIE",
    price: 99.99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];
let currentIndex = 0;

colors.forEach((color, index) => {
  // getting the index of colors div we will assign that index into productCollection
  color.addEventListener(
    "click",
    () => (productImg.src = productCollection[currentIndex].colors[index].img)
  );
});

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {

    menuItem.forEach((item) => {
      item.style.border = "none";
  });
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    menuItem[index].style.borderBottom = "solid 1px white";

    currentIndex = index;

    productImg.src = productCollection[index].colors[0].img; // initializing to 0 index
    productTitle.textContent = productCollection[index].title;
    productPrice.textContent = `$${productCollection[index].price}`;

    colors.forEach(
      (color, colorIndex) =>
        (color.style.background =
          productCollection[index].colors[colorIndex].code)
    ); // assigning a background according to Color index
  });
});

const sizes = document.querySelectorAll('.size');

sizes.forEach((size, index) => {

    size.addEventListener('click', e => {
      sizes.forEach((s, sIndex) => {
        s.style.background = 'white';
        s.style.color = 'black';
    })
      size.style.background = 'black';
      size.style.color = 'white';
    })

   

})
