const p = document.querySelector('p');
p.style.color = "green";

const btn = document.querySelector('button');
btn.addEventListener('click', backgroundColor);

function backgroundColor() {
    document.body.style.backgroundColor = "red";
}

const btn2 = document.querySelector(".newbtn");
btn2.addEventListener('click', funkyFunction);

function funkyFunction() {
    document.body.style.backgroundColor = "blue";

}