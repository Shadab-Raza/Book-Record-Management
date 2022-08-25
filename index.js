const express = require ('express');

const app = express();

const PORT = 3000;

app.use(express.json());

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

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});



// http://localhost:3000