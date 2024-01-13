export const HOST = "localhost";
export const USER = "root";
export const PASSWORD = "0000";
export const dialect = "mysql";
export const DB = "ecommerce_db";
export const pool = {
    min: 0,
    max: 5, //maximum connection possible at any time(at peak time).
    acquire: 30000, //maximum time client has to wait before aborting a connection.
    idle: 1000
};