import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  console.log(location);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>Page not Found</h2>
    </div>
  );
};

export default PageNotFound;
