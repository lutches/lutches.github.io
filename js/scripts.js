function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const burger = document.getElementById("burger");
  sidebar.classList.toggle("open");
  burger.classList.toggle("open");
  if (sidebar.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function openBenefitDescription(benefit) {
  const benefitCard = document.getElementById(benefit);
  if (!benefitCard) {
    console.error("No element found with ID:", benefit);
    return;
  }
  benefitCard.classList.toggle("open");
}