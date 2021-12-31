const { testTopic, urlBroker } = require('./constants')

const mqtt = require('mqtt')
const client = mqtt.connect(urlBroker)

function ConnectEvent() {
    client.subscribe(`${testTopic}/#`, function(err) {
        if (!err) {
            client.publish(`${testTopic}/test`, 'Hello MQTT!')
        }
    })
}

function MessageEvent(topic, message) {
    console.log(topic, message.toString())
}

client.on('connect', ConnectEvent)
client.on('message', MessageEvent)