/**
 * @Author: Your name
 * @Date:   2023-04-28 11:51:34
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-02-28 15:13:56
 */
import React from 'react';
import '../styles/styles.css';

const Header = () => {
    return(
        <div className='header'>
            <h1 className="small-screen-label headerText">Feeds & Speeds Calc.</h1>
            <h1 className="large-screen-label headerText">Feeds & Speeds Calculator</h1>
        </div>
    );
}

export default Header;