const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const User = new Schema({
    email: {
        type: String,
        required: [true, 'Поле Email обязательно для заполнения.'],
        unique: true,
        trim: true,
        minlength: [7, 'Адрес электронный почты слишком короткий.'],
        maxlength: [256, 'Адрес электронный почты слишком длинный.'],
        match: [/^[a-zA-Z0-9'._%+-]+@[a-zA-Z0-9-][a-zA-Z0-9.-]*\.[a-zA-Z]{2,63}$/, 'Неверный формат адреса электронной почты.']
    },
    password: { type: String, required: true },
    role: { type: String, default: 'user', enum: ['user', 'admin', 'developer'] },
    photo: String,
    username: { type: String, unique: true, sparse: true },
    organization: String,
    phoneNumber: Number

}, {
    timestamp: true
});

User.virtual('isAdmin').get(function() {
    return this.role === 'admin';
});

User.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) return next();
    
        let hash = await bcrypt.hash(this.password, 10)
        this.password = hash;
        next();
    } catch (error) {
        next(error)
    }
});

User.post('save', function(error, user, next) {
    if (error.name === 'MongoError' && error.code ===11000) {
        next(new Error('Имя пользователя или адрес электронной почты заняты.'));
    } else {
        next(error);
    }
});

User.statics.authenticate = function(email, password) {
    return this.findOne({ email })
        .then(user => {
            if (!user) {
                let error = new Error('Пользователь не найден');
                error.status = 401;
                throw error;
            }

            return bcrypt.compare(password, user.password)
                .then(isEqual => {
                    if (!isEqual) {
                        let error = new Error('Неверный пароль');
                        error.status = 401;
                        throw error;
                    }

                    return user;
                });
        });
};

User.methods.isCorrectPassword = function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', User);