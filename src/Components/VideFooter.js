import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'
function VideFooter() {
    return (
        <div className="videoFooter">
            
          <div className="videoFooter_text">
            <h3>@iamgajanan</h3>
            <p>This is description</p>
            <MusicNoteIcon className="videoFooter_icon"/>
            <div className="videoFooter_ticker">
            <Ticker mode="smooth">
                {( {index})=>(
                <p>Hey there...!!</p>

                )}
            </Ticker>
            </div>
          </div>
          <img 
            className="videoFooter_record" 
            src="https://static.thenounproject.com/png/934821-200.png" 
            alt=""/>
        </div>
    );
}

export default VideFooter;