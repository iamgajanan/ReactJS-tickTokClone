import React, {useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from "./VideFooter"
function Video() {
    const [playing,setPlaying]=useState(false)
    const videoRef=useRef(null);

    const onVideoPress=()=>{
    if(playing){
        videoRef.current.pause();
        setPlaying(false)
    }    else{
        videoRef.current.play();
        setPlaying(true)
    }
    }
    return (
        <div className="video">
            
            <video className="video_player"  
            loop  
            onClick={onVideoPress}
            ref={videoRef}
             ></video>
            <VideoFooter/>
            {/* <VideoSidebar/> */}
        </div>
    );
}

export default Video;