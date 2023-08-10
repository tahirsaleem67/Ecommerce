import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voices = () => {
    const [speech, setSpeech] = useState('');
    const [inputValue, setInputValue] = useState('');

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        resetTranscript();
    };

    const startListening = () => {
        setInputValue('');
        SpeechRecognition.startListening();
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue || transcript}
                onChange={handleInputChange}
            />
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={startListening}>Start</button>
        </div>
    );
};

export default Voices;
