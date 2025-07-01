import { Request, Response, NextFunction } from "express";
import request from 'supertest';

import httpMocks from 'node-mocks-http';

import { createSample, getAllSample } from "../../../src/controllers/sampleControllers";
import { Shutdown } from "../../../src/server";



describe('Testing sampleControllers', () => {

    let mockReq: Request, mockRes: Response, next: NextFunction;

    beforeEach(() => {
        // Reset mocks before each test
        // mockReq = httpMocks.createRequest({
        //     method: 'GET',
        //     url: '/sample',
        //     params: { id: '123' },
        // });
        // mockRes = httpMocks.createResponse();
        // next = jest.fn() as NextFunction;

    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls after each test
    });

    afterAll((done) => {
        Shutdown(done);
    });

    it('Testing getAllSample Controller Unit', async () => {

        const req = httpMocks.createRequest({
            method: 'GET',
            url: '/sample',
            params: { id: '123' },
        });
        const res = httpMocks.createResponse();
        const next = jest.fn() as NextFunction;

        getAllSample(req, res, next);

        expect(res._getStatusCode()).toBe(200);
        expect(res._getJSONData()).toEqual({ "response": "getAllSample Response" });

    })

})