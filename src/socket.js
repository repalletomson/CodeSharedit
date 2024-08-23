import { io } from 'socket.io-client';

export const initSocket = async () => {
    try {
        const options = {
            'force new connection': true,
            reconnectionAttempts: 'Infinity',
            timeout: 10000,
            transports: ['websocket'],
        };
        const socket = io('http://localhost:5000', options); // Hardcoding the URL
        socket.on('connect_error', (err) => {
            console.error('Connection Error:', err.message);
        });
        return socket;
    } catch (error) {
        console.error('Socket initialization failed:', error);
    }
}
