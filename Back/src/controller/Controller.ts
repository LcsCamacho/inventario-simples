import {
    listar as listarProdutos,
    criar as criarProduto,
    deletar as deletarProdutos, 
    atualizar as atualizarProdutos
} from "./inventario";
import {
    listar as listarUsuarios,
    criar as criarUsuario,
    deletar as deletarUsuario,
    atualizar as atualizarUsuario,
    logar
} from "./login";

export const controllers = {
    inventario: {
        listarProdutos,
        criarProduto,
        deletarProdutos,
        atualizarProdutos,
    },
    usuario: {
        listarUsuarios,
        criarUsuario,
        deletarUsuario,
        atualizarUsuario,
        logar
    }
}