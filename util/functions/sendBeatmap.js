function convertToReadableTime(s) {
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;

    const result = `${padNumber(minutes, 2)}:${padNumber(seconds, 2)}`;
    return result;
}

function padNumber(num, digits) {
    return num.toString().padStart(digits, '0');
}

function sendBeatmap(client, map, username) {
    if (!map) return false;
    if (!client) return false;
    if (client.isDisconnected()) return false;
    const link = `https://osu.ppy.sh/b/${map.id}`;
    const song = `${map.artist} - ${map.title}`;
    const star = parseFloat(map.difficulty.rating).toFixed(2);
    const length = convertToReadableTime(map.length.total);
    return client.getSelf().sendMessage(`[${link} ${song} [${map.version}]] mapped by: ${map.creator} (${map.approvalStatus}) | ☆${star} ⌛${length} ${map.bpm}BPM | Sent by ${username}`).catch(console.error);
}

module.exports = {convertToReadableTime, padNumber, sendBeatmap}