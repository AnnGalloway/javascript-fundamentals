const names = ['Anna', 'Lil', 'Charlie', 'Mary', 'Jo'];

const isShorterThanThree = (name) => {
    if (name.length < 3) {
        return true;
    } else {
        return false;
    }
}

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);
console.log(namesShorterThanThreeLetters);

const getUppercased = (name) => {
    return name.toUpperCase();
}

const uppercasedNames = names.map(getUppercased);
console.log(uppercasedNames);