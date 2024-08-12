// date format function
const dateFormat = (date) => {
    return new Date(date).toLocaleDateString();
}

module.exports = dateFormat;