export function getNameInitials(name) {
  const splitName = name.toUpperCase().split(' ');

  if (splitName.length > 1) {
    return splitName[0][0] + splitName[1][0];
  }

  return splitName[0][0];
}

export function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map(roomId => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
}

export async function getUserUpdate(userId, keytoUpdate, value, database) {
  const updates = {};

  updates[`/profiles/${userId}/${keytoUpdate}`] = value;

  const getMsgs = database
    .ref('/messages')
    .orderByChild('author/uid')
    .equalTo(userId)
    .once('value');

  const getRooms = database
    .ref('/rooms')
    .orderByChild('/lastMessage/author/uid')
    .equalTo(userId)
    .once('value');

  const [mSnap, rSnap] = await Promise.all([getMsgs, getRooms]);

  mSnap.forEach(msgSnap => {
    updates[`/messages/${msgSnap.key}/author/${keytoUpdate}`] = value;
  });

  rSnap.forEach(RoomSnap => {
    updates[`/messages/${RoomSnap.key}/lastMessage/author/${keytoUpdate}`] =
      value;
  });
  return updates;
}
