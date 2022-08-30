const { Router } = require("express");
const express = require("express");
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

router.get('/', (req,res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});


/**
 *  Route No- 2
 * Route: /users/:id
 * Method: GET
 * Description: Get single user by id
 * Access: Public
 * Parameters: id
*/

router.get("/:id", (req,res) =>{
    const {id} = req.params;
    const user = users.find((each) => each.id === id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }
    return res.status(200).json({
        success: true,
        data: user,
    });
});


/**
 *  Route No- 3
 * Route: /users
 * Method: POST
 * Description: Create new user
 * Access: Public
 * Parameters: none
*/

router.post("/", (req,res) => {
    const {id, name, surname, email, subscriptionType, subscriptionDate} = req.body;
    const user = users.find((each) => each.id === id);

    if(user){
        return res.status(404).json({
            success: false,
            message: "User exists with this id"
        })
    }

    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
    });
    return res.status(201).json({
        success: true,
        data: users,
    });
});


/**
 *  Route No- 4
 * Route: /users/:id
 * Method: PUT
 * Description: Updating user data
 * Access: Public
 * Parameters: id
*/

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {data} = req.body;

    const user = users.find((each) => each.id === id);

    if(!user) 
        return res.status(404).json({
            success: false,
            message: "User not found"
        });

    const updateUser = users.map((each) => {
        if(each.id === id){
           return {
            ...each,
            ...data,
           }; 
        }
        return each;
    });

    return res.status(200).json({
        success: true,
        data: updateUser,
    })
});


/**
 *  Route No- 5
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user by id
 * Access: Public
 * Parameters: id
*/

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const user = users.find((each) => each.id === id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: "User to be deleted was not found",
        });
    }

    const index = users.indexOf(user);
    users.splice(index, 1);

    return res.status(202).json({
        success: true,
        data: users,
    });
});


// Routes or APIS for project ends here



// default export
module.exports = router;