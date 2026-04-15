# Chatbot-UI-design
chatbot UI design using HTML, CSS, and JavaScript. It includes a simple interface, user/bot messages, and basic response logic.

Chatbot UI (HTML, CSS, JavaScript)

Overview

This project is a simple chatbot user interface built using HTML, CSS, and JavaScript. It allows users to send messages and receive basic automated responses from a rule-based bot.


Features

- Clean and modern chat interface
- User and bot message styling
- Auto-scrolling chat window
- Simple rule-based chatbot logic
- Responsive design


Project Structure

chatbot-project/
│── index.html     # Main structure
│── style.css      # Styling file
│── script.js      # Chat logic


How to Run

1. Download or copy all three files:
   
   - "index.html"
   - "style.css"
   - "script.js"

2. Place them in the same folder.

3. Open "index.html" in any web browser.


How It Works

- User enters a message in the input box.
- JavaScript captures the input and displays it in the chat.
- A simple function ("getBotResponse") checks the message.
- Based on keywords, the bot returns a predefined response.


Example Responses

User Input| Bot Response
hello| Hi there!
how are you| I'm just code, but I'm fine!
bye| Goodbye!
anything else| I didn't understand that.


Customization

You can edit responses inside "script.js":

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) return "Hi there!";
  if (input.includes("how are you")) return "I'm fine!";
  return "Try something else!";
}


Future Enhancements

- Integrate AI (e.g., OpenAI API)
- Add typing animation
- Add emojis and timestamps
- Voice input support
- Save chat history

License

This project is free to use for learning and personal projects.
