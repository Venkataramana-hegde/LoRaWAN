// server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3001 });
console.log("WebSocket server running on ws://localhost:3001");

// Send fake SOS message every 10 seconds for testing
setInterval(() => {
  const lat = 12.97 + Math.random() * 0.01;
  const lng = 77.59 + Math.random() * 0.01;
  const data = JSON.stringify({ lat, lng });

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
      console.log("Sent SOS:", data);
    }
  });
}, 10000);
