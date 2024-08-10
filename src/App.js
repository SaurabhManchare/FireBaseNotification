import logo from './logo.svg';
import './App.css';
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";
import { useState, useEffect } from 'react';

function App() {
  const [notification, setNotification] = useState(null);

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, { vapidKey: 'BMtPFAveDlvLBpvgT-_IdkRKsscQRdhwaFhAYzmRAlz_29IkjV_K323G2OZqcA_RMo1Q9B4GAI6BgzyvdOa6C54' });
      console.log("Token Generated:", token);
    } else if (permission === "denied") {
      alert("You Denied Notifications.");
    }
  }

  const handleMessaging = (payload) => {

    setNotification({
      title: payload.notification?.title,
      body: payload.notification?.body,
      // Add other notification properties as needed (e.g., icon, click action)
    });
  };

  useEffect(() => {
    requestPermission()
    const unsubscribe = onMessage(messaging, (payload) => {
      handleMessaging(payload);
    });
  
    return () => {
      unsubscribe(); // Call the unsubscribe function here
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {notification && (
          <div>
            <h2>Notification</h2>
            <p>Title: {notification.title}</p>
            <p>Body: {notification.body}</p>
            {/* Add functionality to handle notification clicks (if needed) */}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
