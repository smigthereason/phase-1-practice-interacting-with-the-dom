let playing = true;
let interval;

const timer = () => setInterval(() => {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    counter.innerText = count + 1;
}, 1000);

interval = timer();

document.getElementById("minus").addEventListener("click", () => {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    counter.innerText = count - 1;
});

document.getElementById("plus").addEventListener("click", () => {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    counter.innerText = count + 1;
});

document.getElementById("heart").addEventListener("click", () => {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    const likesList = document.querySelector(".likes");
    
    const existingLike = [...likesList.children].find(item => parseInt(item.dataset.num) === count);

    if (existingLike) {
        let likeCount = parseInt(existingLike.children[0].innerText);
        existingLike.innerHTML = `${count} has been liked <span>${likeCount + 1}</span> times`;
    } else {
        const newLike = document.createElement("li");
        newLike.setAttribute("data-num", count);
        newLike.innerHTML = `${count} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
    }
});

document.getElementById("pause").addEventListener("click", function() {
    if (playing) {
        playing = false;
        clearInterval(interval);
        this.innerText = "resume";
    } else {
        playing = true;
        interval = timer();
        this.innerText = "pause";
    }

    Array.from(document.getElementsByTagName("button")).forEach(btn => {
        if (btn.id !== "pause") {
            btn.disabled = !playing;
        }
    });
});

document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
    event.preventDefault();
    const inputField = this.children[0];
    const comment = inputField.value;
    inputField.value = "";

    const commentsSection = document.querySelector(".comments");
    const commentElement = document.createElement("p");
    commentElement.innerText = comment;
    commentsSection.appendChild(commentElement);
});
