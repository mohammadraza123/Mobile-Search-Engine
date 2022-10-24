var mobiles = {
  Data: [
    {
      brand: "Huawei",
      Name: "Huawei Ascend 3",
      Ram: "4GB",
      Storage: "360GB",
      Brand: "YES",
      Image: "photos/huawei 1.png",
      Price: "43,000",
    },
    {
      brand: "Huawei",
      Name: "Huawei F6",
      Ram: "8GB",
      Storage: "450GB",
      Brand: "YES",
      Image: "photos/huawei 3.png",
      Price: "47,000",
    },
    {
      brand: "Huawei",
      Name: "Huawei G7 L01",
      Ram: "6GB",
      Storage: "450GB",
      Brand: "YES",
      Image: "photos/huawei 4.png",
      Price: "47,000",
    },
    {
      brand: "Huawei",
      Name: "Huawei Y5",
      Ram: "6GB",
      Storage: "500GB",
      Brand: "YES",
      Image: "photos/huawei 2.png",
      Price: "50,000",
    },
    {
      brand: "Huawei",
      Name: "Huawei F47",
      Ram: "4GB",
      Storage: "350GB",
      Brand: "YES",
      Image: "photos/huawei 5.png",
      Price: "39,000",
    },
    {
      brand: "Samsung",
      Name: "Samsung S21 FE",
      Ram: "8GB",
      Storage: "350GB",
      Brand: "NO",
      Image: "photos/samsung 1.jpg",
      Price: "38,000",
    },
    {
      brand: "Samsung",
      Name: "Samsung S6",
      Ram: "4GB",
      Storage: "300GB",
      Brand: "YES",
      Image: "photos/samsung 2.jpg",
      Price: "40,000",
    },
    {
      brand: "Samsung",
      Name: "Samsung Galaxy",
      Ram: "6GB",
      Storage: "350GB",
      Brand: "YES",
      Image: "photos/samsung 2.jpg",
      Price: "43,000",
    },
    {
      brand: "Samsung",
      Name: "Samsung F98",
      Ram: "8GB",
      Storage: "400GB",
      Brand: "YES",
      Image: "photos/samsung 4.jpg",
      Price: "55,000",
    },
    {
      brand: "Samsung",
      Name: "Samsung G3",
      Ram: "8GB",
      Storage: "350GB",
      Brand: "YES",
      Image: "photos/samsung 5.jpg",
      Price: "38,000",
    },
    {
      brand: "IPhone",
      Name: "Iphone X",
      Ram: "Unlimited",
      Storage: "1TB",
      Brand: "YES",
      Image: "photos/iphone 1.png",
      Price: "1,40000",
    },
    {
      brand: "IPhone",
      Name: "Iphone Pro X",
      Ram: "Unlimited",
      Storage: "942GB",
      Brand: "NO",
      Image: "photos/iphone 2.jpg",
      Price: "70,000",
    },
    {
      brand: "IPhone",
      Name: "Iphone 12",
      Ram: "8GB",
      Storage: "942GB",
      Brand: "NO",
      Image: "photos/iphone 3.jpg",
      Price: "38,000",
    },
    {
      brand: "IPhone",
      Name: "Iphone 13",
      Ram: "8GB",
      Storage: "352GB",
      Brand: "NO",
      Image: "photos/iphone 4.jpg",
      Price: "38,000",
    },
    {
      brand: "IPhone",
      Name: "Iphone 6",
      Ram: "8GB",
      Storage: "352GB",
      Brand: "NO",
      Image: "photos/iphone 5.png",
      Price: "38,000",
    },
    {
      brand: "OPPO",
      Name: "Oppo A94",
      Ram: "8GB",
      Storage: "320GB",
      Brand: "YES",
      Image: "photos/oppo-1.jpg",
      Price: "43,000",
    },
    {
      brand: "OPPO",
      Name: "Oppo A57",
      Ram: "12GB",
      Storage: "320GB",
      Brand: "YES",
      Image: "photos/oppo 2.jpg",
      Price: "53,000",
    },
    {
      brand: "OPPO",
      Name: "Oppo F4",
      Ram: "6GB",
      Storage: "250GB",
      Brand: "YES",
      Image: "photos/oppo 3.png",
      Price: "50,000",
    },
    {
      brand: "OPPO",
      Name: "Oppo F3",
      Ram: "12GB",
      Storage: "250GB",
      Brand: "YES",
      Image: "photos/oppo 4.png",
      Price: "53,000",
    },
    {
      brand: "OPPO",
      Name: "Oppo X5",
      Ram: "8GB",
      Storage: "250GB",
      Brand: "YES",
      Image: "photos/oppo 5.jpg",
      Price: "49,000",
    },
    {
      brand: "OPPO",
      Name: "Oppo A9",
      Ram: "4GB",
      Storage: "250GB",
      Brand: "YES",
      Image: "photos/oppo-1.jpg",
      Price: "55,000",
    }

  ]
};

for (var i of mobiles.Data) {
  var card = document.createElement("div");
  card.classList.add("card");
  var images = document.createElement("div");
  images.classList.add("container1");
  var image = document.createElement("img");
  image.setAttribute("src", i.Image);
  images.appendChild(image);
  card.appendChild(images);
  var container = document.createElement("div");
  container.classList.add("container1")

  var mobName = document.createElement("h4");
  mobName.classList.add("Name");
  mobName.innerText = i.Name.toUpperCase();
  container.appendChild(mobName);

  var memory = document.createElement("h6");
  memory.innerText = "RAM : " + i.Ram + " "
  container.appendChild(memory)

  var memory1 = document.createElement("h6");
  memory1.innerText = "Storage : " + i.Storage + " "
  container.appendChild(memory1)


  var brand = document.createElement("h6")
  brand.innerText = "New Brand : " + i.Brand;
  container.appendChild(brand);

  var price = document.createElement("h6")
  price.innerText = "RS : " + i.Price;
  container.appendChild(price)

  card.appendChild(container);
  document.getElementById("Mobiles").appendChild(card)

}

var search = document.getElementById("Search").addEventListener("click", () => {

  var searchInput = document.getElementById("userInput").value;
  var elements = document.querySelectorAll(".Name");
  var cards = document.querySelectorAll(".card")
  console.log(elements)
  console.log(searchInput)

  elements.forEach(function (element, index) {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");

    }
  })

});
