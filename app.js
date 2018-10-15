const input = document.querySelector('#search');
const submit = document.querySelector('#submit-form').addEventListener('click', displayInput);

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
         console.log(
            response.data.results
         );
     })
}