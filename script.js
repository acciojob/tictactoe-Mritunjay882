//your JS code here. If required.
// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {

  // Get references to the player name inputs and the submit button
  var player1Input = document.getElementById("player-1");
  var player2Input = document.getElementById("player-2");
  var submitButton = document.getElementById("submit");

  // Get a reference to the message div
  var messageDiv = document.querySelector(".message");

  // Get references to the cells on the board
  var cells = document.querySelectorAll(".cell");

  // Define variables to keep track of the current player and the game state
  var currentPlayer;
  var gameState;

  // Define a function to initialize the game
  function initGame() {
    // Set the initial player and game state
    currentPlayer = "x";
    gameState = ["", "", "", "", "", "", "", "", ""];

    // Clear the message div
    messageDiv.textContent = "";

    // Add event listeners to the cells
    cells.forEach(function
