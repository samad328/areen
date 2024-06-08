import React from 'react';
import pptImage from '/images/powerpoint.png';
import closeButton from '/images/cross.png';
import maxButton from '/images/maxi.png';
import minButton from '/images/mini.png';
import tabButton from '/images/big.png';
import '../../index.css';
import ReactModal from 'react-modal-resizable-draggable';

import slide1 from '/images/slide1.png';
import slide2 from '/images/slide2.png';

export default function WorkExperience(props) {

    const [showSlide1, setShowSlide1] = React.useState(true);
    const [showSlide2, setShowSlide2] = React.useState(false);

    const active1 = () => {
        setShowSlide2(false);
        setShowSlide1(true);
    }

    const active2 = () => {
        setShowSlide1(false);
        setShowSlide2(true);
    }

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
                <div className={max ? "modal-container-max" : "modal-container"}>

                    {/* Top Bar */}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: 'linear-gradient(180deg, #0657BD 0%, #0062F0 100%)' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ marginLeft: '5px', marginTop: '5px'}}> <img src={pptImage} alt="" height="20px" width="20px"/> </div>
                            <div style={{ paddingLeft: '8px', color: 'white', fontFamily: 'Helvetica', fontSize: '14px', marginTop: '3px' }}> Power Point - [Presentation] </div>
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
                                <button id={'ppt'} className="topbar-close-button" onClick={props.trigger}>
                                    <img id={'ppt'} src={closeButton} style={{ height: '14px', width: '14px'}} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#A8C8F7', display: 'flex', flexDirection: 'row', paddingTop: '5px', paddingBottom: '5px' }}>
                        <div className="ppt-topbar-menu"> <span>F</span>ile </div>
                        <div className="ppt-topbar-menu"> <span>H</span>ome </div>
                        <div className="ppt-topbar-menu"> <span>I</span>nsert </div>
                        <div className="ppt-topbar-menu"> <span>D</span>raw </div>
                    </div>
                    <div style={{ backgroundColor: '#EED067', display: 'flex', flexDirection: 'row', paddingTop: '5px', paddingBottom: '5px', alignItems: 'center' }}>
                        <div className="ppt-topbar-menu"> PROTECTED MODE </div>
                        <div className="ppt-topbar-menu"> Be careful - <span>Unless you need to edit, it's safer to stay in protected mode.</span> </div>
                        <button disabled={true} style={{ marginLeft: '10px', marginRight: '10px' }}> Enable Editing </button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', backgroundColor: '#E6E6E6' }}>

                    {/* Content Area */}
                    <div className={max ? "ppt-content-area-max" : "ppt-content-area"} >

                        <div className="ppt-side-bar" >
                            <div style={{ margin: '10px 5px 5px 10px', display: 'flex', flexDirection: 'row'}}>
                                <div style={{ fontSize: '14px', marginRight: '3px' }}>1.</div>
                                <button className="ppt-slide-button" onClick={active1}>
                                    <img src={slide1} alt="" height="60px" width="100px"/>
                                </button>
                            </div>
                            <div style={{ margin: '10px 5px 5px 10px', display: 'flex', flexDirection: 'row' }}>
                                <div style={{ fontSize: '14px', marginRight: '3px' }}>2.</div>
                                <button className="ppt-slide-button" onClick={active2}>
                                    <img src={slide2} alt="" height="60px" width="100px"/>
                                </button>
                            </div>
                        </div>

                        <div className={max ? "ppt-divider-max" : "ppt-divider"}>
                        </div>

                        <div className={max ? "ppt-slides-area-max" : "ppt-slides-area"}>
                            {showSlide1 && <img src={slide1} className={max ? "ppt-slide-image-max" : "ppt-slide-image"} alt="" />}
                            {showSlide2 && <img src={slide2} className={max ? "ppt-slide-image-max" : "ppt-slide-image"} alt="" />}
                        </div>
                        
                    </div>

                    {/* Footer */}
                    <div style={{ backgroundColor: '#B6B6BB', padding: '2px' }}>
                        <div style={{ fontSize: '12px', marginLeft: '10px', fontFamily: 'Helvetica' }}> Slide {showSlide1 ? 1 : 2} of 2 </div>
                    </div>

                    </div>
                    
                </div>
            </ReactModal>
        </div>
    )
}