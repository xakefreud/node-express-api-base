import { Request, Response, NextFunction } from "express";

// sample of gating an api endpoint with a middlware

export const protect = (req: Request, res: Response, next: NextFunction) => {

    // do somethere here like checking API keys / bearer keys etc

    try {
        next();
    }
    catch (err) {
        next(err);
    }
}