require('dotenv').config()
const axios = require('axios');
const setMessage = require('./message');

let stCode;
let mesCode;

const sendLine = async (data) => { 
    for (let d of data.alerts) {
        let message = await setMessage(d)
        await lineNotify(message) 
    }
    return {stCode, mesCode}
}

const lineNotify = async (msg) => {
    try {
        const LINE_NOTIFY_URL = process.env.LINE_URL
        const LINE_TOKEN = process.env.LINE_TOKEN
        const headers = {
            'Content-Type': `application/x-www-form-urlencoded`,
            'Authorization': `Bearer ${LINE_TOKEN}`
        }
        const send = await axios.post(LINE_NOTIFY_URL, {
            message: msg
        }, {
            headers: headers
        })
        stCode = send.status
    } catch (error) {
        stCode = error.response.data.status
        mesCode = error.response.data.message
    }
}

module.exports = sendLine;