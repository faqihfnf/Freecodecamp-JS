const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1; // ditambah 1, karena secara default bulan dimulai dari 0 pada method getMonth()
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year}`;
formattedDate = currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {});

switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate;
}
