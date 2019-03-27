var random_number;
var number_of_guesses;


function main() {
    alert('working')
    random_number = getRandomArbitrary(1, 100);
    document.getElementById('button').addEventListener('click', handleClick)
}
   
    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);


    }
    
    function handleClick() {
        console.log('click');
    }
    
    
    
function Guess(){
    var guess = document.getElementById('Guess').value
    var result = document.getElementById('Result')
    
}