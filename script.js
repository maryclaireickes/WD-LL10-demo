/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  // Make sure the username starts with '@'
  if (!username.startsWith('@')) {
    username = `@${username}`;
  }
  // Combine username and comment into one string
  const combinedComment = `${username}: ${comment}`;
  // Add the comment to the start or end of the comments array
  if (addToStart) {
    comments.unshift(combinedComment);
  } else {
    comments.push(combinedComment);
  }
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage (message) {
  // Get the element where the winner message should be shown
  const winnerDisplay = document.getElementById("winner-display");
  // Set the message as the content of the element
  winnerDisplay.innerHTML = message;
  // List of emojis to choose from
  const emojis = ["🎉", "🏆", "🥳", "👏", "🎊"];
  // Pick a random emoji from the list
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  // Select and update the #winner-emoji element
  const winnerEmoji = document.getElementById("winner-emoji");
  winnerEmoji.textContent = randomEmoji;
}
/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  // Pick a random index from the comments array
  const randomIndex = Math.floor(Math.random() * comments.length);
  // Get the winning comment
  const winningEntry = comments[randomIndex];
  // Show the winner message using the showWinnerMessage function
  showWinnerMessage(`<strong class="text-success">Winner: ${winningEntry}</strong>`);
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */
