// src/controllers/itemController.ts
import { Request, Response } from 'express';
import { ItemService, Item } from '../services/itemService';

const itemService = new ItemService();

export const createItem = (req: Request, res: Response) => {
    const newItem: Item = req.body;
    const createdItem = itemService.createItem(newItem);
    res.json(createdItem);
};

export const getItems = (req: Request, res: Response) => {
    const items = itemService.getItems();
    res.json(items);
};

export const updateItem = (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id, 10);
    const updatedItem: Item = req.body;

    const updated = itemService.updateItem(itemId, updatedItem);

    if (updated) {
        res.json(updated);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
};

export const deleteItem = (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id, 10);

    const deleted = itemService.deleteItem(itemId);

    if (deleted) {
        res.json({ message: 'Item deleted successfully' });
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
};
