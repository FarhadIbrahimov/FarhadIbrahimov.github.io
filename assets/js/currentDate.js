// Function to update the date
function updateDate() {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  // Find the <span> element with class "date" and update its content
  const dateElement = document.querySelector(".date");
  if (dateElement) {
    dateElement.textContent = formattedDate;
  }
}

// Call the function to update date initially
updateDate();
