import './App.css';
import Header from './componenets/Header';
import Sidebar from "./componenets/Sidebar";
import Feed from './componenets/Feed';
import Widgets from './componenets/Widgets';
import Login from './componenets/Login';
import { useStateValue } from './componenets/StateProvider';
import Footer from './componenets/Footer';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (<><Login/><Footer/></>) : (
        <>
          <Header />

          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
