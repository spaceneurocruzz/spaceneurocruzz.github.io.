function changeTitle() {
  const title = document.getElementById("hello-title");
  if (title.innerText === "Have a Good Time!") {
    title.innerText = "Hello";
  } else {
    title.innerText = "Have a Good Time!";
  }
}

const menuicon = document.getElementById("menuicon");
const crossicon = document.getElementById("cross");
const menuside = document.getElementById("menu-side");
menuicon.addEventListener("click", () => {
  menuside.classList.toggle("slidemenu");
});
crossicon.addEventListener("click", () => {
  menuside.classList.toggle("slidemenu");
});

function addMore() {
  const callToAction = document.getElementById("callToAction");
  const addMoreContent = document.getElementById("addMoreContent");
  if (callToAction.innerText === "Call to Action") {
    addMoreContent.style.cssText = "display:show";
    callToAction.innerText = "Click to Hide";
  } else {
    addMoreContent.style.cssText = "display:none";
    callToAction.innerText = "Call to Action";
  }
}
