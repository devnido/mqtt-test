const { testTopic, urlBroker } = require('./constants')

const mqtt = require('mqtt')
const client = mqtt.connect(urlBroker)

function PublishEvent() {
    client.publish(`${testTopic}/test`, `random from nodejs ${Math.floor(Math.random() * 100) + 9}`)
}

setInterval(function() { PublishEvent() }, 2000)