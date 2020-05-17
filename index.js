const express = require('express'); 
const path = require('path');
const recipes = require('./recipes.json');
// console.log(recipes);
const app = express();

// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set statis folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/all', (req, res) => {
    res.json(recipes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));