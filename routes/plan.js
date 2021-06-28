const express = require('express');
const Plan = require('../modal/Admin');
const router = express.Router();

const PlanController = require('../controllers/plan');

router.route('/')
.get(PlanController.getPlan)

router.route('/create')
.post(PlanController.createPlan)

router.route('/:planID')
.get(PlanController.getOnePlan)
module.exports = router;