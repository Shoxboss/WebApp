import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

export const handleValidation =
  <TB = unknown, TP = unknown, TQ = unknown>(schemas: {
    body?: ZodType<TB>;
    params?: ZodType<TP>;
    query?: ZodType<TQ>;
  }) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    await schemas?.body?.parse(req.body);
    await schemas?.query?.parse(req.query);
    await schemas?.params?.parse(req.params);

    next();
  };
