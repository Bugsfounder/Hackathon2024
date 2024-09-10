import mqtt from 'mqtt'

let sensorData = {};

const client = mqtt.connect("mqtt://localhost:1883");

client.on('connect', () => {
    client.subscribe('home/sensors');
});

client.on('message', (topic, message) => {
    console.log("Received message: ", message.toString());
    try {
        sensorData = JSON.parse(message.toString());
    } catch (err) {
        console.log("Error parsing JSON: ", err);

    }
});

export default (req, res) => {
    res.status(200).json(sensorData);
}
