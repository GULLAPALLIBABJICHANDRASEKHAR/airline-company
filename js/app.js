function sidebar() {
    // navbar to sidebar functionality
    const hamburger = document.querySelector(".hamburger");
    const sidebarCloseBtn = document.querySelector(".close-btn");
    const sidebarContainer = document.querySelector(".sidebar-container");
    // open sidebar function: Adding the show-sidebar class to sidebar-container
    const openSidebar = () => {
        sidebarContainer.classList.remove("close-sidebar");
        sidebarContainer.classList.add("show-sidebar");
    }
    // closing the sidebar function: Removing the show-sidebar class to sidebar-container
    const closeSidebar = () => {
        sidebarContainer.classList.remove("show-sidebar");
        sidebarContainer.classList.add("close-sidebar");
    }
    hamburger.addEventListener("click", openSidebar);
    sidebarCloseBtn.addEventListener("click", closeSidebar);
}
sidebar();