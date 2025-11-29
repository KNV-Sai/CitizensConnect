import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuth } from './AuthContext';
import OnlineDataService from '../services/OnlineDataService';

// For demo purposes, we'll use a mock server URL
// In production, replace with your actual Socket.IO server
const SOCKET_URL = 'http://localhost:3001';

const SocketContext = createContext();

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [onlineIssues, setOnlineIssues] = useState([]);
  const [messages, setMessages] = useState([]);
  const [lastOnlineUpdate, setLastOnlineUpdate] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user && !socket) {
      // Initialize socket connection
      const newSocket = io(SOCKET_URL, {
        auth: {
          userId: user.uid,
          role: user.role,
          name: user.name
        },
        transports: ['websocket', 'polling']
      });

      // Connection events
      newSocket.on('connect', () => {
        console.log('Connected to server');
        setIsConnected(true);
      });

      newSocket.on('disconnect', () => {
        console.log('Disconnected from server');
        setIsConnected(false);
      });

      // Ticket events
      newSocket.on('ticket_created', (ticket) => {
        setTickets(prev => [ticket, ...prev]);
      });

      newSocket.on('ticket_updated', (updatedTicket) => {
        setTickets(prev => prev.map(ticket =>
          ticket.id === updatedTicket.id ? updatedTicket : ticket
        ));
      });

      newSocket.on('ticket_voted', (data) => {
        setTickets(prev => prev.map(ticket =>
          ticket.id === data.ticketId
            ? { ...ticket, upvotes: data.upvotes }
            : ticket
        ));
      });

      // Message events
      newSocket.on('message_received', (message) => {
        setMessages(prev => [...prev, message]);
      });

      newSocket.on('messages_loaded', (loadedMessages) => {
        setMessages(loadedMessages);
      });

      newSocket.on('comment_liked', (data) => {
        setMessages(prev => prev.map(msg =>
          msg.id === data.messageId
            ? { ...msg, likes: data.likes, likeCount: data.likeCount }
            : msg
        ));
      });

      setSocket(newSocket);
    }

    return () => {
      if (socket) {
        socket.disconnect();
        setSocket(null);
        setIsConnected(false);
      }
    };
  }, [user]);

  // Ticket functions
  const createTicket = (ticketData) => {
    if (socket && isConnected) {
      socket.emit('create_ticket', {
        ...ticketData,
        author: user.name,
        authorId: user.uid,
        authorRole: user.role,
        createdAt: new Date().toISOString()
      });
    }
  };

  const voteTicket = (ticketId) => {
    if (socket && isConnected) {
      socket.emit('vote_ticket', {
        ticketId,
        userId: user.uid,
        userName: user.name
      });
    }
  };

  const markTicketDone = (ticketId) => {
    if (socket && isConnected) {
      socket.emit('mark_ticket_done', {
        ticketId,
        markedBy: user.uid,
        markedByName: user.name,
        markedByRole: user.role
      });
    }
  };

  const assignPolitician = (ticketId, politicianId) => {
    if (socket && isConnected) {
      socket.emit('assign_politician', {
        ticketId,
        politicianId,
        assignedBy: user.uid
      });
    }
  };

  // Message functions
  const sendMessage = (ticketId, content) => {
    if (socket && isConnected) {
      socket.emit('send_message', {
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        ticketId,
        content,
        author: user.name,
        authorId: user.uid,
        authorRole: user.role,
        timestamp: new Date().toISOString(),
        likes: [],
        likeCount: 0
      });
    }
  };

  const likeComment = (ticketId, messageId) => {
    if (socket && isConnected) {
      socket.emit('like_comment', {
        ticketId,
        messageId,
        userId: user.uid,
        userName: user.name
      });
    }
  };

  const loadMessages = (ticketId) => {
    if (socket && isConnected) {
      socket.emit('load_messages', { ticketId });
    }
  };

  const joinTicketRoom = (ticketId) => {
    if (socket && isConnected) {
      socket.emit('join_ticket_room', { ticketId });
    }
  };

  const leaveTicketRoom = (ticketId) => {
    if (socket && isConnected) {
      socket.emit('leave_ticket_room', { ticketId });
    }
  };

  // Load initial tickets
  useEffect(() => {
    if (socket && isConnected) {
      socket.emit('load_tickets');
    } else {
      // For demo purposes, add some mock tickets if socket isn't connected
      const mockTickets = [
        {
          id: 'mock_1',
          title: 'Potholes on Main Road causing traffic issues',
          description: 'There are several large potholes on MG Road between Gandhi Statue and Clock Tower that need immediate repair. Vehicles are getting damaged and it\'s causing traffic congestion.',
          category: 'Infrastructure',
          priority: 'high',
          status: 'open',
          author: 'Rajesh Kumar',
          authorId: 'demo_user_1',
          authorRole: 'Citizen',
          upvotes: 24,
          voters: [],
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
          location: 'MG Road, Vijayawada'
        },
        {
          id: 'mock_2',
          title: 'Street light not working in Park Street',
          description: 'The street light outside house number 45 on Park Street has been non-functional for the past week. This is causing safety concerns during nighttime.',
          category: 'Public Safety',
          priority: 'medium',
          status: 'solved',
          author: 'Priya Sharma',
          authorId: 'demo_user_2',
          authorRole: 'Citizen',
          upvotes: 12,
          voters: [],
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
          location: 'Park Street, Vijayawada'
        },
        {
          id: 'mock_3',
          title: 'Garbage collection irregular in Sector 7',
          description: 'Municipal garbage collection has been irregular in Sector 7 for the past two weeks. Waste is piling up and causing hygiene issues in the community.',
          category: 'Utilities',
          priority: 'urgent',
          status: 'open',
          author: 'Amit Patel',
          authorId: 'demo_user_3',
          authorRole: 'Citizen',
          upvotes: 31,
          voters: [],
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
          location: 'Sector 7, Vijayawada'
        }
      ];

      // Only add mock data if we don't have any real tickets
      if (tickets.length === 0) {
        setTimeout(() => {
          mockTickets.forEach(ticket => {
            setTickets(prev => [...prev, ticket]);
          });
        }, 1000); // Small delay to simulate loading
      }
    }
  }, [socket, isConnected, tickets.length]);

  // Load online issues on component mount
  useEffect(() => {
    const loadOnlineIssues = async () => {
      try {
        const issues = await OnlineDataService.getOnlineIssues();
        setOnlineIssues(issues);
        setLastOnlineUpdate(OnlineDataService.getLastUpdateTime());
      } catch (error) {
        console.error('Error loading online issues:', error);
      }
    };

    loadOnlineIssues();

    // Set up daily refresh interval (check every hour)
    const refreshInterval = setInterval(async () => {
      if (OnlineDataService.needsUpdate()) {
        console.log('Auto-refreshing online issues...');
        const issues = await OnlineDataService.getOnlineIssues();
        setOnlineIssues(issues);
        setLastOnlineUpdate(OnlineDataService.getLastUpdateTime());
      }
    }, 60 * 60 * 1000); // Check every hour

    return () => clearInterval(refreshInterval);
  }, []);

  // Function to manually refresh online issues
  const refreshOnlineIssues = async () => {
    try {
      const issues = await OnlineDataService.refreshOnlineIssues();
      setOnlineIssues(issues);
      setLastOnlineUpdate(OnlineDataService.getLastUpdateTime());
      return issues;
    } catch (error) {
      console.error('Error refreshing online issues:', error);
      throw error;
    }
  };

  const value = {
    socket,
    isConnected,
    tickets,
    onlineIssues,
    messages,
    lastOnlineUpdate,
    createTicket,
    voteTicket,
    markTicketDone,
    assignPolitician,
    sendMessage,
    loadMessages,
    joinTicketRoom,
    leaveTicketRoom,
    refreshOnlineIssues,
    likeComment
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};
