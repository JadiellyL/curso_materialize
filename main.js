//floating action button
const elementsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elementsBtns,{
    direction: "top",
    hoverEnabled: false
});

//navbar
const elementsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elementsDropdown,{
    coverTrigger: false
});
elemtsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemtsSidenav);