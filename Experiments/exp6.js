let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;

input.onchange = function(){
    console.log("Input Changed:",input.value);
};

// Change heading text (onclick using addEventListener)
document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

// Change background color
document.getElementById("bgColorBtn").onclick = function () {
    document.body.style.backgroundColor ="red";
       
};

// Increase font size
document.getElementById("fontSizeBtn").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = Math.min(fontSize,40) + "px";
});

// Show/Hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Mouse over event(hover on heading)
heading.onmouseover = function(){
    heading.style.color="blue";
}

// Reset page
document.getElementById("resetBtn").addEventListener("click", function () {
    // heading.innerHTML = "Welcome to JavaScript Lab";
    // paragraph.style.display = "block";
    // paragraph.style.fontSize = "16px";
    // document.body.style.backgroundColor = "#f4f4f4";
    // input.value = "";
    // fontSize = 16;
    location.reload();
});