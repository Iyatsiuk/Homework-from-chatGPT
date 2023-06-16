/* Feature #1
In your project, display the current date and time using JavaScript: Tuesday 16:00*/

// Get the current time
let currentTime = new Date();

// Extract the hour, minute, and second from the current time
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

// Add leading zeros if necessary(using the conditional operator)
minutes = minutes < 10 ? "0" + minutes : minutes;

// Format the time in HH:MM format
let formattedTime = hours + ":" + minutes;

// Get the current day
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[currentTime.getDay()];

// Update the HTML element with the current time and day
document.getElementById("current-time").innerHTML = currentDay + " " + formattedTime;


/*Feature #2
Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.*/
document.getElementById("city-search-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the city input value
  let city = document.getElementById("city-input").value;

  // Update the city name element with the entered city
  document.getElementById("city-name").textContent = city;
});
