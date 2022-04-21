import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import memesData from "./memesData";
function App() {
  let memes = memesData.data.memes.map(
    (item,index) =>{
      return(
        <Meme
        key = {index}
        {...item}
        />
      )
    }
  )
  return (
    <div className="App">
    <Header/>
    {/* {memes} */}
    <Meme/>
    </div>
  );
}
export default App;
