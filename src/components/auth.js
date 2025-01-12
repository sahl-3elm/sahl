import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = document.cookie.split('; ').find(row => row.startsWith('user-cookies='));
    if (!userToken) {
      navigate('/login');
    }
  }, [navigate]);

  return <>{children}</>;
}
