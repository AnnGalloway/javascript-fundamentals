const addToBatch = (currentArray,orderNumber) => {
    if (currentArray.length >= 5) {
        return currentArray
    } else {
        return currentArray.concat(orderNumber)
    }
}

module.exports = addToBatch;
