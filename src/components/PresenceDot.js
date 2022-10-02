import React from 'react';
import { Whisper, Tooltip, Badge } from 'rsuite';
import { usePresence } from '../misc/custom-hooks';

// eslint-disable-next-line consistent-return
const getColor = presence => {
  if (!presence) {
    return 'gray';
  }

  // eslint-disable-next-line default-case
  switch (presence.state) {
    case 'online':
      return 'green';
    case 'offline':
      return 'red';
    case 'default':
      return 'gray';
  }
};

const getText = presence => {
  if (!presence) {
    return 'Unknown state';
  }
  return presence.state === 'online'
    ? 'online'
    : `Last online ${new Date(presence.last_changed).toLocaleDateString()}`;
};

const PresenceDot = ({ uid }) => {
  const presence = usePresence(uid);

  return (
    <Whisper
      placement="top"
      trigger="hover"
      speaker={<Tooltip>{getText(presence)}</Tooltip>}
    >
      <Badge
        className="cursor-pointer"
        style={{ backgroundColor: getColor(presence) }}
      />
    </Whisper>
  );
};

export default PresenceDot;
