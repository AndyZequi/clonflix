//api a tvmaze
const API = 'https://api.tvmaze.com';

//Elementos del DOM
const rowsContainer = document.querySelector('#rowsContainer');
const hero = document.querySelector('#hero');
const heroTitle = document.querySelector('#heroTitle');
const heroDesc = document.querySelector('#heroDesc');
const heroPlay = document.querySelector('#heroPlay');

const init = async () => {
    const trending = await fetchJSON(`${API}/shows?page=1`)
    renderRow("Tendencias", trending.slice(0,20))
    console.log('@@@ trending =>', trending);
}

const renderRow = (title, shows) => {
    const section = document.createElement('section')
    section.classList = 'mb-3'
    section.innerHTML = 
    `
        <h3 class="rowTitle">${title}</h3>
        <div class="rail" data-rail></div>
    `

    //Función para crear los poster mini y pegarlos

    rowsContainer.appendChild(section)
}

const fetchJSON = async (url) => {
    const res = await fetch(url)
    if(!res.ok){
        throw new Error('Error al obtener los datos', url)
    }
    return await res.json()
}

init()