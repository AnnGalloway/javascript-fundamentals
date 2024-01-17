const notifyByEmail = (email) => {
    return `Email sent to: ${email}`
};

const notifyByText = (number) => {
    return `Text sent to: ${number}`
};

const notify = (contact,howToNotify) => {
    return howToNotify(contact)
};

console.log(notify('hello@makers.tech.test',notifyByEmail));
console.log(notify('+10000000', notifyByText));