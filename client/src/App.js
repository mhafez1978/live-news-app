
import './App.css';
//import Hello from './components/Hello';
import Header from './components/Header.jsx'
import HeadLines from './components/HeadLines';

function App() {
  return (
    <>
      <Header logo="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" />
      <div className="flex flex-row justify-between mt-20">
        <div className="flex flex-col lg:w-1/3 justify-center">
          <h3 className="ml-28">Latest US News</h3>
          <HeadLines countryCode="us" />
        </div>
        <div className="flex flex-col lg:w-1/3 justify-center">
          <h3 className="ml-28">Latest United Arab Emirates News</h3>
          <HeadLines countryCode="ae" />
        </div>
        <div className="flex flex-col lg:w-1/3 justify-center">
          <h3 className="ml-28">Latest Egypt News</h3>
          <HeadLines countryCode="eg" />
        </div>
      </div>
    </>
  );
}

export default App;
