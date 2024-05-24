
// all the imports here
import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

// all the code here
async function main() {

    // connect the server to mongodb database
    await mongoose.connect(config.dataBaseUrl as string);

    app.listen(config.port, () => {
        console.log(`app is listening on port ${config.port}`);
    });
}

// call the main function
main();