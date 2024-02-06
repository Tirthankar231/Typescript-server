// src/services/itemService.ts
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { db, Tables, AWS } from '../config/db';

export class ItemService {
    private docClient: AWS.DynamoDB.DocumentClient;

    constructor() {
        this.docClient = new AWS.DynamoDB.DocumentClient();
    }

    async createItem(item: object): Promise<object> {
        const params: DocumentClient.PutItemInput = {
            TableName: Tables.Items,
            Item: item,
        };

        try {
            const result = await this.docClient.put(params).promise();
            console.log('items: createItem: success');
            return result;
        } catch (error) {
            console.error(`items: createItem: error - ${JSON.stringify(error, null, 2)}`);
            throw error;
        }
    }

    async getAllItems(): Promise<object[]> {
        const params: DocumentClient.ScanInput = {
            TableName: Tables.Items,
        };

        try {
            const result = await this.docClient.scan(params).promise();
            console.log('items: getAllItems: success');
            return result.Items || [];
        } catch (error) {
            console.error(`items: getAllItems: error - ${JSON.stringify(error, null, 2)}`);
            throw error;
        }
    }

    async updateItem(id: string, updatedData: object): Promise<object> {
        const params: DocumentClient.UpdateItemInput = {
            TableName: Tables.Items,
            Key: { id: id },
            UpdateExpression: 'set #data = :updatedData',
            ExpressionAttributeNames: { '#data': 'data' },
            ExpressionAttributeValues: { ':updatedData': updatedData },
            ReturnValues: 'ALL_NEW',
        };
    
        try {
            const result = await this.docClient.update(params).promise();
            console.log('items: updateItem: success');
            return result.Attributes || {};
        } catch (error) {
            console.error(`items: updateItem: error - ${JSON.stringify(error, null, 2)}`);
            throw error;
        }
    }
    
    async deleteItem(id: string): Promise<void> {
        const params: DocumentClient.DeleteItemInput = {
            TableName: Tables.Items,
            Key: { id: id },
        };
    
        try {
            await this.docClient.delete(params).promise();
            console.log('items: deleteItem: success');
        } catch (error) {
            console.error(`items: deleteItem: error - ${JSON.stringify(error, null, 2)}`);
            throw error;
        }
    }
    
    async getItemById(id: string): Promise<object | null> {
        const params: DocumentClient.GetItemInput = {
            TableName: Tables.Items,
            Key: { id: id },
        };

        try {
            const result = await this.docClient.get(params).promise();
            console.log('items: getItemById: success');
            return result.Item || null;
        } catch (error) {
            console.error(`items: getItemById: error - ${JSON.stringify(error, null, 2)}`);
            throw error;
        }
    }
}
