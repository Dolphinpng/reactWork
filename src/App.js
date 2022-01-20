import Category from "./component/Category"
import Header from './component/Header';
import './App.css';
import Service from "./component/Service"
import Dowload from "./component/Dowloand"
import Staff from "./component/Staff"
import Subscribe from "./component/Subscribe"
import Footer from "./component/Footer";
import Card from "./component/Card";



function App() {
  return ( 
    <div className='App'>
       <Header/>
       <Category/>
       <Card/>
       <Service/>
       <Dowload/>
       <Staff/>
       <Subscribe/>
       <Footer/>
       
      
    </div>
   
  );
}


export default App;
