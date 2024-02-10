export default function mobileNavToggle(setNavbarOpen) {
  // toggle the nav on click
  // args:
  // - setNavbarOpen (func): toggles the open state of the nav
  setNavbarOpen((prev) => !prev);

  const x = document.getElementById("mobileNavCont");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
