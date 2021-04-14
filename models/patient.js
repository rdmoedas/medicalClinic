const Sequelize = require('sequelize');
const config = require('../config/database');
const db = new Sequelize(config);

/*
let patients = [
  {
    id: "1",
    name: "Paciente 01",
    document: "456.038.444.8",
    birth_date: "1995-12-10",
    gender: "F",
  },
  {
    id: "2",
    name: "Paciente 02",
    document: "456.038.456.9",
    birth_date: "1987-09-12",
    gender: "M",
  },
  {
    id: "3",
    name: "Paciente 03",
    document: "456.038.202.5",
    birth_date: "2002-02-18",
    gender: "F",
  },
];
*/

async function getPatient(initialLetter) {
  let searchQuery = "SELECT * FROM patient;";
  
  if (initialLetter !== undefined) {
    searchQuery = "SELECT * FROM patient WHERE name LIKE :initialLetter";
  }

  const patients = await db.query(searchQuery, { 
    type: Sequelize.QueryTypes.SELECT,
    replacements: {
      initialLetter: initialLetter + '%', // `${initialLetter}%`
    }
  });
  

  
  return patients;
}

function getPatientById(patientId) {
  const index = patients.findIndex((obj) => {
    return parseInt(obj.id) === parseInt(patientId);
  });

  return patients[index];
}

async function insertPatient(patient) {
  await db.query("INSERT INTO patient (name, birth_date, document, gender) VALUES (:name, :birth_date, :document, :gender);", {
    replacements: {
      name: patient.name,
      birth_date: patient.birth_date,
      document: patient.document,
      gender: patient.gender,
    }
  })
}

function updatePatient(patient) {
  const index = patients.findIndex((obj) => {
    return parseInt(obj.id) === parseInt(patient.id);
  });

  patients[index] = patient;

  return patients[index];
}

async function removePatient(patientId) {
  /*patients = patients.filter(
    (patient) => parseInt(patient.id) !== parseInt(patientId)
  );
  */
    await db.query('DELETE FROM patient WHERE id = :patientId;', {
      type: Sequelize.QueryTypes.DELETE,
      replacements: {
        patientId: patientId,
      }
    })
}

module.exports = {
  getPatient: getPatient,
  insertPatient: insertPatient,
  updatePatient: updatePatient,
  removePatient: removePatient,
  getPatientById: getPatientById,
};
