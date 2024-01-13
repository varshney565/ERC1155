export default (sequelize,Sequelize)=>{
    const transaction = sequelize.define("transaction",{
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        from : {
            type : Sequelize.STRING,
            allowNull : false
        },
        to : {
            type : Sequelize.STRING,
            allowNull : false
        },
        balance : {
            type : Sequelize.INTEGER,
            allowNull : false,
        }
    }); 
    return transaction;
}