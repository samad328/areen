import React from 'react';
import '../../index.css';
import ImageViewer from './ImageViewer';
import myskills from  '/images/Tailwind.png';

export default function Skills (props) {

    return (
        <div>
            <ImageViewer isOpen={props.isOpen} trigger={props.trigger} contentImage={myskills}/>
        </div>
    )
}