import mqtt from 'mqtt'

let sensorData = { "value": "Hello" };

const client = mqtt.connect("mqtt://localhost:1883");

client.on('connect', () => {
    client.subscribe('home/sensors', { qos: 0 }, (error, res) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`${res[0].topic} was subscribed`)
        }
    });
});

client.on('message', (topic, message) => {
    console.log("Received message: ", JSON.parse(message.toString()));
    try {
        sensorData = JSON.parse(message.toString());
    } catch (err) {
        console.log("Error parsing JSON: ", err);
    }
});

export default (req, res) => {
    res.status(200).json(sensorData);
}
