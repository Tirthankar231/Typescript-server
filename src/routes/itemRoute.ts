// src/routes/itemRoute.ts
import express from 'express';
import { ItemController } from '../controllers/itemController';

const router = express.Router();
const itemController = new ItemController();

router.post('/items', itemController.createItem);
router.get('/items', itemController.getAllItems)
router.put('/items/:id', itemController.updateItem)
router.delete('/items/:id', itemController.deleteItem)
router.get('/items/:id', itemController.getItemById)

export default router;
