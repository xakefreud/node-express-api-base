import express, { Router } from "express";

import {
    createSample,
    getASampleById,
    getAllSample,
    updateSample,
    deleteSample

} from "../controllers/sampleControllers";

import { protect } from "../middlewares/auth";


const router = Router();

router.route('/')
    .get(getAllSample)
    .post(createSample);

//with params
router.route('/:id')
    .get(getASampleById)
    .put(protect, updateSample)
    .delete(protect, deleteSample);

export default router;