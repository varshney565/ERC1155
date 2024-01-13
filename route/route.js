const { getBalance } = require("../controller/getBalance")

module.exports = (app)=>{
    app.get("/app/api/v1/getBalance",getBalance);
}