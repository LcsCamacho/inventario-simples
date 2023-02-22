import express from 'express'
import { controllers } from '../controller/Controller'

const { listarProdutos, criarProduto, deletarProdutos, atualizarProdutos } = controllers.inventario
const { listarUsuarios, criarUsuario, deletarUsuario, atualizarUsuario, logar } = controllers.usuario

export const router = express.Router()

router.get('/inventario', listarProdutos)
router.post('/inventario', criarProduto)
router.delete('/inventario/:id', deletarProdutos)
router.put('/inventario/:id', atualizarProdutos)

router.get('/usuario', listarUsuarios)
router.post('/usuario/create', criarUsuario)
router.post('/usuario', logar)
router.delete('/usuario/:id', deletarUsuario)
router.put('/usuario/:id', atualizarUsuario)