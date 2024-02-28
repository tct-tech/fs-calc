/**
 * @Author: Your name
 * @Date:   2023-04-28 11:51:34
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-02-28 15:12:25
 */
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Contact from './components/Contact'

function App() {
  return (
    <div id="page-container">
      <Header/>
      <div id = "content-wrap">
        <Content/>
      </div>
      <footer id="footer">
        <Contact/>
      </footer>
    </div>
  );
}

export default App;