var events = (function() {
    var topics = {}
    return {
        subscribe: function(topic, handler) {
            if (!topics.hasOwnProperty(topic)) {
                topics[topic] = []
            }
            topics[topic].push(hanlder)
        },
        publish: function(topic, info) {
            if (topics.hasOwnProperty(topic)) {
                topics[topic].forEach(function(handler) {
                    handler(info)
                })
            }
        }
    }
})