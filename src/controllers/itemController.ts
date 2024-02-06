// src/controllers/itemController.ts
import { Request, Response } from 'express';
import { ItemService } from '../services/itemService';
const itemService = new ItemService();

export class ItemController {
    async createItem(req: Request, res: Response): Promise<void> {
        try {
            const newItem: object = req.body;
            const createdItem = await itemService.createItem(newItem);
            res.status(201).json(createdItem);
        } catch (error) {
            console.error('items: save: error -', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllItems(req: Request, res: Response): Promise<void> {
        try {
            const items = await itemService.getAllItems();
            res.json(items);
        } catch (error) {
            console.error('Error getting all items:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateItem(req: Request, res: Response): Promise<void> {
        try {
            const id: string = req.params.id;
            const updatedData: object = req.body;
            const updatedItem = await itemService.updateItem(id, updatedData);
            res.json(updatedItem);
        } catch (error) {
            console.error('Error updating item:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    async deleteItem(req: Request, res: Response): Promise<void> {
        try {
            const id: string = req.params.id;
            await itemService.deleteItem(id);
            res.sendStatus(204);
        } catch (error) {
            console.error('Error deleting item:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getItemById(req: Request, res: Response): Promise<void> {
        try {
            const id: string = req.params.id;
            const item = await itemService.getItemById(id);
            if (item) {
                res.json(item);
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (error) {
            console.error('Error getting item by id:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}