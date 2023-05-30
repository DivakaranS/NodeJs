const Reminders = require('../models/reminders');
const {
    Op
} = require('sequelize');

async function setup(newData) {
    let data = await Reminders.create(newData);
    return data.toJSON();
}

async function getData(obj) {
    let userData;
    if (typeof obj == 'object') {
        if (obj.user == undefined && obj.after == undefined) {
            userData = await Reminders.findAll();;
        } else if (obj.user != undefined && obj.after == undefined) {
            userData = await Reminders.findAll({
                where: {
                    user: {
                        [Op.eq]: obj.user
                    }
                }
            });
        } else if (obj.after != undefined && obj.user == undefined) {
            userData = await Reminders.findAll({
                where: {
                    date: {
                        [Op.gte]: new Date(parseInt(obj.after))
                    }
                }
            });
        } else {
            userData = await Reminders.findAll({
                where: {
                    user: {
                        [Op.eq]: obj.user
                    },
                    date: {
                        [Op.gte]: new Date(parseInt(obj.after))
                    }
                }
            });
        }
    } else {
        userData = await Reminders.findByPk(parseInt(obj));
        // userData = await Reminders.findAll({
        //     where: {
        //         id: {
        //             [Op.eq]: parseInt(obj)
        //         }
        //     }
        // });

    }
    // return userData.filter(user => {
    //     // if (obj.user != undefined) {
    //         if (Number(obj.user) === user.dataValues.user) {
    //             return user;
    //         }

    // })
    return userData;
}

async function putData(id, updateData) {
    await Reminders.update(updateData, {
        where: {
            id: {
                [Op.eq]: id
            }
        }
    });
    // let data = await Reminders.findAll();;
    // console.log(data)
    // return updateData.toJSON();
}
async function patchData(id, modifyData) {
    await Reminders.update(modifyData, {
        where: {
            id: {
                [Op.eq]: id
            }
        }
    });
    // let data = await Reminders.findAll();;
    // return data.toJSON();
}
async function deleteData(deleteId) {
    await Reminders.destroy({
        where: {
            id: {
                [Op.eq]: deleteId
            }
        }
    });
    // let data = await Reminders.findAll();;
    // console.log(data);
    // return data.toJSON();
}



module.exports = {
    setup,
    getData,
    putData,
    patchData,
    deleteData
}

// beforeEach(async() => {
//     await Reminders.sync();
// })

// afterEach(async() => {
//     await Reminders.drop();
// });