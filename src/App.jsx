import React from 'react';
import './App.css';
import logo from '/images/logo2.webp';

import MySelf from './assets/myself/Myself';
import WorkExperience from './assets/myself/WorkExperience';
import Games from './assets/games/games';
import Network from './assets/network/Network';
import Information from './assets/information/Information';
import Skills from './assets/skills/Skills';
import StartMenu from './assets/start-menu/StartMenu';
import Notepad from './assets/notepad/Notepad';
import Time from './assets/start-menu/Time';

import computerImage from '/images/mycomputer.png';
import gamesImage from '/images/games.png';
import networkImage from '/images/network.png';
import skillsImage from '/images/skills.png';
import textImage from '/images/text.png';
import infoImage from '/images/information.png';

export default function App(props) {

    /* Start Menu */
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [tabs, setTabs] = React.useState({
        myself:  false,
        skills: false,
        games:  false,
        network:  false,
        information:  false,
        message:  false,
        ppt: false,
    });

    const [openTabs, setOpenTabs] = React.useState([]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function triggerModalOpen(e) {
        setTabs({...tabs, [e.target.id]: true});
        if(e.target.id === 'information') return;
        let newOpenTabs = openTabs.map(tab => tab.replace(e.target.id, ''))
        newOpenTabs.push(e.target.id);
        setOpenTabs(newOpenTabs);
    }

    function triggerModalClose(e) {
        setTabs({...tabs, [e.target.id]: false});
    }

    function renderTabs() {
        let cellArray = [];
        for (let i = 0; i < openTabs.length; i++) {
            let cell = "";
            switch(openTabs[i]) {
                case 'myself':
                    cell = <MySelf isOpen={tabs.myself} trigger={triggerModalClose} triggerPPTOpen={triggerModalOpen} />;
                    break;
                case 'skills':
                    cell = <Skills isOpen={tabs.skills} trigger={triggerModalClose} />;
                    break;
                case 'games':
                    cell = <Games isOpen={tabs.games} trigger={triggerModalClose} />;
                    break;
                case 'network':
                    cell = <Network isOpen={tabs.network} trigger={triggerModalClose} />;
                    break;
                case 'message':
                    cell = <Notepad isOpen={tabs.message} trigger={triggerModalClose} />;
                    break;
                case 'ppt':
                    cell = <WorkExperience isOpen={tabs.ppt} trigger={triggerModalClose}/>;
                    break;
                default: break;
            }          
            cellArray.push(cell);
        }
        return cellArray;
    }

    return (
        <div className="App">

            <div className="icons" style={{ marginLeft: '10px', marginTop: '20px', display: 'flex', justifyContent: 'space-between', overflow: 'hidden', height: '80vh' }}>	
                <div style={{ display: 'flex', flexDirection: 'column'}}> 

                    {/* Myself */}
                        <button id={'myself'} onDoubleClick={triggerModalOpen} className='icon-button'>
                            <img id={'myself'} src={computerImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> My Self </div>
                        </button>

                    {/* Skills */}
                        <button id={'skills'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'skills'} src={skillsImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Skills </div>
                        </button>

                    {/* Games */}
                        <button id={'games'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'games'} src={gamesImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Games </div>
                        </button>

                    {/* Network */}
                        <button id={'network'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'network'} src={networkImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Social </div>
                        </button>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>

                    {/* Information */}
                        <button id={'information'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'information'} src={infoImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Information </div>
                        </button>

                    {/* Message */}
                        <button id={'message'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'message'} src={textImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Message </div>
                        </button>

                    <div></div>
                </div>
            </div>
            
            {renderTabs()}
            {tabs.information && <Information isOpen={true} trigger={triggerModalClose} />}

            <div className="taskbar">
                <div id={'information'}>
                    {isMenuOpen && <StartMenu isOpen={isMenuOpen} trigger={toggleMenu} info={triggerModalOpen} shutDown={props.shutDown} />}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>    
                        <button className="start-button" onClick={toggleMenu}> 
                            <div style={{ margin: '5px' }}> 
                                <img src={logo} height='30px' width='30px' alt="" /> 
                            </div>
                            <div className='start-text'> 
                                Start 
                            </div>
                        </button>
                    </div>

                    {/*Tabs here */}
                    <div>

                    </div>
                    
                    <div className="taskbar-time" id={'information'}> <Time info={triggerModalOpen}/> </div>
                </div>
            </div>

        </div>
    );  
} 

