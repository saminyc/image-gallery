import React, { useEffect, useState } from "react";
import { API_KEY } from "../config";
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src="https://source.unsplash.com/random"
        alt="image"
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by Jane Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>
          <li>
            <strong>Downloads: </strong>
            2000
          </li>
          <li>
            <strong>Likes: </strong>
            1000
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2">
          #tag
        </span>
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
}

export default App;
