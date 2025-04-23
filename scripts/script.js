// Show or toggle a fun fact when the button is clicked
function showMessage() {
  const fact = document.getElementById("funFact");
  if (fact.style.display === "block") {
    fact.style.display = "none";
  } else {
    fact.style.display = "block";
    fact.textContent = "The first televised image was of a ventriloquist dummy named 'Stooky Bill,' used by John Logie Baird in 1925.";
  }
}

// Optional: Smooth scroll for anchor links (enhanced usability)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
