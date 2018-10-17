const input = document.querySelector('#search');
const submit = document.querySelector('#submit-form').addEventListener('click', renderResults);
/*const cardTemplate = `
    <div class = 'card'>
        <h2>${response.name}</h2>
        <h3>${response.species}</h3>
        <h3>${response.type}</h3>
        <h3>${response.status}</h3>
    </div
`;*/

function displayInput(){
    console.log('input', input.value);
}

axios
    .get('https://rickandmortyapi.com/api/character')
    .then((response)=>{
        console.log(response.data.results);
    })
    .catch((error)=>{
        console.log(error);
});

function renderResults(){
    axios
     .get('https://rickandmortyapi.com/api/character')
     .then((response)=>{
        console.log(input.value);
        let displayName = (response.data.results).map(charname => charname.name.lastIndexOf(input.value));
        console.log(displayName);
    })
}