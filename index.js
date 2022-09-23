document.addEventListener('click', boxListener);

let boxStack = [];
let boxInterval;

function boxListener(event) {
    if (!event.target.classList.contains("box")) return;
    if(boxStack.includes(event.target)) return;
    boxStack.push(event.target);
    event.target.classList.add("clicked");
    if(boxStack.length >= 9) {
            boxInterval = setInterval( () => {
                    boxStack[0].classList.remove("clicked");
                    boxStack.shift(); 
                    if (boxStack.length === 0) clearInterval(boxInterval);     
            } ,300);
    }
}





