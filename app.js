var input = document.querySelector('#search').value;
var submit = document.querySelector('#submit-form').addEventListener('click', displayInput);

function displayInput(){
    console.log('input', input);
}

axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    });