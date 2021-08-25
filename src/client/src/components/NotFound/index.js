import { Link } from 'react-router-dom';
import './styles.css';

function NotFound() {

    return(
        <div className="NotFound">
            <div className="Modal">
                <div className="Title">
                    <h1>Error 404: Not Found</h1>
                </div>
                <div className="Body">
                    <p>The path you requested does not exist</p>
                    <span className="Underlined">
                        <Link to="/">Go Home</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NotFound;