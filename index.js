const mongoose = require("mongoose");

const db = mongoose.connect('mongodb://localhost:27017/customercli');

const Customer = require('./models/customer.schema');

const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('new customer added');
        db.close();
    });
}

const findCustomer = (name) => {
    const search = new RegExp(name, 'i');
    Customer.find({$or : [{firstName : search}, {lastName : search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        db.close();
    });
}

module.exports = {addCustomer, findCustomer};