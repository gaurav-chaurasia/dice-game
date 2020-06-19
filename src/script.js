var score, active_player, player;
score = [0, 0];
player = [0, 1];
activePlayer = 0;
function next_player() {

}

function restart () {
    var query = prompt('Are you sure? wanna restart type yes / no');
    if (query === 'yes') {
        var playerName = [
            prompt("Pleas enter your name "),  // askng plears for there name
            prompt("Pleas enter your name ")
        ];
        console.log(playerName);

        document.querySelector('#name-0').innerHTML = playerName[0] ? playerName[0] : "Player 1";
        document.querySelector('#name-1').innerHTML = playerName[1] ? playerName[1] : "Player 2";

        /*
        whenever game restart set everything to start
        */
        document.querySelector('#score-0').textContent = 0;
        document.querySelector('#score-1').textContent = 0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        
    }
}
document.querySelector('.btn-new').addEventListener('click', restart);