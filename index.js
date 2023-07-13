// console.log("javascript was run");

const container = document.querySelector(".container");
// h2
const nameDisplay = document.querySelector(".nameDisplay");

const button = document.querySelector("button");

function selectRandom(data) {
  //   console.log(data);

  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * data.length);

  // Retrieve the object at the randomly generated index
  const randomObject = data[randomIndex];

  // Access the 'id' property of the selected object
  const randomName = randomObject.fullName;

  nameDisplay.textContent = randomName;

  //
}

const fetchData = function () {
  fetch("names.json")
    .then((response) => response.json())
    .then((data) => {
      // Handle the loaded JSON data
      // console.log(data);

      // return data;
      // Do something with the data
      selectRandom(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the file retrieval
      console.error("Error:", error);
    });
};

button.addEventListener("click", fetchData);

// console.log(data);
