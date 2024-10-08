'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const API = process.env.NEXT_PUBLIC_API_ROUTE

    useEffect(() => {
        // Crear la conexión WebSocket
        const ws = new WebSocket('wss://mychatapi-oxk8.onrender.com/api');

        ws.onopen = () => {
            console.log('WebSocket conectado');
            setSocket(ws);
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

        // Limpiar la conexión al desmontar el componente
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
