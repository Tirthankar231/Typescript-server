// src/services/itemService.ts
export interface Item {
    id: number;
    name: string;
    description: string;
}

export class ItemService {
    private items: Item[] = [];

    createItem(newItem: Item): Item {
        newItem.id = this.items.length + 1;
        this.items.push(newItem);
        return newItem;
    }

    getItems(): Item[] {
        return this.items;
    }

    updateItem(itemId: number, updatedItem: Item): Item | null {
        const index = this.items.findIndex(item => item.id === itemId);

        if (index !== -1) {
            this.items[index] = { ...this.items[index], ...updatedItem };
            return this.items[index];
        }

        return null;
    }

    deleteItem(itemId: number): boolean {
        this.items = this.items.filter(item => item.id !== itemId);
        return true;
    }
}
