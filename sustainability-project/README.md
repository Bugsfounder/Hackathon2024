run MQTT broker locally or use a cloud service.

docker run -it -p 1883:1883 -p 9001:9001 eclipse-mosquitto

Simulate Sensor Data:

```js
// utils/simulateSensorData.js
const mqtt = require("mqtt");

// MQTT broker URL
const brokerUrl = "mqtt://localhost:1883"; // Replace with your broker URL

// Create an MQTT client
const client = mqtt.connect(brokerUrl);

// Define the topic and message
const topic = "home/sensors";

// When the client connects
client.on("connect", () => {
  console.log("Connected to broker");

  // Publish a message

  setInterval(() => {
    const message = JSON.stringify({
      waterFlow: Math.random() * 100,
      currentFlow: Math.random() * 10,
      temperature: Math.random() * 30,
    });
    client.publish(topic, message, () => {
      console.log(`Message published to topic '${topic}': ${message}`);
      // Disconnect the client
      client.end();
    });
  }, 5000);

  // const message = JSON.stringify({ "waterFlow": Math.random() * 100, currentFlow: Math.random() * 10, temperature: Math.random() * 30 });
  // client.publish(topic, message, { qos: 0, retain: false }, () => {
  //     console.log(`Message published to topic '${topic}': ${message}`);
  //     // Disconnect the client
  //     client.end();
  // });
});

// Handle connection errors
client.on("error", (error) => {
  console.error("Connection error:", error);
});
```

start:

```
npm run dev
```

run the publisher code:

```
node utils/simulateSensorData
```
