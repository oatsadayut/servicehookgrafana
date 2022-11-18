
const setMessage = (data) => {
    let annotations = data.annotations;
    let value = setValue(data.valueString)
    let msg = `${annotations.description} \n ${annotations.summary} \n ค่าปัจจุบัน = ${value}`
    return msg
}

const setValue = (value) => { 
    let resultArr = value.split(" ");
    let result = resultArr[3].substr(6,12)
    return result
}

module.exports = setMessage;

