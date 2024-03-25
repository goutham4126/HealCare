"use client"
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const sellerAddress = "hospital near me";
        
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
        <div className="bg-orange-100">
                    {loading ? (
                        <p>Loading...</p>
                    ) : userLocation ? (
                        <>
                            <iframe
                                width="100%"
                                height="100%"
                                className="h-[90vh]"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={
                                     userLocation && sellerAddress
                                        ? `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCAYhOv9bpaK9lPFyTNxDoaeUbDXOUDvec&origin=${userLocation.latitude},${userLocation.longitude}&destination=${sellerAddress}`
                                        : `https://www.google.com/maps/embed/v1/place?key=AIzaSyCAYhOv9bpaK9lPFyTNxDoaeUbDXOUDvec&q=${userLocation.latitude},${userLocation.longitude}`
                                }
                            ></iframe>
                        </>
                    ) : (
                        <p>Error getting user location.</p>
                    )}
            </div>
    );
}

export default Page;
