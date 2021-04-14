const Sequelize = require("sequelize");
const config = require("../config/database");
const db = new Sequelize(config);


async function getDoctors() {
  const result = await db.query("select * from doctor;", { type: Sequelize.QueryTypes.SELECT });
  return result;
}
async function getDoctorById(id) {
  const result = await db.query("select * from doctor where id = :doctorId", {
    type: Sequelize.QueryTypes.SELECT,
    replacements: {
      doctorId: id
    }
  });

  return result[0];
}

async function insertDoctor(doctor) {
  await db.query("insert into doctor (name, document, crm) values (:name, :document, :crm)", {
    replacements: {
      name: doctor.name,
      document: doctor.document,
      crm: doctor.crm
    }
  })
}

// update doctor set name = 'Laura Costa', document = '456.039', crm = '99878123' where id = '1234'
async function updateDoctor(doctor) {
  await db.query("update doctor set name = :name, document = :document, crm = :crm where id = :id", {
    replacements: {
      name: doctor.name,
      document: doctor.document,
      crm: doctor.crm,
      id: doctor.id
    }
  })
}

async function removeDoctor(doctorId) {
  await db.query("delete from doctor where id = :id", {
    replacements: {
      id: doctorId
    }
  })
}

module.exports = {
  getDoctors: getDoctors,
  insertDoctor: insertDoctor,
  updateDoctor: updateDoctor,
  removeDoctor: removeDoctor,
  getDoctorById: getDoctorById,
};