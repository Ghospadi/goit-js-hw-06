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

const imagesContainerEl = document.querySelector("ul.gallery");
imagesContainerEl.style.display = "flex";
imagesContainerEl.style.justifyContent = "space-between";
imagesContainerEl.style.listStyle = "none";
imagesContainerEl.style.width = "1200px";
imagesContainerEl.style.paddingLeft = "0px";

const picturesListEl = [];

for (let image of images) {
  const imageEl = `<li><img src=${image.url} alt = "${image.alt}" height=220px></li>`;

  picturesListEl.push(imageEl);
}

imagesContainerEl.insertAdjacentHTML("afterbegin", picturesListEl.join(""));

const picturesEl = document.querySelectorAll("img");

for (let pictureEl of picturesEl) {
  pictureEl.style.display = "block";
}
