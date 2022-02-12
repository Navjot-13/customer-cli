const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/customercli');

const Customer = require('./models/customer.schema');

const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('new customer added');
        // db.close();
    });
}

const findCustomer = (name) => {
    const search = new RegExp(name, 'i');
    Customer.find({$or : [{firstName : search}, {lastName : search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches found`);
        // db.close();
    });
}

const updateCustomer = (_id, customer) => {
    Customer.updateOne({ _id }, customer)
        .then(customer => {
            console.info('customer updated');
            // db.close()
        })
}

const removeCustomer = (_id) => {
    Customer.remove({ _id })
        .then(customer => {
            console.info('customer removed');
            // db.close()
        })
}

const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} customers`);
            // db.close()
        })
}

module.exports = {
    addCustomer, 
    findCustomer, 
    updateCustomer, 
    removeCustomer, 
    listCustomers
};