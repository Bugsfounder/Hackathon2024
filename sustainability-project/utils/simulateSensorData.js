const mqtt = require('mqtt');

// MQTT broker URL
const brokerUrl = 'mqtt://broker.hivemq.com'; // Replace with your broker URL

// Create an MQTT client
const client = mqtt.connect(brokerUrl);

// Define the topic and message
const topic = 'home/sensors';

// When the client connects
client.on('connect', () => {
    console.log('Connected to broker');

    // Publish a message

    setInterval(() => {
        const message = JSON.stringify({ "waterFlow": Math.random() * 100, currentFlow: Math.random() * 10, temperature: Math.random() * 30 });
        client.publish(topic, message, () => {
            console.log(`Message published to topic '${topic}': ${message}`);
            // Disconnect the client
            client.end();
        });
    }, 1000);
});

// Handle connection errors
client.on('error', (error) => {
    console.error('Connection error:', error);
});
