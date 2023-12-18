"use client";

import { useState, useEffect, useCallback, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function Scanner({ handleResult }) {

  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    return () => {
      // Cleanup the camera stream when the component is unmounted
      if ( streamRef.current ) {
        const tracks = streamRef.current.getTracks();
        tracks.forEach( track => track.stop() );
      }
      streamRef.current = null;
    };
  }, []);

  useEffect(() => {
    if( videoRef!==null && videoRef.current!==null ){
      if (status) {
        startStream();
        // videoRef.current.play();
        handleBarcodeDetection();
      } else {
        // videoRef.current.pause();
        stopStream();
      }
    }
  }, [status]);

  const startStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        {
          audio: false,
          video: {
            facingMode: 'environment',
            height: frameRef.current.offsetWidth,
            width: frameRef.current.offsetHeight
          }
        }
      );
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      // Log the dimensions of the video stream
      videoRef.current.onloadedmetadata = () => {
        console.log('Video Dimensions:', videoRef.current.videoWidth, ' x ', videoRef.current.videoHeight);
    };
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopStream = () => {
    if ( streamRef.current ) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach( track => track.stop() );
    }
  }

  
  const handleStatusChange = (status: boolean) => {
    setStatus(status);
  }

  const handleBarcodeDetection = async () => {
  
    const ctx = canvasRef.current.getContext("2d");
    // set canvas width and height to match videoRef.current.videoWidth and videoRef.current.videoHeight
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;

  
    const barcodeDetector = new BarcodeDetector({
      formats: ['upc_a', 'ean_8', 'ean_13']
    });
    
    const myInterval = setInterval(async () => {
      const barcodes = await barcodeDetector.detect( videoRef.current );

      if (barcodes.length === 0)
        return;

      //! I don't know why interval not clearing!
      clearInterval(myInterval);

      let canvas = canvasRef.current;
      // Clear prev drawing and draw new bounding box
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      // Add a shot of the video stream to the canvas
      ctx.drawImage(videoRef.current, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.beginPath()
      ctx.lineWidth = "3";
      ctx.strokeStyle = "red";
      ctx.moveTo(barcodes[0].cornerPoints[0].x, barcodes[0].cornerPoints[0].y);
      ctx.lineTo(barcodes[0].cornerPoints[1].x, barcodes[0].cornerPoints[1].y);
      ctx.lineTo(barcodes[0].cornerPoints[2].x, barcodes[0].cornerPoints[2].y);
      ctx.lineTo(barcodes[0].cornerPoints[3].x, barcodes[0].cornerPoints[3].y);
      ctx.closePath();
      ctx.stroke();

      // send result to parent
      handleResult(barcodes[0].rawValue);
      // Pause video and stop barcode detection interval
      handleStatusChange(false);

    }, 1000);
  };


  if ( !isBarcodeDetectorAvailable() ) {
    return (
      <div className="w-full h-1/2 flex flex-col justify-center items-center">
        <p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API"><u>Barcode Detector API</u></a> is not supported by your <a href="https://caniuse.com/mdn-api_barcodedetector"><u>browsers</u></a>!</p>
        <p>Please open this page in your mobile browser.</p>
      </div>
    )
  }

  return (
    <div ref={frameRef} className="relative w-full h-2/4">
      <video className="w-full h-full" ref={videoRef} onLoadedMetadata={handleBarcodeDetection}>
        Your browser does not support the video tag.
      </video>
      <canvas id="myCanvas" ref={canvasRef} className="absolute top-0 left-0" width={200} height={300}></canvas>
      {!status && <FontAwesomeIcon icon={faClose} className='absolute top-0 right-0 m-4 text-2xl text-white cursor-pointer' onClick={()=>handleStatusChange(true)} />}
    </div>
  )
}

export function isBarcodeDetectorAvailable(){
  return ("BarcodeDetector" in window);
};
