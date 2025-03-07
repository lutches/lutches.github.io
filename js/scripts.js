function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const burger = document.getElementById("burger");
  sidebar.classList.toggle("open");
  burger.classList.toggle("open");

  if (sidebar.classList.contains("open")) {
    // Prevent scrolling
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}

