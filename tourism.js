const text = document.getElementById('text');
const words = text.innerText.split('');

text.innerHTML = '';
words.forEach((word) => {
    const span = document.createElement('span');
    span.innerText = word;
    text.appendChild(span);
});

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === words.length) {
        clearInterval(timer);
        timer = null;
        setTimeout(() => {
            text.style.width = '0';
            text.style.overflow = 'hidden';
            setTimeout(() => {
                document.querySelector('.loading').style.display = 'none';
                // Perform any action after animation completes
            }, 1000); // Adjust the delay according to your animation duration
        }, 2000); // Adjust the delay according to your animation duration
    }
}