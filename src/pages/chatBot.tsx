import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { ArrowLeft, Send, Paperclip, FileText, X, MessageCircle, Scale, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  file?: File;
  timestamp: Date;
  isRightsInfo?: boolean;
}

const ChatbotPage: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your legal assistant. I can help you understand your rights, analyze legal documents, and answer legal questions. May I know your name so I can assist you better?",
      timestamp: new Date()
    }
  ]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Rights database with legal information
  const rightsDatabase = {
    'consumer rights': {
      points: [
        'Right to safe products and services',
        'Right to be informed about products before purchase',
        'Right to choose from variety of products at competitive prices',
        'Right to be heard and seek redressal for grievances',
        'Right to consumer education and awareness',
        'Right to healthy environment'
      ],
      articles: [
        'Consumer Protection Act, 2019 - Section 2(9)',
        'Article 47 of Indian Constitution - State duty to improve nutrition and standard of living',
        'UN Guidelines on Consumer Protection (Revised 2015)',
        'Sale of Goods Act, 1930 - Implied conditions and warranties'
      ],
      laws: 'Consumer Protection Act 2019, Sale of Goods Act 1930'
    },
    'fundamental rights': {
      points: [
        'Right to Equality (Article 14-18)',
        'Right to Freedom (Article 19-22)',
        'Right against Exploitation (Article 23-24)',
        'Right to Freedom of Religion (Article 25-28)',
        'Cultural and Educational Rights (Article 29-30)',
        'Right to Constitutional Remedies (Article 32)'
      ],
      articles: [
        'Article 14 - Equality before law',
        'Article 19 - Freedom of speech and expression',
        'Article 21 - Right to life and personal liberty',
        'Article 32 - Right to constitutional remedies'
      ],
      laws: 'Constitution of India, Part III (Articles 12-35)'
    },
    'worker rights': {
      points: [
        'Right to fair wages and equal pay for equal work',
        'Right to safe and healthy working conditions',
        'Right to form and join trade unions',
        'Right to collective bargaining',
        'Right to social security and benefits',
        'Right to reasonable working hours and rest'
      ],
      articles: [
        'Article 23 - Prohibition of forced labor',
        'Article 24 - Prohibition of child labor',
        'Article 43 - Living wage and decent standard of life',
        'Article 43A - Worker participation in industry management'
      ],
      laws: 'Industrial Relations Code 2020, Minimum Wages Act 1948, Factories Act 1948'
    },
    'women rights': {
      points: [
        'Right to equality and non-discrimination',
        'Right to life and liberty',
        'Right to dignity and privacy',
        'Right to work and equal opportunities',
        'Right to protection from violence and harassment',
        'Right to reproductive health and choices'
      ],
      articles: [
        'Article 14 - Equality before law',
        'Article 15 - Prohibition of discrimination on grounds of sex',
        'Article 16 - Equal opportunity in employment',
        'Article 21 - Right to life and personal liberty'
      ],
      laws: 'Protection of Women from Domestic Violence Act 2005, Sexual Harassment at Workplace Act 2013'
    },
    'tenant rights': {
      points: [
        'Right to peaceful enjoyment of rented property',
        'Right to privacy and protection from illegal entry',
        'Right to timely repairs and maintenance',
        'Right to fair rent and protection from arbitrary increases',
        'Right to security deposit protection',
        'Right to proper notice before eviction'
      ],
      articles: [
        'Transfer of Property Act, 1882 - Section 108',
        'Rent Control Acts of various states',
        'Article 19(1)(e) - Right to reside and settle'
      ],
      laws: 'State Rent Control Acts, Transfer of Property Act 1882'
    }
  };

  // Function to extract name from user message
  const extractNameFromMessage = (message: string): string | null => {
    const lowerMessage = message.toLowerCase();
    
    // Common patterns for name introduction
    const namePatterns = [
      /my name is ([a-zA-Z\s]+)/i,
      /i am ([a-zA-Z\s]+)/i,
      /i'm ([a-zA-Z\s]+)/i,
      /call me ([a-zA-Z\s]+)/i,
      /this is ([a-zA-Z\s]+)/i
    ];
    
    for (const pattern of namePatterns) {
      const match = message.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    }
    
    // If user just says a single word that could be a name (and no userName is set)
    const words = message.trim().split(' ');
    if (words.length === 1 && words[0].length > 1 && !userName && 
        /^[a-zA-Z]+$/.test(words[0]) && words[0].length <= 20) {
      return words[0];
    }
    
    return null;
  };

  // Function to detect greeting with personalization
  const detectGreeting = (query: string): string | null => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || 
        lowerQuery.includes('hey') || lowerQuery.includes('good morning') ||
        lowerQuery.includes('good afternoon') || lowerQuery.includes('good evening')) {
      
      if (userName) {
        return `Hello ${userName}! Great to see you again. How can I assist you with your legal questions today?`;
      } else {
        return `Hello! Nice to meet you. I'm your personal legal assistant. May I know your name so I can provide better personalized assistance?`;
      }
    }
    
    return null;
  };
  const detectRightsQuery = (query: string): string | null => {
    const lowerQuery = query.toLowerCase();
    const rightsKeywords = Object.keys(rightsDatabase);
    
    for (const keyword of rightsKeywords) {
      if (lowerQuery.includes(keyword) || lowerQuery.includes(keyword.replace(' ', ''))) {
        return keyword;
      }
    }
    
    // Additional keyword matching
    if (lowerQuery.includes('constitutional') || lowerQuery.includes('fundamental')) {
      return 'fundamental rights';
    }
    if (lowerQuery.includes('employee') || lowerQuery.includes('labor')) {
      return 'worker rights';
    }
    if (lowerQuery.includes('gender') || lowerQuery.includes('female')) {
      return 'women rights';
    }
    if (lowerQuery.includes('rent') || lowerQuery.includes('landlord')) {
      return 'tenant rights';
    }
    if (lowerQuery.includes('customer') || lowerQuery.includes('buyer')) {
      return 'consumer rights';
    }
    
    return null;
  };

  // Function to generate rights response with personalization
  const generateRightsResponse = (rightsType: string): string => {
    const rightsInfo = rightsDatabase[rightsType as keyof typeof rightsDatabase];
    if (!rightsInfo) return "I couldn't find specific information about that type of rights.";

    const nameGreeting = userName ? `${userName}, here's` : "Here's";
    let response = `${nameGreeting} comprehensive information about **${rightsType.toUpperCase()}**:\n\n`;
    
    response += "**🔹 Key Rights & Protections:**\n";
    rightsInfo.points.forEach((point, index) => {
      response += `${index + 1}. ${point}\n`;
    });
    
    response += "\n**📋 Relevant Legal Articles:**\n";
    rightsInfo.articles.forEach((article, index) => {
      response += `• ${article}\n`;
    });
    
    response += `\n**⚖️ Primary Laws:** ${rightsInfo.laws}\n\n`;
    
    const personalizedHelp = userName ? 
      `💡 **${userName}, need more specific help?** Feel free to ask about any particular aspect or upload relevant documents for detailed analysis!` :
      "💡 **Need more specific help?** Feel free to ask about any particular aspect or upload relevant documents for detailed analysis!";
    
    response += personalizedHelp;
    
    return response;
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (): void => {
    if (message.trim() || uploadedFile) {
      const newMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        content: message.trim(),
        file: uploadedFile || undefined,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      setUploadedFile(null);

      // Generate intelligent bot response
      setTimeout(() => {
        // Check if user is introducing themselves
        const extractedName = extractNameFromMessage(message);
        if (extractedName && !userName) {
          setUserName(extractedName);
          const botResponse: Message = {
            id: messages.length + 2,
            type: 'bot',
            content: `Nice to meet you, ${extractedName}! I'm here to help you with all your legal questions and rights information. How can I assist you today?`,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botResponse]);
          return;
        }

        // Check for greetings
        const greetingResponse = detectGreeting(message);
        if (greetingResponse) {
          const botResponse: Message = {
            id: messages.length + 2,
            type: 'bot',
            content: greetingResponse,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botResponse]);
          return;
        }

        // Check for rights queries
        const rightsType = detectRightsQuery(message);
        let botContent = "I understand your query. Let me analyze this for you and provide relevant legal information...";
        let isRightsInfo = false;

        if (rightsType) {
          botContent = generateRightsResponse(rightsType);
          isRightsInfo = true;
        } else if (uploadedFile) {
          const fileGreeting = userName ? 
            `${userName}, I've received your document.` : 
            "I've received your document.";
          botContent = `${fileGreeting} Let me analyze it for legal information and potential rights violations or protections that may apply...`;
        } else {
          // General legal assistance with personalization
          const personalizedResponses = [
            userName ? `${userName}, I'm here to help with your legal question. Could you provide more specific details about your situation?` : "I'm here to help with your legal question. Could you provide more specific details about your situation?",
            userName ? `Based on your query, ${userName}, I can provide general legal guidance. For personalized advice, please consult with a qualified attorney.` : "Based on your query, I can provide general legal guidance. For personalized advice, please consult with a qualified attorney.",
            userName ? `${userName}, let me help you understand the legal aspects of your question. What specific area of law are you concerned about?` : "Let me help you understand the legal aspects of your question. What specific area of law are you concerned about?"
          ];
          botContent = personalizedResponses[Math.floor(Math.random() * personalizedResponses.length)];
        }

        const botResponse: Message = {
          id: messages.length + 2,
          type: 'bot',
          content: botContent,
          timestamp: new Date(),
          isRightsInfo
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setUploadedFile(file);
        setIsUploading(false);
      }, 1500);
    }
  };

  const removeFile = (): void => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTimestamp = (timestamp: Date): string => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-2">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Know Your Rights</h1>
                <p className="text-sm text-gray-600">Personal Legal Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-4">
                <MessageCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Know Your Rights
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Personal Legal Assistant
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get instant legal guidance, document analysis, and personalized assistance. 
              Upload documents or ask questions to get started.
            </p>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Document Analysis</h3>
                <p className="text-sm text-gray-600">Upload legal documents for instant analysis</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <Scale className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Rights Information</h3>
                <p className="text-sm text-gray-600">Learn about your legal rights and protections</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <Bot className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Legal Guidance</h3>
                <p className="text-sm text-gray-600">Get answers to your legal questions instantly</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start gap-3 max-w-xs lg:max-w-md ${
                        msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          msg.type === 'user'
                            ? 'bg-primary'
                            : 'bg-gradient-to-r from-secondary to-primary'
                        }`}
                      >
                        {msg.type === 'user' ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          msg.type === 'user'
                            ? 'bg-primary text-white'
                            : msg.isRightsInfo
                            ? 'bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 border border-blue-200'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className={`text-sm ${msg.isRightsInfo ? 'whitespace-pre-line' : ''}`}>
                          {msg.isRightsInfo ? (
                            <div dangerouslySetInnerHTML={{ 
                              __html: msg.content
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-blue-800">$1</strong>')
                                .replace(/🔹|📋|⚖️|💡/g, '<span class="text-lg">$&</span>')
                            }} />
                          ) : (
                            <p>{msg.content}</p>
                          )}
                        </div>
                        {msg.file && (
                          <div className="mt-2 p-2 bg-white/20 rounded-lg flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span className="text-xs truncate">{msg.file.name}</span>
                          </div>
                        )}
                        <p className="text-xs mt-1 opacity-70">
                          {formatTimestamp(msg.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* File Upload Preview */}
              {uploadedFile && (
                <div className="px-6 py-3 bg-blue-50 border-t border-b">
                  <div className="flex items-center justify-between bg-white rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{uploadedFile.name}</p>
                        <p className="text-xs text-gray-500">
                          {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removeFile}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-6 border-t bg-gray-50/50">
                <div className="flex items-end gap-3">
                  <div className="flex-1">
                    <div className="relative">
                      <textarea
                        value={message}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={userName ? 
                          `Hi ${userName}! Ask about legal rights, upload documents, or get legal guidance...` : 
                          "Ask about your legal rights (e.g., 'consumer rights', 'worker rights'), upload documents, or tell me your name..."
                        }
                        rows={3}
                        className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute right-2 bottom-2 text-gray-400 hover:text-primary"
                        disabled={isUploading}
                      >
                        <Paperclip className="h-4 w-4" />
                      </Button>
                    </div>
                    {isUploading && (
                      <p className="text-xs text-blue-600 mt-1 flex items-center gap-2">
                        <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        Uploading document...
                      </p>
                    )}
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim() && !uploadedFile}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 px-6 py-3 h-auto"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                  className="hidden"
                />

                <div className="flex items-center justify-between mt-3">
                  <p className="text-xs text-gray-500">
                    Supported files: PDF, DOC, DOCX, TXT, JPG, PNG (Max 10MB)
                  </p>
                  <p className="text-xs text-gray-500">
                    Press Enter to send, Shift + Enter for new line
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <p className="text-sm text-yellow-800">
                <strong>Disclaimer:</strong> This AI assistant provides general legal information only. 
                For specific legal advice, please consult with a qualified attorney.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;