
let boxStack = [];
let boxInterval;
const sizeOfGrid = document.getElementsByClassName("box").length;
console.log(sizeOfGrid);


function boxListener(event) {
    if (!event.target.classList.contains("box")) return;
    if(boxStack.includes(event.target)) return;
    boxStack.push(event.target);
    event.target.classList.add("clicked");
    if(boxStack.length >= sizeOfGrid) {
            boxInterval = setInterval( () => {
                    boxStack[0].classList.remove("clicked");
                    boxStack.shift(); 
                    if (boxStack.length === 0) clearInterval(boxInterval);     
            } ,300);
    }
}

document.addEventListener('click', boxListener);




