"use client"
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                    setLoading(false);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setLoading(false);
                }
            );
        } else {
            console.error('Geolocation is not supported by your browser.');
            setLoading(false);
        }
    }, []);

    return (
        <div>
            {loading ? (
                <div className="flex justify-center h-screen items-center mb-12">
                    <img className="w-10 h-10 animate-spin" src="https://www.svgrepo.com/show/491270/loading-spinner.svg" alt="Loading icon"/>
                </div>
            ) : (
                <iframe
                    width="100%"
                    height="100%"
                    className="h-[90vh]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyCAYhOv9bpaK9lPFyTNxDoaeUbDXOUDvec&origin=${userLocation.latitude},${userLocation.longitude}&destination=hospital`}
                ></iframe>
            )}
        </div>
    );
}

export default Page;