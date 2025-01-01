const mysql = require('mysql');

const dbConn={
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'garage_app'
}

const pool = mysql.createPool(dbConn);

const getConnectionAssync = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            return resolve(connection);
        });
    });
}
const queryCallback = (sqlQuery,callback) => {
    pool.getConnection((err,conn)=>{
        if(err){
            return callback(err);
        }
        conn.query(sqlQuery,(err,result)=>{
            conn.release();
            if(err){
                return callback(err);
            }
            return callback(null,result);
        });
    })

}

const queryDataCallback = (sqlQuery,data,callback) => {
    pool.getConnection((err,conn)=>{
        if(err){
            return callback(err);
        }
        conn.query(sqlQuery,data,(err,result)=>{
            conn.release();
            if(err){
                return callback(err);
            }
            return callback(null,result);
        });
    })

}

const  queryAsync = (conn,sqlQuery) => {
    return new Promise((resolve,reject)=>{
        conn.query(sqlQuery,(err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
    })
}

const queryDataAsync = (conn,sqlQuery,data)=>{
    return new Promise((resolve,reject)=>{
        conn.query(sqlQuery,data,(err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        });
    })
}

exports.client = {
    executeCallback(sqlQuery, callback) {
        queryCallback(sqlQuery,callback);
    },
    executeCallbackData(sqlQuery,data,callback){
        queryDataCallback(sqlQuery,data,callback);
    },
    async executeAssync(sqlQuery){
        try {
            const conn = await getConnectionAssync();
            const result = await queryAsync(conn,sqlQuery);
            conn.release();
            return result;
        } catch (error) {
            return error;
        }
    },
    async executeDataAssync(sqlQuery,data){
        try {
            const conn = await getConnectionAssync();
            const result = await queryDataAsync(conn,sqlQuery,data);
            conn.release();
            return result;
        } catch (error) {
            return error;
        }
    }
}
