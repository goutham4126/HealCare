"use client"
import { useState } from "react";
import OpenAI from "openai";
import { IoMdRefresh } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export const openai = new OpenAI({ 
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})
export default function Chatbot() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleUserInput = async () => {
        setChatHistory(prevChat => [
            ...prevChat, { role: 'user', content: userInput },
        ]);
        setUserInput('');
        try{
            const chatCompletion = await openai.chat.completions.create({
                messages: [...chatHistory, { role: 'assistant', content: `I am suffering from ${userInput}.Give me food and exercises to overcome that disease.Give me point wise content.` }],
                model: 'gpt-3.5-turbo',
            });

            setChatHistory(prevChat => [
                ...prevChat,
                {
                    role: 'assistant',
                    content: chatCompletion.choices[0].message.content
                }
            ]);
        }
        catch(err)
        {
            console.log(err)
        }
    };

    return (
        <div className="w-[95%] sm:w-[70vw] lg:w-[35vw] m-auto bg-teal-400 rounded-xl" style={{marginTop:60,boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
            <div onClick={()=>setChatHistory([])}className="flex justify-between p-3">
                <h1 className="font-bold">HealCare</h1>
                <h1><IoMdRefresh className="h-6 w-6"/></h1>
            </div>
            <div className="h-[60vh] overflow-auto p-2 bg-white">
                {
                    chatHistory.map((message, index) => (
                        <div key={index} className="text-gray-500">
                            <div>
                                {
                                  message.role === 'user' ? <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="#" className="h-6 w-6 rounded-full"/> : 
                                  <img src="https://t3.ftcdn.net/jpg/03/22/38/32/360_F_322383277_xcXz1I9vOFtdk7plhsRQyjODj08iNSwB.jpg" alt="#" className="h-8 w-8 rounded-full"/>
                                }
                            </div>
                            <div className={`${message.role === 'user' ?"p-2 mb-1 mt-1":"p-2 mb-1"} rounded-md font-extralight`}>
                                {message.content}
                            </div>  
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center p-2 rounded-md">
                    <input type="text" className="p-2 w-full outline-none text-gray-500" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                    <button onClick={handleUserInput} className="text-teal-400 bg-white p-2"><FaSearch className="h-6 w-5"/></button>
            </div>
        </div>
        
    );
}

