import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from "react";
import QRCodeStyling from "qr-code-styling";


const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: 1,
      size: "256x256",
    }
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url
    console.log(urlData);
    setImageUrl(urlData);
    //downloadImage()
  }
  const [url, setUrl] = useState(imageUrl);
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt
    });
  };

  //qrCode.append(document.getElementById("canvas"));
  //qrCode.download({ name: "qr", extension: "svg" });

  return (
    <div className="App">
      {
        imageUrl
          ? <img src={imageUrl} className="image" alt="ai thing" />
          : <img src={logo} className="image" alt="logo" />
      }
      <div id="canvas"></div>
      <p>Generate a unique image using DALL·E</p>
      <p>What do you want to see?</p>
      <input
        placeholder='A sunset on the Sydney Opera House'
        onChange={(e) => setUserPrompt(e.target.value)}
      />
      <button onClick={() => generateImage()}>Generate</button>
    </div>
  );
}

export default App;