const express = require("express");
const patientModel = require("../models/patient");

const router = express.Router();

router.get("/", async function (req, res) {
  const initialLetter = req.query.initialLetter;
  const patients = await patientModel.getPatient(initialLetter);
  res.render("patient", { patients: patients });
});

router.get("/edit/:id", function (req, res) {
  const patientId = req.params.id;
  const patient = patientModel.getPatientById(patientId);
  res.render("patient/edit", { patient: patient });
});

router.post("/", async function (req, res) {
  const patient = req.body;
  await patientModel.insertPatient(patient);
  res.redirect("/patient");
});

router.put("/", function (req, res) {
  const patient = req.body;

  patientModel.updatePatient(patient);
  res.redirect("/patient");
});

router.delete("/", async function (req, res) {
  const patient = req.body;

  await patientModel.removePatient(patient.id);
  res.redirect("/patient");
});

module.exports = router;
