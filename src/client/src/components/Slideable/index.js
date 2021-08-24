import { useState, useEffect } from 'react';
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
    }

    function showMain() {
        document.querySelector('main.Main').style.display = 'block';
        document.querySelector('aside.Aside').style.display = 'none';
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
                            '<' :
                            '>'
                    }
                </button>
            </div>
        </div>
    );
}

export default Slideable;