require('dotenv').config()
const axios = require('axios');

const lineNotify = async (value) => {
    let statusCode;
    let messageCode;
    try {
        const LINE_NOTIFY_URL = process.env.LINE_URL
        const LINE_TOKEN = process.env.LINE_TOKEN
        const headers = {
            'Content-Type': `application/x-www-form-urlencoded`,
            'Authorization': `Bearer ${LINE_TOKEN}`
        }
        let msg = value;
        const send = await axios.post(LINE_NOTIFY_URL, {
            message: msg
        }, {
            headers: headers
        })
        statusCode = send.status
    } catch (error) {
        statusCode = error.response.data.status
        messageCode = error.response.data.message
    }
    return { statusCode, messageCode }
}

module.exports = lineNotify;