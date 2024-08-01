"use client"
import Homepage from '@/components/Homepage';
import React, { useEffect, useState } from 'react';
import Articles from '@/components/Articles';
import OneSignal from "react-onesignal";

const Page = () => {

    useEffect(() => {
        const loadOneSignal = async () => {
          try {
            console.log("Loading OneSignal SDK...");
            await OneSignal.init({
              appId: process.env.NEXT_PUBLIC_ONE_SIGNAL,
              allowLocalhostAsSecureOrigin: true,
            });
    
            console.log("OneSignal has been successfully initialized.");
            OneSignal.Slidedown.promptPush();
          } catch (error) {
            console.error("Error initializing OneSignal:", error);
          }
        };
    
        // Check if OneSignal SDK is already loaded
        if (!window.OneSignal) {
          const script = document.createElement('script');
          script.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
          script.async = true;
          script.onload = loadOneSignal;
          script.onerror = () => console.error("Error loading OneSignal SDK script.");
          document.head.appendChild(script);
        } else {
          loadOneSignal();
        }
    
        // Cleanup function
        return () => {
          console.log("Cleaning up OneSignal...");
          // Optionally, you can call OneSignal.logout() if you need to clear the user session
          // OneSignal.logout();
        };
      }, []);
    
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
                    src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&origin=${userLocation.latitude},${userLocation.longitude}&destination=hospital near me`}
                ></iframe>
            )}
            <Homepage/>
            <Articles/>
        </div>
    );
}

export default Page;




