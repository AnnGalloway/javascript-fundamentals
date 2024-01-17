const sweets = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
    ];

const lessThanPrice = (sweet, maxPrice) => {
    if (sweet.price < maxPrice) {
        return true;
    } else {
        return false;
    }
}

const getName = (sweet) => {
    return sweet.name;
}

const searchSweets = (chars,maxPrice) => {
    let priceFiltered = sweets.filter((sweet) => 
    sweet.price < maxPrice);
    let charMatch = priceFiltered.filter((sweet) =>
    sweet.name.slice(0,chars.length).toLowerCase() === chars.toLowerCase()) 
    return charMatch.map(getName);
}

module.exports = searchSweets;