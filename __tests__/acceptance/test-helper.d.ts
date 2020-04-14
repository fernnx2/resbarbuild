import { ResbarApirest2020Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: ResbarApirest2020Application;
    client: Client;
}
