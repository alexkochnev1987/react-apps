import { useAuth } from 'hook/useAuth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function Auth({ child }: { child: JSX.Element }) {
  const user = useAuth();
  const location = useLocation();
  if (!user.isUser) {
    return (
      <>
        <Navigate to="/login" state={{ from: location }} />;
      </>
    );
  }

  return child;
}
