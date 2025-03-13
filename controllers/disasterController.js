const Disaster = require('../models/disasterModel');

// CREATE
const createDisaster = async (req, res) => {
  try {
    const disaster = new Disaster(req.body);
    await disaster.save();
    res.status(201).json(disaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ
const getDisasters = async (req, res) => {
  try {
    const disasters = await Disaster.find();
    res.status(200).json(disasters);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE
const updateDisaster = async (req, res) => {
  try {
    const disaster = await Disaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(disaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
const deleteDisaster = async (req, res) => {
  try {
    await Disaster.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createDisaster, getDisasters, updateDisaster, deleteDisaster };
