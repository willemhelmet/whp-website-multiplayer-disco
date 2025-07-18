
import { io } from "socket.io-client";

const socket = io("https://whpmultiplayer.rcdis.co/");

socket.on("connect", () => {
  console.log("Connected to server!");
});

socket.on("players", (players) => {
  console.log("Received players update:", players);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server.");
});
