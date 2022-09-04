const express = require('express');
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");
const { getAllBooks, getSingleBookById, getSingleBookByName, getAllIssuedBooks, addNewBook, updateBookByID } = require('../controllers/book-controller');
const {UserModel, BookModel} = require("../models"); 


const router = express.Router();


/**
 * Route No- 1
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameters: none
*/
router.get('/', getAllBooks);



/**
 *  Route No- 2
 * Route: /books/:id
 * Method: GET
 * Description: Get book by id
 * Access: Public
 * Parameters: id
*/
router.get("/:id", getSingleBookById);



// Additional route
router.get("/getbook/name/:name", getSingleBookByName);



/**
 *  Route No- 3
 * Route: /books/issued/by-user
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parameters: none
*/
router.get("/issued/by-user", getAllIssuedBooks);



/**
 *  Route No- 4
 * Route: /books
 * Method: POST
 * Description: Create new book
 * Access: Public
 * Parameters: none
 * Data: author, name, genre, price, publisher, id
*/
router.post("/", addNewBook);



/**
 *  Route No- 5
 * Route: /books/:id
 * Method: PUT
 * Description: Update book
 * Access: Public
 * Parameters:id
 * Data: author, name, genre, price, publisher, id
*/
router.put("/:id", updateBookByID);


// default export
module.exports = router;