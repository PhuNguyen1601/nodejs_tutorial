const mongoose = require('mongoose');
async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://127.0.0.1:27017/fuka_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (e) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
