import './styles.css';

function Snippet({method, endpoint, children}) {

    return(
        <div className="Snippet">
            <div className="Head">
                <span class="Method">{method}:</span><span className="Endpoint">{endpoint}</span>
            </div>
            <div className="Response">
                {children}
            </div>
        </div>
    );
}

export default Snippet;