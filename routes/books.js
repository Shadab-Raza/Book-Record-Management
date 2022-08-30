const express = require('express');
const {books} = require("../data/books.json")
const {users} = require("../data/users.json")

const router = express.Router();


/**
 * Route No- 1
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameters: none
*/
router.get('/', (req,res) => {
    res.status(200).json({
        success: true,
        data: books,
    });
});

module.exports = router;



/**
 *  Route No- 2
 * Route: /books/:id
 * Method: GET
 * Description: Get book by id
 * Access: Public
 * Parameters: id
*/
router.get("/:id", (req, res) => {
    const {id} = req.params;

    const book = books.find((each) => each.id === id);

    if(!book) 
        return res.status(404).json({
            success: false,
            message: "Book not found",
        });

    return res.status(200).json({
        success: true,
        data: book,
    });

});



/**
 *  Route No- 3
 * Route: /books/issued/by-user
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parameters: none
*/
router.get("/issued/by-user", (req,res) => {
    const usersWithIssuedBooks = users.filter((each) =>{
        if(each.issuedBook) return each;
    });
    const issuedBooks = [];

    usersWithIssuedBooks.forEach((each) => {
        const book = books.find((book) => book.id === each.issuedBook);

        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnData = each.returnDate;

        issuedBooks.push(book);
    });

    if(issuedBooks.length === 0){
        return res.status(404).json({
            success: false,
            message: "No books issued yet",
        });
    }

    return res.status(200).json({
        success: true,
        data: issuedBooks,
    })
});
