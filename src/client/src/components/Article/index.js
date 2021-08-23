import './styles.css';

function Article({title, id, children}) {

    return(
        <article className="Article" id={id}>
            <div className="Title">
                <h2>{title}</h2>
            </div>
            <div className="Body">
                {children}
            </div>
        </article>
    );
}

export default Article;
