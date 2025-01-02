const mysql = require('../config/mysql');

const invoiceData = {
    async getInvoiceData(req,res) {
        try {
            const queryStr = 'SELECT * FROM invoice';
            const result = await mysql.client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async getInvoiceDataByCustomerId(req,res) {
        try {
            const id = req.params.id;
            const queryStr = `SELECT * FROM invoice WHERE customer_id = ${id}`;
            const result = await mysql.client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async getInvoiceDataByDate(req,res) {
        try {
            const date = req.params.date;
            const queryStr = `SELECT * FROM invoice WHERE invoice_date = ${date}`;
            const result = await mysql.client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async addInvoiceData(req,res) {
        try {
            const data = req.body;
            const queryStr = `INSERT INTO invoice SET ?`;
            const result = await mysql.client.executeDataAssync(queryStr, data);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async updateInvoiceData(req,res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const queryStr = `UPDATE invoice SET ? WHERE invoice_id = ${id}`;
            const result = await mysql.client.executeDataAssync(queryStr, data);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async deleteInvoiceData(req,res) {
        try {
            const id = req.params.id;
            const queryStr = `DELETE FROM invoice WHERE invoice_id = ${id}`;
            const result = await mysql.client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }

}

module.exports = invoiceData;