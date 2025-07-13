const socket = io("http://localhost:3000");

const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

function sendMessage() {
  const msg = input.value;
  socket.emit("send_message", { message: msg });
  input.value = "";
}

socket.on("receive_message", (data) => {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = data.message;
  messages.appendChild(msgDiv);
});
