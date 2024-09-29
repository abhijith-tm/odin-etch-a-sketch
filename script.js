const container = document.querySelector('.container');
const size_Button = document.querySelector('.size');
const clear_Button = document.querySelector('.clear')
let isMouseDown = false;
let color = "blue"


// function to create grid
function createGrid(size){
    for(let i = 1;i<=size*size;i++){
        const new_div = document.createElement('div');
        new_div.id = "div"+i;
        new_div.className = "pixel_div";
        new_div.setAttribute("style", "display:flex; border:1px solid black; margin:0;padding:0;box-sizing:border-box;");
        new_div.style.height = `${600/size}px`;
        new_div.style.width = `${600/size}px`; 
        container.appendChild(new_div);
    }

    const pixel_divs = document.querySelectorAll('.pixel_div');

    pixel_divs.forEach(pixel_div => {
        pixel_div.addEventListener('mousedown', () => {
            isMouseDown = true;
            pixel_div.style.backgroundColor = `${color}`; 
        });


        pixel_div.addEventListener('mouseover', () => {
            if (isMouseDown) {
                pixel_div.style.backgroundColor = `${color}`; 
            }
        });

        pixel_div.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
});

}
function clearGrid(){
   const  pixel_divs = document.querySelectorAll('.pixel_div');
   pixel_divs.forEach(pixel_div => {
        pixel_div.style.backgroundColor = "white"
   })
}

//a 16x16 grid is created by deafult
createGrid(16);

function getGridSize(){
    let size = 0
    while(size<16 || size > 100 || Number.isNaN(size)){
    
        size = parseInt(prompt("Enter Grid size 1-100"));
    }

    return size;
}

size_Button.addEventListener("click", () => {

    container.innerHTML = '' //clears the default grid
    let size = getGridSize();
    createGrid(size);

});

clear_Button.addEventListener("click", () => {
    clearGrid();
})




