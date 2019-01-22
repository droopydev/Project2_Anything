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

function buttonOutlets() {
    function changeState() {
        const bigButton = document.querySelector('#dropdownMenuButton')
        bigButton.innerHTML = 'Playnation | '+ event.target.innerHTML
        bigButton.classList.add('colorButton');
        console.log(bigButton.innerHTML);

    }
    let buttons = document.querySelectorAll('.dropdown-item')
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function() {
            console.log(event.target)
            console.log("Click worked");
            changeState();
        })
    }
}



window.onload = function(){
    slideSidebar();
    buttonOutlets();
    console.log('hello')
    console.log(this.props)
};