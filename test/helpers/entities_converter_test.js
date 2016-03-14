import expect from 'expect';
import { normalize, arrayOf } from 'normalizr';
import { group } from '../../app/assets/javascripts/components/store/store_normalizer.js';
import entitiesDenormalizer from '../../app/assets/javascripts/helpers/entities_denormalizer.js';

import {
  group1,
  group2,
  group3,
  player1,
  player2,
  player3
} from '../factories/immutable_groups_with_associations.js';



describe('entitiesDenormalizer', () => {
  const groups = [group1, group2, group3];
  const normalizedGroups = normalize(groups, arrayOf(group));

  it('converts group entities to their nested form', () => {
    expect(
      entitiesDenormalizer({
        ids: [group1.id, group2.id, group3.id],
        entityType: 'groups',
        entities: normalizedGroups.entities
      })
    ).toEqual(
      groups
    );
  });

  it('retrieves players', () => {
    const players = [player1, player2, player3];
    expect(
      entitiesDenormalizer({
        ids: [player1.id, player2.id, player3.id],
        entityType: 'players',
        entities: normalizedGroups.entities
      })
    ).toEqual(
      players
    );
  });
});
