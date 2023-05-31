import { DonutLarge, MoreVert, Search } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import React from 'react';
import SidebarChat from './SidebarChat';
import  './Sidebar.css';

function Sidebar() {
 
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar />
            <div className='sidebar__headerRight'>

                <IconButton>
                    <DonutLarge/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <Search />
                
                <input type="text" id='haha' placeholder='Search or start new chat' />
            </div>
        </div>
        <div className='sidebar__chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar