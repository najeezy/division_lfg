const entitiesDenormalizer = ({ ids, entityType, entities }) => {
  if (entities[entityType]) {
    // mapping functions
    const playersMap = (playerId) => ( entities.players[playerId] )

    const groupsMap = (groupId) => {
      let newGroup = { ...entities.groups[groupId] }
      newGroup.players = newGroup.players.map(playersMap)
      newGroup.creator = entities.players[newGroup.creator]

      return newGroup
    };

    switch (entityType) {
      case 'groups':
        return ids.map(groupsMap)
      case 'players':
        return ids.map(playersMap)
      default:
        return []
    }
  }
}


export default entitiesDenormalizer;
