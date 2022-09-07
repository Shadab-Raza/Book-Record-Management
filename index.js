const express = require ('express');
const dotenv = require ('dotenv')
const {users} = require ("./data/users.json")   // JSON data Import
const mongoose = require('mongoose');
// importing routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");


const app = express();
app.use(express.json());



// importing MongoDB
mongoose.connect("mongodb+srv://shadab_1928:shadab_1928@cluster0.zb6nc0e.mongodb.net/Book_Record_Management?retryWrites=true&w=majority", {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDb is connected'))
  .catch((err) => console.log(err));





//importing routes data
app.use("/users", usersRouter);

app.use("/books", booksRouter);





app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});


app.get('*', (req,res)=> {
    res.status(500).json ({
        message: "This route does not exist",
    });
});


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000));
  });



// http://localhost:3000