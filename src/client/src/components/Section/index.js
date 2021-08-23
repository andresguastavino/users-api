import './styles.css';

function Section({title, id, children}) {

    return(
        <section className="Section" id={id}>
            <div className="Title">
                <h2>{title}</h2>
            </div>
            <div className="Body">
                {children}
            </div>
        </section>
    );
}

export default Section;