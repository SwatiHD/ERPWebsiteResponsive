import React, { useState, useRef } from 'react';
import '../../../src/VoiceRecorder.css';
const VoiceInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Function to request microphone permission and start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not start recording. Please check your microphone permissions.');
    }
  };

  // Function to stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      // Stop all tracks on the stream to release the microphone
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  // Function to cancel recording
  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      // Reset state without saving the audio
      setIsRecording(false);
      setAudioURL('');
      audioChunksRef.current = [];
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className="voice-recorder-container">
      <div className="controls">
        {!isRecording && !audioURL && (
          <button
            onMouseDown={startRecording}
            onTouchStart={startRecording}
            onMouseUp={stopRecording}
            onTouchEnd={stopRecording}
            className="mic-button"
          >
            <i className="mic-icon"><i class="fa-solid fa-microphone-lines"></i></i>
          </button>
        )}
        {isRecording && (
          <div className="recording-status">
            <span>Recording...</span>
            <button onClick={cancelRecording} className="cancel-button">Cancel</button>
          </div>
        )}
      </div>

      {audioURL && (
        <div className="audio-player-container">
          <audio controls src={audioURL} />
          <button onClick={() => setAudioURL('')} className="delete-button">Delete</button>
        </div>
      )}
    </div>
  );
};

export default VoiceInput;