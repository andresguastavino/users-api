import Section from '../Section';
import Article from '../Article';
import Snippet from '../Snippet';

import './styles.css';

function Main() {
    
    return(
        <main className="Main">
            <Section title={'Introduction'} id={'introduction'}>
                <Article title={'REST'} id={'rest'}>
                    <p>
                        Base url: 
                        <span className="Underlined">
                            <a href="/api">https://users-list-api.herokuapp.com/api</a>
                        </span>
                    </p>
                    <p>
                        The base url contains information about all available API's resources. All requests are<span className="Highlighted">GET</span>
                        requests and go over<span className="Highlighted">https</span>. All responses will return data in<span className="Highlighted">json</span>.
                    </p>
                    <Snippet 
                        method={'GET'}
                        endpoint={'https://users-list-api.herokuapp.com/api'}
                    >
                        <div className="First">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"all":</span>
                            <span className="Value">'https://users-list-api.herokuapp.com/api/all'</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"users":</span>
                            <span className="Value">'https://users-list-api.herokuapp.com/api/users'</span>
                        </div>
                        <div className="First">
                            <span className="Bracket">{'}'}</span>
                        </div>
                    </Snippet>
                    <p>
                        There are currently two available resources:
                    </p>
                    <ul>
                        <li>
                            <span className="Underlined">
                                <a href="#users-all">All</a>
                            </span>: used to get all the users in a single request.
                        </li>
                        <li>
                            <span className="Underlined">
                                <a href="#users-paginated">Users</a>
                            </span>: used to get users with a pagination of 10 users per page.
                        </li>
                    </ul>
                </Article>
            </Section>
            <Section title={'Endpoints'} id={'endpoints'}>
                <Article title={'Get all users'} id={'users-all'}>
                    <p>
                        You can access the list of users by using the<span className="Highlighted">/all</span>endpoint.
                    </p>
                    <Snippet 
                        method={'GET'}
                        endpoint={'https://users-list-api.herokuapp.com/api/all'}
                    >
                        <div className="First">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"count":</span>
                            <span className="Value">5</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"results":</span>
                            <span className="Value">[</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">1</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Juan'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Robledo'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">2</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Tony'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Stark'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">3</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Peter'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Parker'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">4</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Sofia'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Roseli'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">5</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Andres'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Guastavino'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'}'}</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Bracket">]</span>
                        </div>
                        <div className="First">
                            <span className="Bracket">{'}'}</span>
                        </div>
                    </Snippet>
                </Article>
                <Article title={'Get users paginated'} id={'users-paginated'}>
                    <p>
                        You can access get the users paginated by using the<span className="Highlighted">/users</span>endpoint.
                    </p>
                    <p>
                        The API will automatically paginate the responses. You will receive up to 10 users per page.
                    </p>
                    <Snippet 
                        method={'GET'}
                        endpoint={'https://users-list-api.herokuapp.com/api/users?page=2'}
                    >
                        <div className="First">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"count":</span>
                            <span className="Value">43</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"page":</span>
                            <span className="Value">2</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"results":</span>
                            <span className="Value">[</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">21</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Juan'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Robledo'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">22</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Tony'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Stark'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">23</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Peter'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Parker'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">24</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Sofia'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Roseli'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">25</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Andres'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Guastavino'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">26</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Simon'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Fort'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">27</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Clara'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Palommo'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">28</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Juan'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Camilo'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">29</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Roxana'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Johnson'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">30</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Eduardo'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Gomez'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'}'}</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Bracket">]</span>
                        </div>
                        <div className="First">
                            <span className="Bracket">{'}'}</span>
                        </div>
                    </Snippet>
                    <p>
                        When no page is specified it will return<span className="Highlighted">page=0</span>.
                    </p>
                    <p>
                        If you query for an invalid page you will get an empty results array.
                    </p>
                    <ul>
                        <li>
                            If you query for<span className="Highlighted">page=-1</span>results will be an empty array.
                        </li>
                        <li>
                            If you query for<span className="Highlighted">page=10</span>and the total number of users
                            is 43, results will be an empty array.
                        </li>
                    </ul>
                    <Snippet 
                        method={'GET'}
                        endpoint={'https://users-list-api.herokuapp.com/api/users?page=7'}
                    >
                    <div className="First">
                        <span className="Bracket">{'{'}</span>
                    </div>
                    <div className="Inner-x">
                        <span className="Key">"count":</span>
                        <span className="Value">43</span>
                    </div>
                    <div className="Inner-x">
                        <span className="Key">"page":</span>
                        <span className="Value">7</span>
                    </div>
                    <div className="Inner-x">
                        <span className="Key">"results":</span>
                        <span className="Value">[]</span>
                    </div>
                    <div className="First">
                        <span className="Bracket">{'}'}</span>
                    </div>
                    </Snippet>
                </Article>
                <Article title={'Get users paginated with validated pagination'} id={'users-paginated-validated'}>
                    <p>
                        Appending<span className="Highlighted">&validated</span>to the users paginated endpoint will prevent you from 
                        getting no results if a page is invalid.
                    </p>
                    <ul>
                        <li>
                            If you query for<span className="Highlighted">page=-1&validated</span>it will return<span className="Highlighted">page=0</span>.
                        </li>
                        <li>
                            If you query for<span className="Highlighted">page=10&validated</span>and the total number of users
                            is 43 it will return<span className="Highlighted">page=4</span>.
                        </li>
                    </ul>
                    <Snippet 
                        method={'GET'}
                        endpoint={'https://users-list-api.herokuapp.com/api/users?page=7&validated'}
                    >
                        <div className="First">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"count":</span>
                            <span className="Value">43</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"page":</span>
                            <span className="Value">4</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Key">"results":</span>
                            <span className="Value">[</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">41</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Carlos'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Menem'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">42</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Antonio'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Estrella'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'},'}</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'{'}</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"id":</span>
                            <span className="Value">43</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"firstName":</span>
                            <span className="Value">'Ricardo'</span>
                        </div>
                        <div className="Inner-xxx">
                            <span className="Key">"lastName":</span>
                            <span className="Value">'Darin'</span>
                        </div>
                        <div className="Inner-xx">
                            <span className="Bracket">{'}'}</span>
                        </div>
                        <div className="Inner-x">
                            <span className="Bracket">]</span>
                        </div>
                        <div className="First">
                            <span className="Bracket">{'}'}</span>
                        </div>
                    </Snippet>
                    <p>
                        When no page is specified it will return<span className="Highlighted">page=0</span>.
                    </p>
                </Article>
            </Section>
        </main>
    );
}

export default Main;