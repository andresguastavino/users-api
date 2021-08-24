import { useState, useEffect } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import './styles.css';

function Slideable({closedAside}) {
    const [asideVisible, setAsideVisible] = useState(false);

    useEffect(() => {
        setAsideVisible(false);
    }, [closedAside]);

    useEffect(() => {
        asideVisible ? showAside() : showMain();
    }, [asideVisible]);

    function showAside() {
        document.querySelector('main.Main').style.display = 'none';
        document.querySelector('aside.Aside').style.display = 'block';
        document.querySelector('div.Button-Container button').style.borderWidth = '5px 0px 5px 5px';
    }

    function showMain() {
        document.querySelector('main.Main').style.display = 'block';
        document.querySelector('aside.Aside').style.display = 'none';
        document.querySelector('div.Button-Container button').style.borderWidth = '5px 5px 5px 0px';
    }

    function handleClick() {
        setAsideVisible(asideVisible ? false : true);
    }
    
    return(
        <div className="Slideable">
            <div className="Button-Container">
                <button onClick={handleClick}>      
                    {
                        asideVisible ?
                            <AiFillCaretLeft /> :
                            <AiFillCaretRight />
                    }
                </button>
            </div>
        </div>
    );
}

export default Slideable;