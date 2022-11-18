
const setMessage = (data) => {
    let annotations = data.annotations;
    let value = setValue(data.valueString)
    let metric = setMetric(data.valueString)
    let msg = `${metric} \n ${annotations.description} \n ${annotations.summary} \n ค่าปัจจุบัน = ${value}`
    return msg
}

const setValue = (value) => { 
    let resultArr = value.split("'");
    let resultArrValue = resultArr[4].split(" ")
    let resultValue = resultArrValue[2].substr(6,12) //value
    return resultValue
}

const setMetric = (value) => { 
    let resultArr = value.split("'")
    let metric = resultArr[3]
    return metric
}

module.exports = setMessage;

