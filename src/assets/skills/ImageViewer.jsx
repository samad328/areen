import React from 'react';
import skillsImage from '/images/skills.png';
import '../../index.css';
import ReactModal from 'react-modal-resizable-draggable';

import closeButton from '/images/cross.png';
import maxButton from '/images/maxi.png';
import minButton from '/images/mini.png';
import tabButton from '/images/big.png';

export default function ImageViewer (props) {

    const [max, setMax] = React.useState(false);
    const maximize = () => {
        setMax(prev => true);
    }
    const minimize = () => {
        setMax(prev => false);
    }

    function triggerMaxMin(){
        if(max) {
            minimize();
        } else {
            maximize();
        }
    }

    return (
        <div>
            <ReactModal
                isOpen={props.isOpen}
                disableResize={true}
            >
                <div  className={max ? "modal-container-max" : "modal-container"} >

                    {/* Top Bar */}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: 'linear-gradient(180deg, #0657BD 0%, #0062F0 100%)' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ marginLeft: '5px', marginTop: '5px'}}> <img src={skillsImage} alt="" height="20px" width="20px"/> </div>
                            <div style={{ paddingLeft: '8px', color: 'white', fontFamily: 'Helvetica', fontSize: '14px', marginTop: '3px' }}> {props.skill} Picture Viewer </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button className="topbar-minimize-button">
                                    <img src={tabButton} style={{ height: '10px', width: '10px' }} alt="" />
                                </button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button className="topbar-maximize-button" onClick={triggerMaxMin}>
                                    <img src={max ? minButton : maxButton} style={{ height: '14px', width: '14px'}} alt="" />
                                </button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button id={'skills'} className="topbar-close-button" onClick={props.trigger}>
                                    <img id={'skills'} src={closeButton} style={{ height: '14px', width: '14px'}} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="skills-image-area" >
                        <img src={props.contentImage} alt="" style={{ height: '100%', width: 'auto' }}/>
                    </div>
                    
                </div>
            </ReactModal>
        </div>
    )
}