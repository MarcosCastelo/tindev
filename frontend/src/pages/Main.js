import React from 'react';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }){
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/13232420?v=4" alt=""/> 
                    <footer>
                        <strong>Marcos Castelo</strong>
                        <p>Programador e tocador de birimbau</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                        <button type="button">
                            <img src={dislike} alt="dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/13232420?v=4" alt=""/> 
                    <footer>
                        <strong>Marcos Castelo</strong>
                        <p>Programador e tocador de birimbau</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                        <button type="button">
                            <img src={dislike} alt="dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/13232420?v=4" alt=""/> 
                    <footer>
                        <strong>Marcos Castelo</strong>
                        <p>Programador e tocador de birimbau</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                        <button type="button">
                            <img src={dislike} alt="dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/13232420?v=4" alt=""/> 
                    <footer>
                        <strong>Marcos Castelo</strong>
                        <p>Programador e tocador de birimbau</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="like"/>
                        </button>
                        <button type="button">
                            <img src={dislike} alt="dislike"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}