'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
const idUser = Cookies.get('idUser')

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [incomingMessage, setIncomingMessage] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('wss://mychatapi-oxk8.onrender.com/api');

        ws.onopen = () => {
            console.log('WebSocket conectado');
            setSocket(ws);
            ws.send(JSON.stringify({ action: 'register', idUser}))
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setIncomingMessage(message);
        };

        ws.onerror = (error) => {
            console.error('Error en WebSocket:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket cerrado');
            setSocket(null);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ socket, incomingMessage }}>
            {children}
        </WebSocketContext.Provider>
    );};

export const useWebSocket = () => {
    return useContext(WebSocketContext);
};
