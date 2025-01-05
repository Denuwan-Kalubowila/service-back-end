const mysql = require('../config/mysql');

const stockData = {
    async getStockData(req,res) {
        try {
            const queryStr = 'SELECT si.item_id,si.name AS item_name,COALESCE(SUM(sm.quantity), 0) AS current_stock FROM spare_item si LEFT JOIN stock_movement sm ON si.item_id = sm.item_id GROUP BY si.item_id';
            const result = await mysql.client.executeAssync(queryStr);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async addToStock(req,res) {
        try {
            const data = req.body;
            const queryStr = `INSERT INTO stock_movement SET ?`;
            const result = await mysql.client.executeDataAssync(queryStr, data);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    async removeFromStock(req,res) {
        try {
            const data = req.body;
            const queryStr = `INSERT INTO stock_movement SET ?`;
            const result = await mysql.client.executeDataAssync(queryStr, data);
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    
}

module.exports = stockData;