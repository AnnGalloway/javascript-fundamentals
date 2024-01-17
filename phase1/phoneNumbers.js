const checkLength = (phoneNumber) => {
    if (phoneNumber.length < 11) {
        return true;
    } else {
        return false;
    }
}

const filterLongNumbers = (phoneNumbers) => {
    return phoneNumbers.filter(checkLength);
}

module.exports = filterLongNumbers;