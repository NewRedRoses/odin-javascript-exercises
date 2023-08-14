const getTheTitles = function(books) {
    let bookTitles = [];
    books.forEach(element => {
        bookTitles.push(element.title)
    })   
    return bookTitles;
};
// Do not edit below this line
module.exports = getTheTitles;
