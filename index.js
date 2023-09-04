let movies = [
  {
    name: "Chhichhore",
    des:
      "Divided by time, united by a tragic incident. In a bittersweet reunion, seven middle-aged friends take a walk down the memory lane at the least expected place.",
    image: "images/slide1.png"
  },
  {
    name: "RRR",
    des:
      "Under the British Raj, two revolutionaries with personal agendas forge a friendship, only to find each other on opposing sides.",
    image: "images/slide2.jpg"
  },
  {
    name: "Yeh Jawaani Hai Deewani",
    des:
      "On a trekking trip, an introvert falls for a charming ex-classmate, whose thirst for adventure drives them apart. Years later, their paths cross again.",
    image: "images/slide3.jpg"
  },
  {
    name: "Sita Ramam",
    des:
      "On a letter-delivering task, Afreen learns of a 20-year-old romance set amidst a war. Her quest to trace the lovers makes her embrace humanity beyond borders.",
    image: "images/slide4.jpg"
  },
  {
    name: "Ice Age:Continental Drift",
    des:
      "Manny and Ellie are forced to deal with the tribulations of their teenage daughter Peaches and Sid's family returns, only to drop off the elderly Granny.",
    image: "images/slide5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //dom elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  //attach
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  //images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //elements class
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 8000);

//video cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});
//card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
