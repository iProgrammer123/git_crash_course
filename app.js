// try {
//   console.log(123);
//   throw new Error("ashibka");
// } catch (err) {
//   console.log(err);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

const arr = [
  {
    name: "lyod",
    firma: "kay-kay",
    price: 3000,
  },
  {
    name: "chuda",
    firma: "kay-kay",
    price: 5000,
  },
  {
    name: "kiloli",
    firma: "imkon plus",
    price: 35000,
  },
  {
    name: "qora qum",
    firma: "kristal",
    price: 35000,
  },
  {
    name: "briket",
    firma: "kristal",
    price: 35000,
  },
];

// array filter high order method
console.log(arr.filter((marojniy, index) => marojniy.firma !== "kristal"));

// array map high order method
console.log(
  arr.map((marojniy, index) => ({ price: marojniy.price, name: marojniy.name }))
);

// // array reduce high order method
// console.log(
//   arr.reduce((dildigi, marojniy) => {
//     const nimadir = dildigi + marojniy.price;
//     return nimadir;
//   }, 8000)
// );

// const btnPlus = document.querySelector(".plus");
// const btnMinus = document.querySelector(".minus");
// const outputElement = document.querySelector("#output");

// outputElement.innerHTML = localStorage.getItem("count") || 0;

// btnPlus.addEventListener("click", () => {
//   const count = ++outputElement.innerHTML;
//   localStorage.setItem("count", count);
//   console.log(localStorage);
// });

// btnMinus.addEventListener("click", () => {
//   const count = --outputElement.innerHTML;
//   localStorage.setItem("count", count);
// });

// // console.log(localStorage);
// // const btn = document.querySelector("button");

// // btn.addEventListener("click", () => {
// //   const random1 = Math.random();
// //   const random2 = Math.random();

// //   localStorage.setItem(random1, random2);
// //   console.log(localStorage);
// // });

// arr.reduce((acc, curr, index) => {}, 0);
