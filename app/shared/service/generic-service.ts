import { Injectable } from '@angular/core';

import { Entity } from '../entity/entity';

@Injectable()
export class GenericService {

  protected data:Entity[] = [];

  public getItensFast(): Promise<Entity[]> {
    return Promise.resolve(this.data);
  }

  public getItens(): Promise<Entity[]> {
    return new Promise<Entity[]>(resolve => setTimeout(resolve, Math.floor(Math.random()*2000))).then(() => this.getItensFast());
  }

  public save(item:Entity):void {
    if(item.id === undefined || item.id === null) {
      item.id = this.data[this.data.length-1].id + 1;
      this.data.push(item);
      console.log("Adicionou " + item.id);
    } else {
      this.getItemIndex(item.id).then(
        index => this.data[index] = item
      );
    }
  }

  public getItem(id: number): Promise<Entity> {
    return this.getItens().then(items => items.find(item => item.id === id));
  }

  public getItemIndex(id: number): Promise<number> {
    return this.getItens().then(items => items.findIndex(item => item.id === id));
  }

  public remove(id: number): Promise<Entity[]> {
    return this.getItemIndex(id).then(index => this.getItens().then(items => items.splice(index, 1)));
  }
}
