function ping() {

    let pingTime = new Date();
    pingTime.setSeconds(pingTime.getSeconds() - 3);
    const pingms = pingTime.getUTCSeconds();

    return pingms

}

module.exports = ping