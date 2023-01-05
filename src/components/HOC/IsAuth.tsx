import { useAuth } from 'hook/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function IsAuth({ child }: { child: JSX.Element }) {
  const user = useAuth();
  if (user.isUser) {
    return (
      <>
        <Navigate to="/dashboard" />;
      </>
    );
  }

  return child;
}
