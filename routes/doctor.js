const express = require("express");
const doctorModel = require("../models/doctor");

const router = express.Router();

router.get("/", async function (req, res) {
  const doctors = await doctorModel.getDoctors();
  res.render("doctor", { doctors: doctors });
});

router.get("/edit/:id", function (req, res) {
  const doctorId = req.params.id;
  const doctor = doctorModel.getDoctorById(doctorId);
  res.render("doctor/edit", { doctor: doctor });
});

router.post("/", async function (req, res) {
  const doctor = req.body;
  // doctor.id = parseInt(Math.random() * 100);
  await doctorModel.insertDoctor(doctor);
  res.redirect("/doctor");
});

router.put("/", async function (req, res) {
  const doctor = req.body;

  await doctorModel.updateDoctor(doctor);
  res.redirect("/doctor");
});

router.delete("/", function (req, res) {
  const doctor = req.body;

  doctorModel.removeDoctor(doctor.id);
  res.redirect("/doctor");
});

module.exports = router;
