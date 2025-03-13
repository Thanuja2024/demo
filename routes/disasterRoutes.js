const express = require('express');
const router = express.Router();
const {
  createDisaster,
  getDisasters,
  updateDisaster,
  deleteDisaster
} = require('../controllers/disasterController');

// CREATE
router.post('/', createDisaster);
// READ
router.get('/', getDisasters);
// UPDATE
router.put('/:id', updateDisaster);
// DELETE
router.delete('/:id', deleteDisaster);

module.exports = router;
