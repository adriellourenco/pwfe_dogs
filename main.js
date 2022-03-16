"use strict"

const pesquisarRacas = async () => {
    const url = "https://dog.ceo/api/breeds/list/all"
    const response = await fetch(url)
    const data = await response.json()
    return Object.keys(data.message)
}


const pesquisarCachorro = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

const criarImg = (src) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("dog-img")

    return img;
}


const carregarImagens = async () => {
    const raca = document.querySelector("#raca").value;

    const imgUrl = await pesquisarCachorro(raca);

    const imgs = imgUrl.message.map(criarImg);

    document.querySelector("#img-container").replaceChildren(...imgs);
}

const carregarRacas = async () => {

    const lista = document.getElementById('list-racas')
    const racas = await pesquisarRacas()
    lista.innerHTML = `
    <option>
    ${racas.join("</option><option>")}
    </option>
    `
}

carregarRacas()
document.querySelector("#pesquisar").addEventListener("click", carregarImagens);