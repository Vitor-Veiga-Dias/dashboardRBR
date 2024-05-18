import { validate } from "class-validator";
import { Response } from "express";
import createHttpError from "http-errors";


export async function validateBody<T extends object>(dto: T, res: Response){
    const erros = await validate(dto);
    if (erros.length) {
        const errorMessage = erros.map((error) => error.constraints)
        return createHttpError(400, res?.status(400).json({ error: errorMessage}));
    }
}


