// const { Router } = require("express");  delete if not get error
const express = require("express");
const { getAllUsers, getSingleUserById, deleteUser, updateUserById, createNewUser, getSubscriptionDetailsById } = require("../controllers/user-controller");
const {users} = require('../data/users.json');    // JSON data Import

const router = express.Router();


// Routes or APIS for project started from here

/**
 *  Route No- 1
 * Route: /users
 * Method: GET
 * Description: Get all user
 * Access: Public
 * Parameters: none
*/
router.get('/', getAllUsers);



/**
 *  Route No- 2
 * Route: /users/:id
 * Method: GET
 * Description: Get single user by id
 * Access: Public
 * Parameters: id
*/
router.get("/:id", getSingleUserById);



/**
 *  Route No- 3
 * Route: /users
 * Method: POST
 * Description: Create new user
 * Access: Public
 * Parameters: none
*/
router.post("/", createNewUser);



/**
 *  Route No- 4
 * Route: /users/:id
 * Method: PUT
 * Description: Updating user data
 * Access: Public
 * Parameters: id
*/
router.put('/:id', updateUserById);



/**
 *  Route No- 5
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user by id
 * Access: Public
 * Parameters: id
*/
router.delete('/:id', deleteUser);



/**
 *  Route No- 6
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details
 * Access: Public
 * Parameters: id
*/
router.get('/subscription-details/:id', getSubscriptionDetailsById);



// default export
module.exports = router;