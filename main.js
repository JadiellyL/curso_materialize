//const M = require("materialize-css");

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

//Tooltip
const elementsTooltip = document.querySelectorAll(".tooltipped");
const instancesTooltip = M.Tooltip.init(elementsTooltip, {
    html: "olha essa dica",
    position: "right"
});

//Toast
const elementsToast = document.querySelector("#toast");
const instanceToast = ()=>{
    M.toast({
        html: "Tambem sou uma notificação",
        classes: "rounded"
    })
}


elementsToast.addEventListener("click", ()=>{
    instanceToast();
});