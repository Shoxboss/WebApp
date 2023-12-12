import { z } from 'zod';

const schema = {
  body: z.object({
    amount: z.number(),
  }),
  params: z.object({
    userId: z.string().refine((value) => !isNaN(Number(value)), {
      message: 'userId must be a number',
    }),
  }),
};

export default schema;
