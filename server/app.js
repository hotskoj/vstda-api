const express = require('express');
const morgan = require('morgan');

const app = express();

let todoItems = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

app.get('/',(req, res) => {
    res.status(200).json();
});

app.get('/api/TodoItems',(req, res) => {
    res.json(todoItems);
});

app.get('/api/TodoItems/:number',(req, res) => {
    let num = parseInt(req.params.number);
    if (todoItems.find((element) => element.todoItemId === num)) {
        res.json(todoItems.find((element) => element.todoItemId === num));
    } else {
        res.status(404).send('Item does not exist');
    }
});

app.post('/api/TodoItems',(req, res) => {
    let newItem = {
        todoItemId: 0,
        name: 'a new item',
        priority: 1,
        completed: false
    }
    todoItems.push(newItem);
    res.status(201).json(newItem);
});

app.delete('/api/TodoItems/:number',(req, res) => {
    let num = parseInt(req.params.number);
    if (todoItems.find((element) => element.todoItemId === num)) {
        res.json(todoItems.find((element) => element.todoItemId === num));
        todoItems = todoItems.filter(element => element.todoItemId !== num);
    } else {
        res.status(404).send('Item does not exist');
    }
});

module.exports = app;
