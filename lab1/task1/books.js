const books = [
  {
    isbn: "978-0061120084",
    name: "To Kill a Mockingbird",
    category: "Classic",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop",
    pages: 49,
    author: "Harper Lee",
    price: 12.99
  },
  {
    isbn: "978-0451524935",
    name: "1984",
    category: "Dystopian",
    image: "https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?auto=compress&cs=tinysrgb&w=500",
    pages: 328,
    author: "George Orwell",
    price: 9.99
  },
{
    isbn: "978-0743273565",
    name: "The Great Gatsby",
    category: "Classic",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop",
    pages: 180,
    author: "F. Scott Fitzgerald",
    price: 10.50
  },
  {
    isbn: "978-0307474278",
    name: "The Da Vinci Code",
    category: "Mystery",
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=500",
    pages: 36,
    author: "Dan Brown",
    price: 14.95
  },
  {
    isbn: "978-0439023481",
    name: "The Hunger Games",
    category: "Young Adult",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop",
    pages: 374,
    author: "Suzanne Collins",
    price: 11.99
  },
  {
    isbn: "978-0553418026",
    name: "The Martian",
    category: "Science Fiction",
    image: "https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg?auto=compress&cs=tinysrgb&w=500",
    pages: 369,
    author: "Andy Weir",
    price: 15.00
  },
  {
    isbn: "978-0743477109",
    name: "The Alchemist",
    category: "Fantasy",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop",
    pages: 208,
    author: "Paulo Coelho",
    price: 13.75
  },
  {
    isbn: "978-0316769488",
    name: "The Catcher in the Rye",
    category: "Literary Fiction",
    image: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=500",
    pages: 277,
    author: "J.D. Salinger",
    price: 8.99
  },
  {
    isbn: "978-0062315007",
    name: "The Alchemist",
    category: "Fantasy",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&auto=format&fit=crop",
    pages: 18,
    author: "Paulo Coelho",
    price: 12.49
  },
  {
    isbn: "978-0547928227",
    name: "The Hobbit",
    category: "Fantasy",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500",
    pages: 310,
    author: "J.R.R. Tolkien",
    price: 14.99
  },
  {
    isbn: "978-0747532743",
    name: "Harry Potter and the Philosopher's Stone",
    category: "Fantasy",
    image: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?w=500&auto=format&fit=crop",
    pages: 223,
    author: "J.K. Rowling",
    price: 16.50
  },
  {
    isbn: "978-0061120085",
    name: "To Kill a Mockingbird (Special Edition)",
    category: "Classic",
    image: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=500",
    pages: 376,
    author: "Harper Lee",
    price: 15.99
  },
  {
    isbn: "978-0385472579",
    name: "Things Fall Apart",
    category: "Literary Fiction",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop",
    pages: 209,
    author: "Chinua Achebe",
    price: 10.25
  },
  {
    isbn: "978-0141187761",
    name: "Animal Farm",
    category: "Dystopian",
    image: "https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?auto=compress&cs=tinysrgb&w=500",
    pages: 25,
    author: "George Orwell",
    price: 7.99
  },
  {
    isbn: "978-0060850524",
    name: "Brave New World",
    category: "Dystopian",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop",
    pages: 288,
    author: "Aldous Huxley",
    price: 11.25
  },
  {
    isbn: "978-0743477108",
    name: "The Little Prince",
    category: "Children's",
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=500",
    pages: 96,
    author: "Antoine de Saint-Exupéry",
    price: 9.50
  },
  {
    isbn: "978-0064404990",
    name: "Charlotte's Web",
    category: "Children's",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop",
    pages: 36,
    author: "E.B. White",
    price: 8.25
  },
  {
    isbn: "978-0141439518",
    name: "Pride and Prejudice",
    category: "Classic",
    image: "https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg?auto=compress&cs=tinysrgb&w=500",
    pages: 279,
    author: "Jane Austen",
    price: 7.50
  },
  {
    isbn: "978-0553213110",
    name: "Sherlock Holmes: A Study in Scarlet",
    category: "Mystery",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop",
    pages: 41,
    author: "Arthur Conan Doyle",
    price: 6.99
  },
  {
    isbn: "978-0062073488",
    name: "The Secret Garden",
    category: "Children's",
    image: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=500",
    pages: 331,
    author: "Frances Hodgson Burnett",
    price: 9.99
  }
];