import { normalize, arrayOf, Schema } from 'normalizr';

export const group = new Schema('groups');
export const player = new Schema('players');

group.define({
  creator: player,
  players: arrayOf(player)
});
