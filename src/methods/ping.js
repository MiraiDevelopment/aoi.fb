async function ping() {

    let timeId = 0

    try {
      this.ws.ping();
      this.timoutId = setTimeout(() => {
        this.ping();
      }, this.pingInterval);
      let result = this.pingInterval()
    }
    catch (err) {
      const error = new SDKError(`Error on WS ping: ${err.message}`, null, err);
      this.emit('error', error);
    }

    return typeof result !== undefined;
    
}

module.exports = ping