document.getElementById("myform").addEventListener("submit", function name(even) {
    even.preventDefault();

    const modemId = document.getElementById("int1").value;
    const password = document.getElementById("int2").value;

    if (modemId === "diyor" && password === "78900") {
        alert("Siz ro'yhatdan o'ttingiz!😁")
    } else {
        alert("Username yoki password xaro!😔")
    }
});

document.getElementById("btn2").addEventListener("click" , function text() {

    let test = prompt("Savolingizni kiriting");

    const newElement = document.createElement("p")
    newElement.innerHTML = test;
    document.body.appendChild(newElement)

    newElement.style.textAlign = 'center';
    newElement.style.marginTop = '20px';
    newElement.style.fontSize = '50px';
})