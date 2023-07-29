const {Sequelize,DataTypes} = require("sequelize");


const sequelize = new Sequelize('postgres', 'postgres', 'shiv261020', {
    host: 'localhost',
    dialect:'postgres'
  });

  sequelize.authenticate()
  .then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log("Error : ",err.message);
});

const db = {};
      db.Sequelize = Sequelize;
      db.sequelize = sequelize;
      db.gig = require("./modelgig")(sequelize,DataTypes);
      const queryInterface = sequelize.getQueryInterface();



module.exports = db;
