import { useEffect } from 'react';
import './styles.css';

function Aside({handleClose}) {

    useEffect(() => {
        document.querySelectorAll('div.List a')
            .forEach(linkElement => {
                linkElement.onclick = () => {
                    if(window.innerWidth < 720) {
                        handleClose();
                    }
                }
            });
    }, []);

    return(
        <aside className="Aside">
            <div className="List">
                <h2>
                    <a href="#introduction">Introduction</a>
                </h2>
                <ul>
                    <li>
                        <a href="#rest">REST</a>
                    </li>
                </ul>
            </div>
            <div className="List">
                <h2>
                    <a href="#endpoints">Endpoints</a>
                </h2>
                <ul>
                    <li>
                        <a href="#users-all">Get all users</a>
                    </li>
                    <li>
                        <a href="#users-paginated">Get users paginated</a>
                    </li>
                    <li>
                        <a href="#users-paginated-validated">Get users paginated with validated pagination</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Aside;