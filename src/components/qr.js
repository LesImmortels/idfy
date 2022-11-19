import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Extension,
  Options
} from "qr-code-styling";


const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);



export default function App() {
  const [url, setUrl] = useState("https://qr-code-styling.com");
  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    data: 'http://qr-code-styling.com',
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q'
    },
    image: '/favicon.ico',
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.5,
      crossOrigin: 'anonymous',
    }
  });
  const [qrCode] = useState (new QRCodeStyling(options))
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  // const [userPrompt, setUserPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  let userPrompt = "";
  let hasloaded = true;
  let urlData = "";

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: 1,
      size: "256x256",
    }
    const response = await openai.createImage(imageParameters);
    urlData = response.data.data[0].url;
    setImageUrl(urlData);
    hasloaded = true;
  }

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);


  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  const onGenerateClick = async () => {
    userPrompt = "away balance left object delay parent crucial quarter security afraid physical appear kit trim welcome impact father hold art coin win ignore fashion furnace";
    await generateImage();

    setOptions(options => ({
      ...options,
      image: urlData,
      data: urlData
    }));

  };


  return (
    <div className="QR">
      <div style={styles.inputWrapper}>
        <button onClick={onGenerateClick} 
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Generate
        </button>
      </div>
      <div ref={ref} />
    </div>
  );
}

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20
  }
};
