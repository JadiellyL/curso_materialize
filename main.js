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
const elemtsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemtsSidenav);

//modal
const elementsModal = document.querySelectorAll(".modal");
const instancesModal = M.Modal.init(elementsModal);