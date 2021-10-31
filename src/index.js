import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './context/context';
import { SpeechProvider } from '@speechly/react-client';
import App from './App.js';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="14c28d97-9b56-48d6-9664-cbe1311cb6e5" language="en-US">
        <Provider>
        <App />
        </Provider>
    </SpeechProvider>
, document.getElementById('root'));