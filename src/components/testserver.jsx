import { useEffect } from 'react';
import { io } from 'socket.io-client';

const TestSocketConnection = () => {
    useEffect(() => {
        const socket = io('http://localhost:5000', {
            transports: ['websocket'],
        });

        socket.on('connect', () => {
            console.log('Connected:', socket.id);
        });

        socket.on('connect_error', (err) => {
            console.error('Connection Error:', err.message);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected');
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return <div>Socket Test</div>;
}

export default TestSocketConnection;
