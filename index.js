const express = require ('express');
const {users} = require ("./data/users.json")   // JSON data Import

// importing routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

const app = express();

const PORT = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});


//importing routes data
app.use("/users", usersRouter);

app.use("/books", booksRouter);




app.get('*', (req,res)=> {
    res.status(500).json ({
        message: "This route does not exist",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});



// http://localhost:3000