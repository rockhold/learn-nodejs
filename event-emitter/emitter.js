// ...using a function constructor
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    // If the type property doesn't yet exist, assign it to an empty array and then add the listener for this event
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
};

module.exports = Emitter;