import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginForm from './pages/LoginForm';

const root = createRoot(document.getElementById('react-root'));
root.render(<LoginForm />);
