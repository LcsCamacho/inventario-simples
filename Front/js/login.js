const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
    };

    fetch("http://localhost:3000/usuario", options)
        .then((resp) => resp.status)
        .then((resp) => {
            if (resp == 200)
                window.location.href = "http://localhost:5500/Front/pages/produtos.html"
            else
                alert("Usuário ou senha inválidos")
        })
});
