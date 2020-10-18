const format = (language, hello) => {
    console.log(`Hello is "${hello}" in ${language}.`);
};
const english = () => {
    return format('english', 'Hello');
};
const spanish = () => {
    return format('spanish', 'Hola');
};
const french = () => {
    return format('french', 'Bonjour');
};
const german = () => {
    return format('german', 'Guten Tag');
};
module.exports = {
    english,
    spanish,
    french,
    german,
};