const { client } = require('../config/mysql');

const customerData = {
    async getCustomerData(req,res) {
        try {
            const queryStr = 'SELECT * FROM customer';
            const result = await client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async getCustomerDataById(req,res) {
        try {
            const id = req.params.id;
            const queryStr = `SELECT * FROM customer WHERE customer_id = ${id}`;
            const result = await client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async addCutomerData(req,res) {
        try {
            const data = req.body;
            const queryStr = `INSERT INTO customer SET ?`;
            const result = await client.executeDataAssync(queryStr, data);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async updateCustomerData(req,res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const queryStr = `UPDATE customer SET ? WHERE customer_id = ${id}`;
            const result = await client.executeDataAssync(queryStr, data);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async deleteCustomerData(req,res) {
        try {
            const id = req.params.id;
            const queryStr = `DELETE FROM customer WHERE customer_id = ${id}`;
            const result = await client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }

}

module.exports = customerData;


