import './App.css';
import './Style.css';
import MyVideo from './myVideo.mp4';
import imgInSrc from './imageInSrc.jpg';
//import imgInPublic from './imageInPublic.jpg';

function App() {
  return (
    <div className="App">
        <div style={{ border: "solid 1px black", maxWidth: "100vw"}}>

            <h1 className='title red'>Your name here</h1>

            <br/>

            <img src={imgInSrc} alt="img in Source" />

            <br/>

            <img src={"./imageInPublic.jpg"} alt="img In Public"/>
        </div>
        <video width="320" height="240" controls>

        <source src={MyVideo} type="video/mp4"/>

        </video>

    </div>
  );
}

export default App;
