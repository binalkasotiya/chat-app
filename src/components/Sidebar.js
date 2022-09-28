import React from 'react';
import CreateRoomBtn from './dashboard/CreateRoomBtn';
import DashboardToggle from './dashboard/DashboardToggle';

const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToggle />
        <CreateRoomBtn />
      </div>
      bottom
    </div>
  );
};

export default Sidebar;
