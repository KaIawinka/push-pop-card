let products = [
  {
    title: "Banana",
    price: "170",
    weight: "3kg",
    color: "0",
    image: "https://static.vecteezy.com/system/resources/thumbnails/069/652/097/small/ultra-realistic-4k-fruit-with-soft-natural-bokeh-background-banana-free-photo.jpg",
  },
  {
    title: "Apple",
    price: "120",
    weight: "1kg",
    color: "1",
    image: "https://rg.ru/uploads/images/199/33/68/iStock-1158470655.jpg",
  },
  {
    title: "Orange",
    price: "210",
    weight: "2kg",
    color: "2",
    image: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg",
  },
  {
    title: "Strawberry",
    price: "350",
    weight: "0.5kg",
    color: "3",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Blueberry",
    price: "450",
    weight: "0.3kg",
    color: "4",
    image: "https://holdenfg.org/wp-content/uploads/2021/03/alex-ushakoff-6MynOBZgig0-unsplash-1920x1280.jpg.webp",
  },
  {
    title: "Watermelon",
    price: "300",
    weight: "7kg",
    color: "5",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Pineapple",
    price: "280",
    weight: "1.5kg",
    color: "6",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Mango",
    price: "250",
    weight: "0.8kg",
    color: "7",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Grapes",
    price: "190",
    weight: "1.2kg",
    color: "8",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Kiwi",
    price: "160",
    weight: "1kg",
    color: "9",
    image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Peach",
    price: "240",
    weight: "1.5kg",
    color: "10",
    image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/peach-fruit-benefits-1200x628-facebook-1200x628.jpg",
  },
  {
    title: "Lemon",
    price: "110",
    weight: "0.5kg",
    color: "11",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Avocado",
    price: "320",
    weight: "0.6kg",
    color: "12",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Cherry",
    price: "400",
    weight: "1kg",
    color: "13",
    image: "https://assets.clevelandclinic.org/transform/96e1a587-e9da-47eb-96da-0683143d5180/bowl-Of-Cherries-1354050568-770x533-1_jpg",
  },
  {
    title: "Pear",
    price: "150",
    weight: "2kg",
    color: "14",
    image: "https://txmg.org/hendersonmg/files/2022/04/Pear-Ayers.jpg",
  },
];

function Products() {
  const block = document.querySelector("#block");
  if (!block) return;
  block.innerHTML = "";
  products.forEach((product) => {
    block.innerHTML += `
      <div class="prod2">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <span>Цена: ${product.price}</span>
        <span>Вес: ${product.weight}</span>
        <span>Номер: ${product.color}</span>
      </div>
    `;
  });
}

function addProduct() {
  const titleInput = document.getElementById("title");
  const priceInput = document.getElementById("price");
  const weightInput = document.getElementById("weight");
  const colorInput = document.getElementById("color");
  const imageInput = document.getElementById("image");

  const newProduct = {
    title: titleInput.value,
    price: priceInput.value,
    weight: weightInput.value,
    color: colorInput.value,
    image: imageInput.value,
  };

  products.push(newProduct);
  Products();

  titleInput.value = "";
  priceInput.value = "";
  weightInput.value = "";
  colorInput.value = "";
  imageInput.value = "";
}
const add = document.getElementById("add");
add.onclick = addProduct;

function clearLastProduct() {
  products.pop();
  Products();
}
const clearBtn = document.getElementById("clear");
clearBtn.onclick = clearLastProduct;

const numberClear = document.getElementById("numberClear");
function FuncClearNumber() {
  const deleteValue = document.getElementById("areaClear").value.trim();
  const updatedProducts = products.filter(product => product.color !== deleteValue);
  if (updatedProducts.length !== products.length) {
    products = updatedProducts;
    Products();
    document.getElementById("areaClear").value = "";
  } else {
    alert("Товар с таким номером не найден!");
  }
}
numberClear.onclick = FuncClearNumber;

Products();