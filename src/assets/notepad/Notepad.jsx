import React from 'react';

import notepadImage from '/images/text.png';
import closeButton from '/images/cross.png';
import maxButton from '/images/maxi.png';
import minButton from '/images/mini.png';
import tabButton from '/images/big.png';

import ReactModal from 'react-modal-resizable-draggable';
import '../../index.css';
import Warning from '../../assets/warning-model/Warning';

import crossIcon from '/images/cross.png';
import warnImage from '/images/left-arrow.png';
import tickIcon from '/images/tick.png';

export default function Notepad (props) {

    const [inputText, setInputText] = React.useState("");
    const [verifyNew, setVerifyNew] = React.useState(false);
    const [noText, setNoText] = React.useState(false);
    const [errorModal, setErrorModal] = React.useState(false);
    const [successModal, setSuccessModal] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(inputText === "") {
            setNoText(prev => true);
        } else {
            document.body.style.cursor  = 'wait';
            if( inputText.length <= 5) {
                setSuccessModal(true);
            } else {
                const response = await fetch('https://getform.io/f/1490b7ee-2f43-4510-b3fa-ee02b5737409', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({inputText}),
                });
                if (!response.ok) {
                    setErrorModal(true);
                } else {
                    setSuccessModal(true);
                }
            }
            document.body.style.cursor  = 'default';
        }
    };

    const clearScreen = () => {
        setInputText(prev => "");
        closeDialog();
    }

    const closeDialog = () => {
        setVerifyNew(prev => false);
        setErrorModal(prev => false);
        setNoText(prev => false);
        setSuccessModal(prev => false);
    }

    const [isDropdownVisible, setDropdownVisible] = React.useState(false);

    const handleMouseEnter = (e) => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = (e) => {
        setDropdownVisible(false);
    };

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
                <div className={max ? "modal-container-max" : "modal-container"} > 

                    {/* Header */}
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '3px' }}>
                            <img src={notepadImage} height="20px" width="20px" style={{ paddingLeft: '5px'}} alt="" />
                            <div style={{ paddingLeft: '8px', fontFamily: 'Helvetica', fontSize: '13px' }}> Untitled - Notepad </div>
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
                                <button id={'message'} className="topbar-close-button" onClick={props.trigger}>
                                    <img id={'message'} src={closeButton} style={{ height: '14px', width: '14px'}} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Menu */}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <button style={{ marginTop: '7px', marginLeft: '1px', fontSize: '12px', border: 'none', background: 'white', color: 'black' }}> <span style={{ textDecoration: 'underline' }}>F</span>ile </button>
                            {isDropdownVisible && 
                                <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', zIndex: '999', backgroundColor: '#F1EEE1', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    <button className="highlight-button" onClick={() => {setVerifyNew(true)}} style={{}}> New </button> 
                                    <button className="highlight-button" onClick={handleSubmit} type="submit"> Save </button> 
                                </div>
                            }
                        </div>
                        <div style={{ backgroundColor: 'pink'}}></div>
                    </div>

                    {/* Line */}
                    <div style={{ marginTop: '3px', width: '100%', height: '1px', borderBottom: '0.5px solid #BDBCB9' }}>
                    </div>

                    {/* Content */}
                    <div>
                        <form onSubmit={handleSubmit}>
                            <textarea 
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Drop a message for me here. Click on File -> Save to send your message!"
                                style={{ fontFamily: 'Inconsolata', border: 'none', width: '96%', outline: 'none', resize: 'none', margin: '5px', fontSize: '14px' }}
                                rows="30"
                            />
                        </form>
                    </div>
                </div>
            </ReactModal> 

            {/* Warnings */} 
            <Warning isOpen={noText} img={warnImage} heading="Warning" option1="Ok" option2="" close1={closeDialog} close2={closeDialog} text="Please enter some text before sending it."/>
            <Warning isOpen={verifyNew} img={warnImage} heading="Warning" option1="Yes" option2="No" close1={clearScreen} close2={closeDialog} text="Are you sure you want to discard your changes?"/>   
            <Warning isOpen={errorModal} img={crossIcon} heading="Error" option1="Ok" option2="" close1={closeDialog} close2={closeDialog} text="There was an error sending the message. Please try again."/>     
            <Warning isOpen={successModal} img={tickIcon} heading="Success" option1="Ok" option2=""  close1={closeDialog} close2={closeDialog} text="Message sent successfully!"/>         
        </div>
    )
}
