const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Let's Go Dave!!");
});

client.on("message", (message) => {
  if (message.content.startsWith("status")) {
    message.channel.send("going offline now.. Bye !!");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong");
  }
});
client.login("NDY0MDkwNTE2MjY3NTk3ODI1.Dh55fw.xlFVHH7IewyemtL55i7wocqoYK0");
