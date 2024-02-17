class Book {
    constructor (title, author, available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

const library = {
    books: [],

    addBook: function(title, author){
        const book = new Book(title, author);
        this.books.push(book);
        console.log(`Added "${book.title}" by ${book.author} to the library.
        There are now ${this.books.length} books in the library's database.`);


    }
}