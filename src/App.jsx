import React, { useState } from 'react';
import './App.css'

const App = () => {
  // State to track the user's selection
  const [isNoClicked, setIsNoClicked] = useState(false);
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [isAreyousureClicked, setIsAreYouSureClicked] = useState(false);
  const [isAgainClicked, setIsAgainClicked] = useState(false);
  const [isAgain1Clicked, setIsAgain1Clicked] = useState(false);
  const [isAgain2Clicked, setIsAgain2Clicked] = useState(false);
  const [isAgain3Clicked, setIsAgain3Clicked] = useState(false);
  const [isAgain4Clicked, setIsAgain4Clicked] = useState(false);

  const [imageSrc, setImageSrc] = useState('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHhkdnZwczZhdm1jNGNqaTVxOXBpOHFkMm03ZGh5ajRwYWlnb2J0eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qJKG2VemiNjO7Fv4Ct/giphy.gif');

  // Handle the 'Yes' button click
  const handleYesClick = () => {
    setIsYesClicked(true);
    alert('Yay! You said YES! ❤️');
    setImageSrc('https://media.giphy.com/media/aIwDgLaYu0cgwRdvGZ/giphy.gif?cid=790b76113jmybbrx5c029pjipu5cpa4wylplm5nlely2smey&ep=v1_gifs_search&rid=giphy.gif&ct=g')
  };

  // Handle the 'No' button click
  const handleNoClick = () => {
    setIsNoClicked(true); // Show the 'Are you sure?' button
    setImageSrc('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjZ1OXAzMTdobnA5eW5pOXpuaW1ncjQzaGVjMHZyMzd5M3MxYWV5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pCUGhXbQxCdrlv1qbo/giphy.gif');
  };

  // Handle the 'Are you sure?' button click
  const handleAreYouSureClick = () => {
    // You can handle this however you like (e.g., confirm the choice, reset, etc.)
    setIsAreYouSureClicked(true); // Reset to initial state
    setImageSrc('https://media.giphy.com/media/7uh9L0ykN2sszet1H3/giphy.gif?cid=ecf05e47o4ikoyiauvcq2jw813trye8ifufw36g9lei7q85u&ep=v1_gifs_search&rid=giphy.gif&ct=g')
  };

  const handleAgainClick = () => {
    setIsAgainClicked(true); // Show the 'Yes' button
    setImageSrc('https://media.giphy.com/media/yV1anhmcHNQc6bc2R4/giphy.gif?cid=ecf05e47ttaz0jet5d0sd90pwtwt3qntp00eo97g74ulcaoj&ep=v1_gifs_search&rid=giphy.gif&ct=g')
  };

  const handleAgain1Click = () => {
    setIsAgain1Clicked(true); // Show the 'Yes' button
    setImageSrc('https://media.giphy.com/media/7LrcJm3K8eesfihfOf/giphy.gif?cid=790b7611dgtkqfrngb7dbzqiavfl7nfahseznbjgv03imy0k&ep=v1_gifs_search&rid=giphy.gif&ct=g')
  };

  const handleAgain2Click = () => {
    setIsAgain2Clicked(true); // Show the 'Yes' button
    setImageSrc('https://media.giphy.com/media/kD62fyVdWl4UmtfLiA/giphy.gif?cid=790b76115tytzpqjho0uzm7i648gayqhvow93rdo2thpoecg&ep=v1_gifs_search&rid=giphy.gif&ct=g')
  };

  const handleAgain3Click = () => {
    setIsAgain3Clicked(true); // Show the 'Yes' button
    setImageSrc('https://media.giphy.com/media/jCVcrUnuvz9XZ7IZwJ/giphy.gif?cid=790b761107qhv9wczs9iioo8lajrxsnmigj0rkhh5oig9m2a&ep=v1_gifs_search&rid=giphy.gif&ct=g')
  };
  const handleAgain4Click = () => {
    setIsAgain4Clicked(true);
    setIsYesClicked(true);
    alert('Yay! You said YES! ❤️'); // Show the 'Yes' button
    setImageSrc('https://media.giphy.com/media/aIwDgLaYu0cgwRdvGZ/giphy.gif?cid=790b76113jmybbrx5c029pjipu5cpa4wylplm5nlely2smey&ep=v1_gifs_search&rid=giphy.gif&ct=g')

  };

  return (
    <div className="valentine-app">
      <img src={imageSrc} height="400px" alt="Valentine GIF" />
      <h1>Will you be my Valentine?</h1>

      {!isYesClicked && !isNoClicked ? (
        <>
          <div className='button-container'>
            {/* "Yes" button */}
            <button onClick={handleYesClick}>Yes 💖</button>

            {/* "No" button */}
            <button onClick={handleNoClick}>No ❌</button>
          </div>
        </>
      ) : isNoClicked && !isAreyousureClicked ? (

        <button onClick={handleAreYouSureClick}>Are you sure? 💔</button>
      ) : isAreyousureClicked && !isAgainClicked ? (
        <button onClick={handleAgainClick}>Think Again!! I think your heart knows what’s best 💖</button>
      ) : isAgainClicked && !isAgain1Clicked ? (
        <button onClick={handleAgain1Click}>You’re too awesome to miss out on this, just think about it from the heart, not the head 💭💘!</button>
      ) : isAgain1Clicked && !isAgain2Clicked ? (
        <button onClick={handleAgain2Click}>Hmmm… think about it. You’re too cute to say no to this kind of opportunity ❤️</button>
      ) : isAgain2Clicked && !isAgain3Clicked ? (
        <button onClick={handleAgain3Click}>Your heart knows what it wants… and I think it’s saying yes 💖</button>
      ) : isAgain3Clicked && !isAgain4Clicked ? (
        <div className='button-container'>
        <button onClick={handleAgain4Click}>I can feel you are saying YES 💖</button>
        <button onClick={handleYesClick}>Yes 💖</button>
        </div>
      ) :
        (
          // If "Yes" is clicked, show confirmation
          <div className="confirmation-message">
            <h2>Thanks for being my Valentine! 💘</h2>
          </div>
        )}
    </div>
  );
};

export default App;



