import './App.css';
import FullName from './FullName';
import ProfilePhoto from './ProfilePhoto';
import Adress from './Address';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
