const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/user');
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    email: 'admin@gmail.com',
    name: 'admin',
    password: '12345678',
    age: 27,
    tokens: [
        {
            token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
        },
    ],
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id: userTwoId,
    email: 'adminTask@gmail.com',
    name: 'adminTask',
    password: '87654321',
    age: 27,
    tokens: [
        {
            token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
        },
    ],
};
const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First task in test',
    completed: false,
    owner: userOne._id

}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second task in test',
    completed: true,
    owner: userOne._id

}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third task in test',
    completed: true,
    owner: userTwo._id

}

const setupDatabase = async () => {
    await User.deleteMany({});
    await Task.deleteMany({});

    await new User(userOne).save();
    await new User(userTwo).save();

    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();



};

module.exports = {
    userOneId,
    userOne,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase,
};



//TODO 
//
// User Test Ideas
//
// Should not signup user with invalid name/email/password
// Should not update user if unauthenticated
// Should not update user with invalid name/email/password
// Should not delete user if unauthenticated

//
// Task Test Ideas
//
// Should not create task with invalid description/completed
// Should not update task with invalid description/completed
// Should delete user task
// Should not delete task if unauthenticated
// Should not update other users task
// Should fetch user task by id
// Should not fetch user task by id if unauthenticated
// Should not fetch other users task by id
// Should fetch only completed tasks
// Should fetch only incomplete tasks
// Should sort tasks by description/completed/createdAt/updatedAt
// Should fetch page of tasks