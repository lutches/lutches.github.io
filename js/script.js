function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const burger = document.getElementById("burger");
  
    // Toggle the 'open' class on both the sidebar and the burger
    sidebar.classList.toggle("open");
    burger.classList.toggle("open");
  }
  