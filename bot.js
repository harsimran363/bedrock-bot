const { Client } = require('bedrock-protocol');

const client = new Client({
  host: '13.53.132.25', // Replace with your Minecraft server IP
  port: 19132,            // Default Bedrock port
  username: 'BotName',    // Replace with desired bot username
});

client.on('connect', () => {
  console.log('Connected to the server');
  client.write('chat', { message: 'Hello from GitHub Actions bot!' });
});

client.on('error', (error) => {
  console.error('Error:', error);
});

client.on('disconnect', (reason) => {
  console.log('Disconnected:', reason);
});
