const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Skapa user Schema & model
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Skriv in en mail']
    },
    password: {
        type: String,
        required: [true, 'Skriv in ett lösenord']
    },
    access: {
        type: [String],
        default: []
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;