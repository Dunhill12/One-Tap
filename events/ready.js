module.exports = (client) => {
    console.log(`Connecté en tant que: ${client.user.tag}`);
    client.user.setStatus(`v!help`)
    console.log('---------------------------------------------');
}