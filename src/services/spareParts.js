const mysql = require('../config/mysql');

const sparePartsData = {
    async getSparePartsData(req,res) {
        try {
            const queryStr = 'SELECT * FROM spare_item';
            const result = await mysql.client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async getSparePartsDataById(req,res) {
        try {
            const id = req.params.id;
            const queryStr = `SELECT * FROM spare_item WHERE item_id = ${id}`;
            const result = await mysql.client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async addSparePartsData(req,res) {
        try {
            const data = req.body;
            const queryStr = `INSERT INTO spare_item SET ?`;
            const result = await mysql.client.executeDataAssync(queryStr, data);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async updateSparePartsData(req,res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const queryStr = `UPDATE spare_item SET ? WHERE item_id = ${id}`;
            const result = await mysql.client.executeDataAssync(queryStr, data);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async deleteSparePartsData(req,res) {
        try {
            const id = req.params.id;
            const queryStr = `DELETE FROM spare_item WHERE item_id = ${id}`;
            const result = await mysql.client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }
    
}

module.exports = sparePartsData;