import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Home() {

 const navigate=useNavigate()

  const [username,setUsername]=useState('')
   const [roomid,setroomId] =useState('');

  function createnewroom(e){
    e.preventDefault();
    const id = uuidV4();
    setroomId(id);
    toast.success("Created new Room")   

  }
  const joinRoom = () => {
    if (!roomid || !username) {
        toast.error('ROOM ID & username is required');
        return;
    }

    // Redirect
    navigate(`/editor/${roomid}`, {
        state: {
            username,
        },
    });
};

const handleInputEnter = (e) => {
    if (e.code === 'Enter') {
        joinRoom();
    }
};
function backtohome(){
    navigate('/');
}

  return (
    <>
    <div className="homePageWrapper bg-dark-1">
<button className=''onClick={backtohome}>back to home</button> 
    <div className="formWrapper ">
        <div className='flex gap-3 text-dark-2 align-center '>

        <img
            className="homePageLogo w-[2rem] h-[2rem] "
            src="/code.png"
            alt="code-sync-logo"
        />
        <h2 className='font-bold text-[1rem]'>Codesharedit</h2>
        </div>
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
            <input
                type="text"
                className="inputBox"
                placeholder="ROOM ID"
                onChange={(e)=>setroomId(e.target.value)}
                value={roomid}
              onKeyUp={handleInputEnter}
              />
            <input
                type="text"
                className="inputBox"
                placeholder="USERNAME"
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
                onKeyUp={handleInputEnter}
                
                />
            <button className="btn joinBtn" onClick={joinRoom}>
                Join
            </button>
            <span className="createInfo">
                If you don't have an invite then create &nbsp;
                <a
                    onClick={createnewroom}
                    href=""
                    className="createNewBtn"
                    
                    >
                    new room
                </a>
            </span>
        </div>
    </div>
    <footer className='footer'>
        <h4>
            Built with 💛 &nbsp; by &nbsp;
            <Link className='a' to="https://github.com/repalletomson/CodeSharedit">CodeSharedit.</Link>
        </h4>
    </footer>
</div>
                    </>
  )
}

export default Home