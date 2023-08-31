// #Parent element
const productParent = document.querySelector(".products");
// #Buttons
const next = document.querySelector(".next");
const back = document.querySelector(".back");
// productState
const productState = {
  productsNum: 10,
  products: [],
};

const createProducts = () => {
  for (let i = 1; i <= productState.productsNum; i++) {
    const product = {
      name: `Proizvod ${i}`,
      price: 100,
    };
    productState.products.push(product);
  }
  console.log(productState.products);
};

const renderProductContainers = () => {
  let elements = [];
  productState.products.forEach((product, index) => {
    if (index % 5 === 0) {
      container = document.createElement("div");
      container.classList.add(`product-container`);
      productParent.appendChild(container);
      elements.push(container);
    }

    const div = document.createElement("div");
    div.classList.add("product");
    const heading = document.createElement("h1");
    heading.textContent = product.name;
    div.appendChild(heading);
    container.appendChild(div);
  });
  return elements;
};

const initialPosition = (elementsArr) => {
  console.log(elementsArr);
  for (let i = 0; i < elementsArr.length; i++) {
    // set elements to be in the center
    elementsArr[i].style.left = `${i * 100 + 50}%`;
  }
};

let nextClick = 0;

const moveNext = (elements) => {
  next.addEventListener("click", () => {
    nextClick++;
    console.log("NEXT EVENT");
    console.log("Next click:", nextClick);
    console.log("Elements length forward:", elements.length);

    if (nextClick >= elements.length) {
      console.log("ok");
      initialPosition(elements);
      nextClick = 0;
      return;
    }

    const shift = nextClick * -100; // Pomak u procentima

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.left = `${50 + i * 100 + shift}%`;
    }
  });
};

const backNext = (elements) => {
  back.addEventListener("click", () => {
    nextClick--;
    console.log("BACK EVENT");
    console.log("back click:", nextClick);
    console.log("Elements length back:", elements.length);

    if (nextClick < 0) {
      console.log("disable move");
      nextClick = 0;
      return;
    }

    const shift = nextClick * -100; // Pomak u procentima

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.left = `${50 + i * 100 + shift}%`;
    }
  });
};

// create elemenent for render
createProducts();
// render products elemenets
const productContainers = renderProductContainers();
// default position function
initialPosition(productContainers);
// slider functions
moveNext(productContainers);
backNext(productContainers);
////////////////////////
