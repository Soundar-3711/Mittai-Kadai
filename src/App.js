//import logo from './logo.svg';
import './App.css';
import AppBar from './Components/AppBar.js';
import Banner from './Components/Banner.js';
import Comments from './Components/Comments.js';
import Menu from './Components/Menu.js';
import PickoftheWeek from './Components/PickoftheWeek.js';

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu />
      <PickoftheWeek />
      <Comments />
      <div className="text-center my-3 text-success small">
        Copyright © 2024
      </div>
    </>
  );
}

export default App;
