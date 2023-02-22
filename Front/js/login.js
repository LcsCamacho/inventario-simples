const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());
    console.log(value)
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
    };

    fetch("http://localhost:3000/usuario", options)
        .then(() =>  alert("Logado!"))
        .then(() => window.location.href = "http://localhost:5500/Front/pages/produtos.html")
        .catch((err) => console.log("erro Fetch: ", err));
});
