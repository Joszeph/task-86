import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const evenNumbers = numbersArray.filter((number) => {
    return number % 2 === 0;
  });


  evenNumbers.forEach((evenNum) => {
   const li = document.createElement('li');
    li.textContent = evenNum;
    ul.appendChild(li);
});

});
