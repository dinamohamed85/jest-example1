function theSum(...numbers) {
    return numbers.reduce((prvV, curV) => prvV + curV, 0);
}

module.exports = theSum