import React, { useState, useRef } from "react";

function CameraApp({ setImageURL }) {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    setStream(stream);
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };

  const takePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataURL = canvas.toDataURL("image/jpeg");
      setImageURL(imageDataURL);
    }
  };

  return (
    <div>
      <button id="start-camera" onClick={startCamera}>
        Start Camera
      </button>
      <video id="video" ref={videoRef} autoPlay muted />
      <button id="click-photo" onClick={takePhoto}>
        Take Photo
      </button>
      <canvas id="canvas" ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

export default CameraApp;
