console.log("we are in the browser!!!! working!!!");

function slideSidebar() {
    const hamburgerIcon = document.querySelector('#sidebarCollapse');
    function toggleActive() {
        var sideBar = document.querySelector('#sidebar');
        sideBar.classList.toggle("active");
        var content = document.querySelector('#content');
        content.classList.toggle("active");
    }

    hamburgerIcon.addEventListener('click', () => {toggleActive()}
    );
}

// function sideBarHeader() {
//     const header = document.querySelector('header')
//     function toggleActive() {
//         header
//     }
// }



window.onload = function(){
    slideSidebar();
};