import { AttachFile, InsertEmoticon, MicOutlined, MicrowaveOutlined, MoreVert, Search } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import './Chat.css';



function Chat() {
  return (
    <div className='chat'>
        <div className='chat__header'>
            <Avatar/>
            <div className='chat__headerInfo'>
                <h3>Room name</h3>
                <p>Last seen at</p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                    <Search/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className='chat__body'>
            <p className='chat__message'>
                <span className='chat__name'>Alwi</span>
                    this is a message
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>
            </p>

            <p className='chat__receiver'>
                <span className='chat__name'>Alwi</span>
                    this is a message
                <span className='chat__timestamp'>
                    {new Date().toUTCString()}
                </span>
            </p>
            
        </div>
        <div className='chat__footer'>
            <InsertEmoticon/>
            <form>
                <input type="text" placeholder="Type a message"/>
            </form>
            <button type='submit'>Send a message</button>
            <MicOutlined/>
        </div>
    </div>
  )
}

export default Chat