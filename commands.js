#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer')

const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
} = require('./index');

const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer phone number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email'
    }
]

program.version('1.0.0').description('Client Management System');

program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => {
            addCustomer(answers)
        })
    });

program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action((name) => {
        findCustomer(name);
    });

program
    .command('update <_id>')
    .alias('u')
    .description('update a customer')
    .action((_id) => {
        prompt(questions).then(answers => {
            updateCustomer(_id, answers)
        })
    });

program
    .command('remove')
    .alias('r')
    .description('remove a customer')
    .action((_id) => {
        removeCustomer(_id);
    });

program
    .command('list')
    .alias('l')
    .description('List all coustomers')
    .action(() => {
        listCustomers();
    });

program.parse(process.argv);
