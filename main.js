let words = ["build", "design", "research", "visualise"];
let speed = 100;
let index = 0;
let charPosition = 0;

const description = document.querySelector("#description");

//typing
const type = () => {
    if (charPosition < words[index].length) {
        description.innerHTML += words[index].charAt(charPosition);
        charPosition++
        setTimeout(type, speed);
    } else {
        setTimeout(erase, speed);
    }
}

//erasing
const erase = () => {
    if (charPosition >= 0) {
        let newText = words[index].substring(0, charPosition);
        description.innerHTML = newText;
        charPosition --
        setTimeout(erase, speed);
    } else {
        index++;
        if (index >= words.length)
         index = 0;
        setTimeout(type, speed)
    }
}

setTimeout(type,speed)
