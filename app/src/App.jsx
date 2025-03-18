import React, { useEffect, useState } from "react";
import { API_KEY } from "../config";
import ImageCard from "./components/ImageCard";
import "./index.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
      setImages(data.hits)
      setIsLoading(false)
    })
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {
          images.map(image=>(<ImageCard key={image.id} image={image}/>))
        }
      </div>
    </div>
      );
}

export default App;
