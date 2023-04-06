const app = require('./app');


// getting started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    //await mongoose.connect('mongodb://127.0.0.1:27017/test');
    await mongoose.connect('mongodb+srv://ejl1996:7JsqtJEDPGCTU7HY@cluster0.t7zttsp.mongodb.net/?retryWrites=true&w=majority');

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

}