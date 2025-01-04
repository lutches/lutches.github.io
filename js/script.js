function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const burger = document.getElementById("burger");
    
    // Toggle .open on both sidebar and burger
    sidebar.classList.toggle("open");
    burger.classList.toggle("open");
  }
  