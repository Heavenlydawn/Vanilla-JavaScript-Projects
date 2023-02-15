// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "Web Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "As A Web developer I build websites and ensure they perform reliably and efficiently and are very interactive and responsive, I pride in my work as a web developer and the company has given me so much room to expand my horizon.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "Web Designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "As a Web designer in the company I create the visual aspects of websites before passing it down to the Web Developer for building.I meet with clients, online or in person, in order to get a clear picture of the message that needs to be portrayed on the website. Once the details are determined, I create layouts, designs, and features that display the client's services in a way that is appealing to the target audience and I could achieve all these by working in this enterprise.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "Intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "This company has been the ideal environment for me to develop my skill and gain experience in the Tech field that I am passionate about I really feel like I resonate with the company’s mission.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "The Boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "I firmly Believe in making the people who work for you feel like Family and take care of them as such, Treat them with so much care that they do not just say I Like My Job but I Love My Job . ",
  },
];

// Select Items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Buttons
const pervBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set Starting Item
let currentItem = 0;

// Load Initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// Show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// !Loop through the buttons

// Show next person
nextBtn.addEventListener("click", function () {
  currentItem++;

  //Setting the button back to the first item without reloading the page
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show Previous person
pervBtn.addEventListener("click", function () {
  currentItem--;

  //Setting the button back to the last item without reloading the page
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Show Random Person Button
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
});
