function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value.trim();

  if (message === "") return;

  addMessage(message, "user");
  input.value = "";

  setTimeout(() => {
    let botReply = getBotResponse(message);
    addMessage(botReply, "bot");
  }, 500);
}

function addMessage(text, sender) {
  let chatBox = document.getElementById("chatBox");
  let msg = document.createElement("div");

  msg.classList.add("message", sender);
  msg.innerText = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) return "Hi there!";
  if (input.includes("how are you")) return "I'm just code, but I'm fine!";
  if (input.includes("bye")) return "Goodbye!";
  
  return "I didn't understand that.";
}
