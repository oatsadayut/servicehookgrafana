const express = require('express');
const sendLine = require('../utils/line');
const router = express.Router();

router.post('/grafana/service', async (req, res) => {
    let data = req.body
    let result = await sendLine(data)
    if (result.stCode === 200) {
        res.status(200).json({
            msg: 'Send Success',
            status: result.stCode
        });
    } else {
        res.status(result.stCode).json({
            msg: result.mesCode,
            status: result.stCode,
        });
    }
});

module.exports = router;
