import { useState, useEffect } from 'react';
import Aside from '../Aside';
import Slideable from '../Slideable';
import Main from '../Main';
import './styles.css';

function Content() {
    const [closedAside, setClosedAside] = useState(new Date());
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        setInterval(() => setWidth(window.innerWidth), 1000);
        renderElements();
    }, []);

    useEffect(() => {
        renderElements();
    }, [width])

    function renderElements() {
        if(width >= 720) {
            document.querySelector('div.Slideable').style.display = 'none';
            document.querySelector('aside.Aside').style.display = 'block';
            document.querySelector('main.Main').style.display = 'block';
        } else {
            document.querySelector('div.Slideable').style.display = 'block';
            const aside = document.querySelector('aside.Aside');
            if(aside.style.display !== 'block') {
                aside.style.display = 'none';
            }
        }
    }

    return(
        <div className="Content">
            <Aside handleClose={() => setClosedAside(new Date())} />
            <Slideable closedAside={closedAside} />
            <Main />
        </div> 
    );
}

export default Content;