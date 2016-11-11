import { Entity } from '../shared/entity/entity';

export class Place extends Entity {
  name: string;
  description: string;
  address: string;
  status: string;
  price: string;
}
