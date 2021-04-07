const express = require("express");
const doctorModel = require("../models/doctor");

const router = express.Router();

router.get("/", async function (req, res) {
  const doctors = await doctorModel.getDoctors();
  res.render("doctor", { doctors: doctors });
});

router.get("/edit/:id", async function (req, res) {
  const id = req.params.id;
  const doctor = await doctorModel.getDoctorById(irsd);
  res.render("doctor/edit", { doctor: doctor });
});

router.post("/", async function (req, res) {
  const doctor = req.body;
  await doctorModel.insertDoctor(doctor);
  res.redirect("/doctor");
});

router.put("/", async function (req, res) {
  const doctor = req.body;
  await doctorModel.updateDoctor(doctor);
  res.redirect("/doctor");
});

router.delete("/", async function (req, res) {
  const doctor = req.body;
  await doctorModel.removeDoctor(doctor.id);
  res.redirect("/doctor");
});

//Esse é um hard delete, caso precise de um soft delete podemos utilizar uma coluna bolean
// onde os doutores ativos ficarão true e os inativos com false

module.exports = router;
