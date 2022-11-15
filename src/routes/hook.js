const express = require('express');
const lineNotify = require('../utils/line');
const router = express.Router();

const setValue = (value) => {
    let newArr = [];
    for (let d of value) { 
        newArr.push(d.valueString)
    }
    return newArr
}

router.post('/grafana/service', async (req, res) => {
    let data = req.body.alerts
    let result = await setValue(data)
    let line = await lineNotify(result)
    if (line.statusCode === 200) {
        res.status(200).json({
            msg: 'Send Success',
            status: line.statusCode
        });
    } else { 
        res.status(line.statusCode).json({
            msg: line.messageCode,
            status: line.statusCode,
        });
    }
});

module.exports = router;
