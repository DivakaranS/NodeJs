const {
    Sequelize,
    Model,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
});
(async() => {
    await sequelize.sync({
        force: true
    })
// await jane.save();
const sid = await User.create({name : "Sid"});
console.log(typeof sid.toJSON());
console.log(typeof JSON.stringify(sid,null,4))

})();

const jane = User.build({
    name: "Jane"
});
console.log(jane instanceof User);
console.log(jane.name);


