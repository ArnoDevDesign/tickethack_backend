const mongoose = require('mongoose');

const connectionString =
'mongodb+srv://arnaudbaret:P45Smongodbnono@arno.7psun.mongodb.net/<nomdelaBDD>';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))
 .catch(error => console.error(error));