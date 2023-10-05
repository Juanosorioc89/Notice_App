const URL = "https://api.spaceflightnewsapi.net/v3/articles"

const spinner = document.getElementById('spinner') 

const cards = document.getElementById('cards')

function getInfo(){
    spinner.innerHTML = `
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`
    fetch(URL)
    .then(r => r.json())
    .then(articles => {
        
        pintarCards(articles)
        console.log(articles)
        spinner.innerHTML = ''
    })
    .catch(e => {
        console.log(e)
    })
}

function pintarCards (articles = []){
    let elements = '';
    articles.forEach(articulo => {
        elements +=`
        <div class="col">
        <div class="card">
        <a href="${articulo.url}" target="_blank">
        <img src="${articulo.imageUrl}" class="card-img-top" alt="...">
        </a>
            <div class="card-body">
            <h5 class="card-title">[${articulo.title}]</h5>
            <p class="card-text">${articulo.summary}</p>
        </div>
        </div>
        </div>
    `        
    });
    cards.innerHTML = elements
}