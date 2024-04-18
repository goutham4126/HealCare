"use client"
import { useState } from "react";
import OpenAI from "openai";
import { IoMdRefresh } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useSession } from "next-auth/react";

export const openai = new OpenAI({ 
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})
export default function Chatbot() {
    const {data:session}=useSession()
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleUserInput = async () => {
        setChatHistory(prevChat => [
            ...prevChat, { role: 'user', content: userInput },
        ]);
        setUserInput('');
        try{
            const chatCompletion = await openai.chat.completions.create({
                messages: [...chatHistory, { role: 'assistant', content: `I am suffering from ${userInput}.Give me food and exercises to overcome that disease in 5 sentences.` }],
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
        <div className="w-[95%] sm:w-[70vw] lg:w-[35vw] m-auto bg-teal-500 rounded-xl" style={{marginTop:80,boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
            <div onClick={()=>setChatHistory([])}className="flex justify-between p-3">
                <h1 className="font-semibold">HealCare</h1>
                <h1><IoMdRefresh className="h-6 w-6"/></h1>
            </div>
            <div className="h-[60vh] overflow-auto p-2 bg-white">
                {
                    chatHistory.map((message, index) => (
                        <div key={index} className="text-gray-500">
                            <div>
                                {
                                  message.role === 'user' ? <img src={session.user.image} alt="#" className="h-7 w-7 rounded-full"/> : 
                                  <img src="https://miro.medium.com/v2/resize:fit:962/1*I9KrlBSL9cZmpQU3T2nq-A.jpeg" alt="#" className="h-7 w-7 rounded-full border border-teal-500 p-1"/>
                                }
                            </div>
                            <div className={`${message.role === 'user' ?"bg-slate-200":"bg-neutral-200"} rounded-md text-sm font-medium p-2 my-1.5`}>
                                {message.content}
                            </div>  
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center p-2">
                    <input type="text" className="p-2 w-full outline-none rounded-s-md text-sm font-medium" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Enter your disease here"/>
                    <button onClick={handleUserInput} className="text-teal-500 bg-white p-2 rounded-e-md"><FaSearch className="h-6 w-5"/></button>
            </div>
        </div>
        
    );
}

