import React from 'react';
import computerImage from '/images/mycomputer.png';
import '../../index.css';
import ReactModal from 'react-modal-resizable-draggable';
import DetailsAccordion from '../modal-tab/details-accordion/DetailsAccordion';
import TopBar from '../../assets/modal-tab/header/TopBar';

import resumeImage from '/images/994.ico';
import pptImage from '/images/powerpoint.png';

export default function MySelf (props) {

    const [max, setMax] = React.useState(false);
    const maximize = () => {
        setMax(prev => true);
    }
    const minimize = () => {
        setMax(prev => false);
    }

    return (
        <div>
            <ReactModal
                isOpen={props.isOpen}
                disableResize={true}
            >
                <div className={max ? "modal-container-max" : "modal-container"} > 
                    <TopBar heading="My Self" idText='myself' img={computerImage} trigger={props.trigger} isMax={max} maximize={maximize} minimize={minimize}/>
                    <div className="side-bar-and-content"> 
                        <div className={max ? "side-bar-max" : "side-bar"}>
                            <DetailsAccordion header="Details" text="Hi! I'm Areen, a final year B.tech student. Check out my education and work history, or download my resume!" />                                
                        </div>
                        <div className="modal-content" style={{ display: 'flex', flexDirection: 'row'}}>
                            
                            {/* Education */}

                            {/* Work history */}
                            <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }} id={'ppt'} >
                                <button id={'ppt'} onDoubleClick={props.triggerPPTOpen} onClick={props.triggerPPTOpen} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                    <img id={'ppt'} src={pptImage} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Work Exp</div>
                                </button>
                            </div>

                            {/* Resume */}
                            <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://drive.google.com/file/d/1ppIJl7dwraqOyUH93qUfG9Ud0WT9WUr5/view?usp=sharing', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                    <img src={resumeImage} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Resume</div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}
