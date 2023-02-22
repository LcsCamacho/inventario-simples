const form = document.querySelector('form');
const inputId = document.querySelector('#id');
const inputNome = document.querySelector('#nome');
const inputDescricao = document.querySelector('#descricao');
const inputValor = document.querySelector('#valor');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    }

    fetch('http://localhost:3000/inventario', options)
        .then(res => res.json())
        .then((data) => {
            inputId.value = '';
            inputNome.value = '';
            inputDescricao.value = '';
            inputValor.value = '';
            alert('Produto cadastrado com sucesso!')
            console.log(data);
        })
        .catch(err => console.log(err));
});



const listarProdutos = () => {

    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    }

    fetch('http://localhost:3000/inventario', options)
        .then(res => res.json())
        .then(data => {
            const tbody = document.querySelector('tbody');
            tbody.innerHTML = '';
            data.forEach((item) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                <td id="id">${item.id}</td>
                <td id="nome">${item.nome}</td>
                <td id="desc">${item.descricao}</td>
                <td id="val">${item.valor}</td>
                <td><img id="remove-icon" onclick="removerProduto(${item.id})" src="../assets/remover.png"/></td>
                <td><img id="edit-icon" onclick="editarProdutoControl(this)" src="../assets/escrever.png"/></td>
            `;
                tbody.appendChild(tr);
            });
        })
        .catch(err => console.log(err));

}
listarProdutos();

const removerProduto = (id) => {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(`http://localhost:3000/inventario/${id}`, options)
        .then(res => res.json())
        .then(data => {
            listarProdutos();
        })
        .catch(err => console.log(err));
}

const editarProduto = (id, produtos) => {
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtos)
    }

    fetch(`http://localhost:3000/inventario/${id}`, options)
        .catch(err => console.log("erro Fetch", err));
}
let save = false
const editarProdutoControl = (e) => {
    console.log(e)
    if (save) {
        const data = {
            id: e.parentNode.parentNode.querySelector('#id').innerText,
            nome: e.parentNode.parentNode.querySelector('#nome').innerText,
            descricao: e.parentNode.parentNode.querySelector('#desc').innerText,
            valor: e.parentNode.parentNode.querySelector('#val').innerText
        }
        e.parentNode
            .parentNode
            .querySelectorAll('td').forEach((item) => {
                item.style.border = 'none'
                item.style.background = '#cfe2ff'
                item.setAttribute('contenteditable', 'false');
            });
        e.setAttribute('src', '../assets/escrever.png');
        save = false
        id = e.parentNode.parentNode.querySelector('#id').innerText
        editarProduto(id, data)
        return
    }
    e.parentNode
        .parentNode
        .querySelectorAll('td').forEach((item, index) => {
            if (index >= 4) return
            item.style.border = ' 2px dashed #2bff00'
            item.style.background = '#f6f6f6'
            item.setAttribute('contenteditable', 'true');
        });
    e.setAttribute('src', '../assets/save.png');
    save = true
    console.log(save)
}

const modalControl = () => {
    const modal = document.querySelector('.modal');
    if (modal.style.display === "flex") {
        modal.style.display = "none"
    } else modal.style.display = "flex"
}