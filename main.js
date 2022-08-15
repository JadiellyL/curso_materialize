//floating action button
const elementsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elementsBtns,{
    direction: "top",
    hoverEnabled: false
});