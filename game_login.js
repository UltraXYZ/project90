function addUser(){
    player1Name=document.getElementById("player1input").value;
    player2Name=document.getElementById("player2input").value;
    localStorage.setItem("Player 1 Name",player1Name);
    localStorage.setItem("Player 2 Name",player2Name);
    window.location="game_page.html";
}