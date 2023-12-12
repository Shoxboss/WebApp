import express from 'express';
import { handleValidation } from '../middlewares/validation.handler';
import controller from '../controllers/users.controller';
import balanceValidatorSchema from '../validators/balance.validator';

export default express
  .Router()
  .put(
    '/:userId/balance',
    handleValidation(balanceValidatorSchema),
    controller.balance
  );
