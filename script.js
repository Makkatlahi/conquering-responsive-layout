const buttonElements = document.querySelectorAll(".btn");
const frameElement = document.getElementById("challenge-frame");
const button2Elements = document.querySelectorAll(".btn2");

const handleClick = (e) => {
  const clickedButtonEl = e.currentTarget;
  let url = "";
  if (clickedButtonEl.classList.contains("btn-1")) {
    url = "./challenge-1/challenge1.html";
  } else if (clickedButtonEl.classList.contains("btn-2")) {
    url = "./challenge-2/challenge2.html";
  } else if (clickedButtonEl.classList.contains("btn-3")) {
    url = "./challenge-3/challenge3.html";
  } else if (clickedButtonEl.classList.contains("btn-4")) {
    url = "./challenge-4/challenge4.html";
  }

  if (url && frameElement) {
    frameElement.src = url;
    frameElement.style.display = "block";
  }
};

buttonElements.forEach((btn) => btn.addEventListener("click", handleClick));
