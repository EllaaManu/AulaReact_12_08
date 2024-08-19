import Data from "./meusComponentes/Data.js"

function App() {
  return (
    <div className="App">
      <Data texto="Data e hora atuas:" timeZone='-3.00'/> 
      <Data texto="Data e hora atuas (LONDRES):" timeZone='1.00'/> 
      <Data texto="Data e hora atuas(NYC):" timeZone='-4.00'/> 
    </div>
  );
}

export default App;
