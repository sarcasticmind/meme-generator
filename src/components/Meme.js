import { useEffect, useState } from "react";

export default function Meme() {
  // store meme object in state
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  //destructuring object
  let { topText, bottomText, randomImage } = meme;

  // store memes data in state
  const [allMemes, setAllMemes] = useState([]);

  //API call
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);
  // Generate a random image url from state
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  //On text change events
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  // Rendring form
  return (
    <main>
      {/* Form */}
      <div className="form">
        <input
          placeholder="Top text"
          type="text"
          name="topText"
          value={topText}
          onChange={handleChange}
        />
        <input
          placeholder="Bottom text"
          type="text"
          name="bottomText"
          value={bottomText}
          onChange={handleChange}
        />
        <input
          onClick={getMemeImage}
          type="button"
          value="Get a new meme image 🖼"
        />
      </div>
      {/* Meme */}
      <div className="meme">
        <img src={randomImage} />
        <h2 className="meme--text top">{topText}</h2>
        <h2 className="meme--text bottom">{bottomText}</h2>
      </div>
    </main>
  );
}
