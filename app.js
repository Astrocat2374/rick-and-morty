const input = document.querySelector('#search');
const submit = document.querySelector('#submit-form').addEventListener('click', renderResults);

function displayInput(){
    console.log('input', input.value);
}

function renderResults(){
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${input.value}`)
    .then((response).map(x => {
        console.log(
            x.name,
            x.species,
            x.type,
            x.status
        )
        let cardTemplate = `
            <div class = 'card'>
                <h2>${x.name}</h2>
                <h3>${x.species}</h3>
                <h3>${x.type}</h3>
                <h3>${x.status}</h3>
            </div
        `;
        let newCard = document.createElement('div');
        cardTemplate.appendChild(newCard).className='card';
        newCard.innerHTML = cardTemplate;
    }))
    .catch((error)=>{
        console.log(error);
    })
}