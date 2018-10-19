const input = document.querySelector('#search');
const submit = document.querySelector('#submit-form').addEventListener('click', renderResults);
const resultBlock = document.querySelector('#result');

function displayInput(){
    console.log('input', input.value);
}

function renderResults(){
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${input.value}`)
    .then((response)=>{
        console.log(response.data.results);
        while (
            resultBlock.hasChildNodes()){
                resultBlock.removeChild(resultBlock.firstChild);
            }
        resultBlock.removeChild
        response.data.results.map(x => {
            let template = `
                <img src = ${x.image}>
                <h2>${x.name}</h2>
                <h3>${x.species}</h3>
                <h3>${x.status}</h3>
            `;
            let newCard = document.createElement('div');
            resultBlock.appendChild(newCard).id = 'card';
            newCard.innerHTML = template;
        })
    })
    .catch((error)=>{
        console.log(error);
    })
}