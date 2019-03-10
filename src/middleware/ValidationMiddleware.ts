import {plainToClass} from 'class-transformer';
import {ClassType} from 'class-transformer/ClassTransformer';
import {Validator} from 'class-validator';
import * as express from 'express';

const validator = new Validator();

const ValidationMiddleware = () => {
    return ( classType: ClassType<any>) => {
        return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
            const validationErrors = validator.validateSync(plainToClass(classType, req.body));
            if (validationErrors.length >= 1) {
                const errors = validationErrors.map((error) => {
                    return error.constraints;
                });
                res.status(400).json(errors);
                return;
            }
            next();

        };
    };
};

export default ValidationMiddleware;


