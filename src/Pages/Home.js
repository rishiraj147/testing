import React,{useState} from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  const [roomId,setRoomId]=useState('');
  const [username,setUsername]=useState('');
 
  const createNewRoom=(e)=>{
    e.preventDefault();
    const id=uuidV4();
    setRoomId(id);
    toast.success('Created a new room');
  }

  const joinRoom=(e)=>{
    if(!roomId||!username){
      toast.error('ROOM ID and Username is required');
      return;
    }
    //Redirect to editor pages
    navigate(`/editor/${roomId}`,{
      state:{
        username
      }
    });

  }
  
  //for listening keyStrokes specially for Enter Key !
  const handleInputEnter=(e)=>{ 
   // console.log('event',e.code);
    if(e.code==='Enter'){
      joinRoom();
    }
  }

  return <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="hopmePageLogo" src="/code-sync.png" alt="code-sync-logo"/>
        <h5 className="mainLabel">Paste invitation ROOM ID</h5>
        <div className="inputGroup">
          <input
           type="text" 
           className="inputBox" 
           placeholder="ROOM ID" 
           value={roomId}
           onChange={ (e)=>setRoomId(e.target.value) }
           onKeyUp={handleInputEnter}
           />
           
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={ (e)=>setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />

          <button className="btn joinBtn" onClick={joinRoom}>Join</button>
        </div>
        <p className="createInfo">
          If you don't have an invite then create &nbsp;
          <a onClick={createNewRoom} href="" className="createNewBtn">new room</a>
        </p>
      </div>
      <footer>
        <h4>Built by &nbsp; <a href="https://github.com/rishiraj147">Rishi</a></h4>
      </footer>

  </div>
}

export default Home