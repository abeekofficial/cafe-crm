import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

const SOCKET_URL = 'ws://127.0.0.1:8000';

const WebSocketComponent = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Your token
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NDE5MTI1LCJpYXQiOjE3MzgzMzI3MjUsImp0aSI6ImFlYjYwNWY1NWEwNDQ3OTNhMWFiZGRlMzc2ZGY4ZDA5IiwidXNlcl9pZCI6MX0.mbgJtT3kMzqgYwhXyu--IRfxDrDNygsVm-eyV_LETJI';

    // Connecting to the WebSocket with the token passed in the `auth` field
    const socketConnection = io(SOCKET_URL, {
      transports: ['websocket'],
      auth: {
        token: authToken, // Pass token in the `auth` field
      },
      transportOptions: {
        websocket: {
          pingInterval: 25000, // Time in ms to send ping
          pingTimeout: 5000,   // Time in ms to wait for pong response
        }
      },
    });

    setSocket(socketConnection);

    socketConnection.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socketConnection.on('order-notify', (data) => {
      console.log('Received order notification:', data);
    });

    socketConnection.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    socketConnection.on('disconnect', (reason) => {
      console.log('Disconnected:', reason);
    });

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Client</h1>
      <p>Status: {socket ? 'Connected' : 'Not connected'}</p>
    </div>
  );
};

export default WebSocketComponent;