import { Request, Response, NextFunction } from "express";


//CRUD LOGIC OF THE ROUTES

export const createSample = (req: Request, res: Response, next: NextFunction) => {
    try {
        const sampleResponse = {
            response: 'createSample Response'
        }

        res.status(201).json(sampleResponse);
    }
    catch (error) {
        next(error);
    }
}

export const getAllSample = (req: Request, res: Response, next: NextFunction) => {
    try {
        const sampleResponse = {
            response: 'getAllSample Response'
        }

        res.json(sampleResponse);
    }
    catch (error) {
        next(error);
    }
}

export const getASampleById = (req: Request, res: Response, next: NextFunction) => {
    try {
        const sampleResponse = {
            response: 'getASampleById Response'
        }

        res.json(sampleResponse);
    }
    catch (error) {
        next(error);
    }
}

export const updateSample = (req: Request, res: Response, next: NextFunction) => {
    try {
        const sampleResponse = {
            response: 'updateSample Response'
        }

        res.json(sampleResponse);
    }
    catch (error) {
        next(error);
    }
}

export const deleteSample = (req: Request, res: Response, next: NextFunction) => {
    try {
        const sampleResponse = {
            response: 'deleteSample Response'
        }

        res.json(sampleResponse);
    }
    catch (error) {
        next(error);
    }
}