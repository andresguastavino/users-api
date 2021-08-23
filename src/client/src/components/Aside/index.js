import './styles.css';

function Aside() {

    return(
        <aside className="Aside">
            <div className="List">
                <h2>Introduction</h2>
                <ul>
                    <li>REST</li>
                    <li>Info</li>
                </ul>
            </div>
            <div className="List">
                <h2>Endpoints</h2>
                <ul>
                    <li>Get all users</li>
                    <li>Get users paginated</li>
                </ul>
            </div>
        </aside>
    );
}

export default Aside;