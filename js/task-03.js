const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesContainerElement = document.querySelector("ul.gallery");

const imagesList = [];

images.map(element => imagesList.push(`<li><img src=${element.url} alt = "${element.alt}" height=200px></li>`));

console.log(imagesContainerElement);
console.log(imagesList);

imagesContainerElement.insertAdjacentHTML("afterbegin", imagesList.join(""));

const bodyImages = document.querySelectorAll("img");

for (let img of bodyImages) {
  img.style.display = "block";
  img.style.marginLeft = "10px";
}
