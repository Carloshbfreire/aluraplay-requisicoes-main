import { conectaApi } from "./conectaApi.js" 

async function buscarvideo() {
    const dadosDePesquisa = document.querySelector("[data-pesquisa]")
    const busca = await conectaApi.buscaVideo()
}