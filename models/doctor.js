const Sequelize = require('sequelize');
const config = require("../config/database");

const db = new Sequelize(config);

let doctors = [
  {
    id: "1",
    name: "Vitor José",
    crm: "SP-3030",
    document: "456.038.444.8",
  },
  {
    id: "2",
    name: "Carlos Sanchez Costa",
    crm: "SP-3031",
    document: "456.038.456.9",
  },
  {
    id: "3",
    name: "Marcela Costa",
    crm: "SP-3032",
    document: "456.038.202.5",
  },
];

async function getDoctors() {
  const result = await db.query('SELECT * FROM doctor;', { type: Sequelize.QueryTypes.SELECT })
  //console.log(result)
  return result;
}

async function getDoctorById(doctorId) {
  const index = await db.query(`SELECT * FROM doctor WHERE id = ${doctorId} ;`, { type: Sequelize.QueryTypes.SELECT })
  return index;
}

async function insertDoctor(doctor) {
  await db.query("INSERT INTO doctor (name, document, crm) VALUES (:name, :document, :crm)", {
    replacements: {
      name: doctor.name,
      document: doctor.document,
      crm: doctor.crm
    }
  })
}

async function updateDoctor(doctor) {
  await db.query("UPDATE doctor SET name = :name, document = :document, crm = :crm where id = :id", {
    replacements: {
      name: doctor.name,
      document: doctor.document,
      crm: doctor.crm,
      id: doctor.id
    }
  })
}

async function removeDoctor(doctorId) {
  await db.query(`DELETE FROM doctor WHERE id = ${doctorId};`, { type: Sequelize.QueryTypes.DELETE });
}

module.exports = {
  getDoctors: getDoctors,
  insertDoctor: insertDoctor,
  updateDoctor: updateDoctor,
  removeDoctor: removeDoctor,
  getDoctorById: getDoctorById,
};
