import { Injectable } from '@angular/core';

import { Entity } from '../entity/entity';

@Injectable()
export class GenericService {

  public id: string = 'GenericService';

  protected data:any;

  public getItensFast(): Promise<Entity[]> {
    return Promise.resolve(this.data);
  }

  public getItens(): Promise<Entity[]> {
    return new Promise<Entity[]>(resolve => setTimeout(resolve, Math.floor(Math.random()*1000))).then(() => this.getItensFast());
  }

  public save(item:any):void {
    console.log('genericservice save ' + JSON.stringify(item));
    if(item.id === undefined || item.id === null) {

      console.log(">>>>" + this.data);

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
    console.log('getItem ' + id);
    return this.getItens().then(items => items.find(item => item.id === id));
  }

  public getItemIndex(id: number): Promise<number> {
    return this.getItens().then(items => items.findIndex(item => item.id === id));
  }

  public remove(id: number): Promise<any> {
    console.log('GenericService delete ' + id);
    return this.getItemIndex(id).then(index => this.getItens().then(items => items.splice(index, 1)));
  }
}
