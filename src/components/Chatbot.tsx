import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    // TODO: Add your API key and endpoint here
    const apiKey = 'YOUR_API_KEY';
    const apiEndpoint = 'YOUR_API_ENDPOINT';

    /*
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      const botMessage = data.reply;

      setMessages([...newMessages, { text: botMessage, sender: 'bot' }]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setMessages([...newMessages, { text: 'Sorry, something went wrong.', sender: 'bot' }]);
    }
    */
  };

  return (
    <div>
      {/* Chat Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button onClick={toggleChat} className="rounded-full w-16 h-16 bg-primary text-white shadow-lg">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.745A9.025 9.025 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 bg-white rounded-lg shadow-2xl">
          <div className="p-4 bg-primary text-white rounded-t-lg">
            <h3 className="text-lg font-semibold">AI Assistant</h3>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-grow"
              />
              <Button onClick={handleSendMessage} className="ml-2">Send</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
