const express = require('express');
const Plan = require('../modal/Admin');
const router = express.Router();

const PlanController = require('../controllers/plan');

router.route('/')
.get(PlanController.getPlan)

router.route('/create')
.post(PlanController.createPlan)

module.exports = router;