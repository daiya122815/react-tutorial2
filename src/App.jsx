import { useState } from "react";

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [randomXItem, setRandomXItem] = useState("");
  const [randomYItem, setRandomYItem] = useState("");
  const [randomZItem, setRandomZItem] = useState("");
  // const [name, setName] = useState("");
  const [ukus, setUkus] = useState("us");


  function handleClick(event) {
    event.preventDefault();

    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
    // const newUserName = event.target.elements.nameField;

    setShowStory(true);
    setRandomXItem(randomValueFromArray(xItems));
    setRandomYItem(randomValueFromArray(yItems));
    setRandomZItem(randomValueFromArray(zItems));
    // setName(newUserName);
    // nameField.focus();
  }

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" />
        {/* <input type="text" placeholder="" required name="nameField" class="nameField"/> */}
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} />
      </div>
      <div>
        {/* <button onClick={() => { handleClick }}>Generate random story</button> */}
        <button onClick={handleClick}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 fahrenheit outside, so {randomXItem} went for a walk. When they
          got to {randomYItem}, they stared in horror for a few moments, then {randomZItem}.
          Bob saw the whole thing, but was not surprised — {randomXItem} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );
}