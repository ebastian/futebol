import { Injectable } from '@angular/core';

import { Player } from '../entities/player';
import { PLAYERS } from './player.mock';

@Injectable()
export class PlayerService {

  getPlayers(): Promise<Player[]> {
    return Promise.resolve(PLAYERS);
  }

  save(player:Player):void {
    if(player.id === undefined || player.id === null) {
      player.id = PLAYERS[PLAYERS.length-1].id + 1;
      PLAYERS.push(player);
      console.log("Adicionou " + player.id);
    } else {
      this.getPlayerIndex(player.id).then(
        index => PLAYERS[index] = player
      );
    }
  }

  getPlayer(id: number): Promise<Player> {
    return this.getPlayers().then(players => players.find(player => player.id === id));
  }

  getPlayerIndex(id: number): Promise<number> {
    return this.getPlayers().then(players => players.findIndex(player => player.id === id));
  }

  remove(id: number): Promise<Player[]> {
    return this.getPlayerIndex(id).then(index => this.getPlayers().then(players => players.splice(index, 1)));
  }
}
