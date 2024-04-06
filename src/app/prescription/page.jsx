"use client"
import { useState } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
});

export default function Chatbot() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleUserInput = async () => {
        setChatHistory(prevChat => [
            ...prevChat, { role: 'user', content: userInput },
        ]);
        setUserInput('');
        const chatCompletion = await openai.chat.completions.create({
            messages: [...chatHistory, { role: 'assistant', content: `I am suffering from ${userInput}.Give me food and exercises to overcome this disease in less than 10 sentences.` }],
            model: 'gpt-3.5-turbo',
        });

        setChatHistory(prevChat => [
            ...prevChat,
            {
                role: 'assistant',
                content: chatCompletion.choices[0].message.content
            }
        ]);
    };

    return (
        <div className="w-[95%] sm:w-[70vw] lg:w-[60vw] m-auto border-2 border-teal-400 sm:rounded-xl" style={{marginTop:85}}>
            <button onClick={()=>setChatHistory([])} className="bg-red-700 text-white p-2 m-2 rounded-md">Clear chat</button>
            <hr className="border border-gray-100"/>
            <div className="h-[50vh] overflow-auto p-2">
                {
                    chatHistory.map((message, index) => (
                        <div key={index} className="text-gray-500">
                            <div>
                                {
                                  message.role === 'user' ? <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="#" className="h-7 w-7 rounded-full"/> : 
                                  <img src="https://static.vecteezy.com/system/resources/previews/026/530/105/original/customer-support-icon-chat-support-help-vector.jpg" alt="#" className="h-8 w-8 rounded-full"/>
                                }
                            </div>
                            <div className="bg-white p-1 rounded-md">
                                {message.content}
                            </div>  
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                    <input type="text" className="p-2 m-2 border border-gray-200 w-full outline-none text-gray-500 rounded-md" placeholder="Type disease here..." value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                    <button onClick={handleUserInput} className="bg-teal-500 text-white p-2 m-2 rounded-md">Ask</button>
            </div>
        </div>
    );
}
