run MQTT broker locally or use a cloud service.

docker run -it -p 1883:1883 -p 9001:9001 eclipse-mosquitto

Simulate Sensor Data:

```js
// utils/simulateSensorData.js
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  setInterval(() => {
    const data = {
      waterFlow: Math.random() * 100,
      currentFlow: Math.random() * 10,
      temperature: Math.random() * 30,
    };
    client.publish("home/sensors", JSON.stringify(data));
  }, 5000);
});
```
