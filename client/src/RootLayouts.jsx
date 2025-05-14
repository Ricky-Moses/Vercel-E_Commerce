import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentUser } from './Context/Auth'; // Updated import path
import Header from './Layouts/Header';
import { Outlet } from 'react-router-dom';

const RootLayouts = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Dispatch currentUser only if not authenticated or on initial load
    if (isInitialLoad && (!isAuthenticated || error)) {
      dispatch(CurrentUser());
      setIsInitialLoad(false);
    }
  }, [dispatch, isAuthenticated, error, isInitialLoad]);

  return (
    <div className="app-container" role="main">
      <Header user={user} isAuthenticated={isAuthenticated} />
      {loading && isInitialLoad ? (
        <div className="loading" aria-live="polite">
          Loading user data...
        </div>
      ) : error ? (
        <div className="error" role="alert">
          {error === 'Unauthorized - No token provided' || error === 'Token expired'
            ? 'Please log in to continue.'
            : `Error: ${error}`}
        </div>
      ) : (
        <Outlet context={{ user, isAuthenticated }} />
      )}
    </div>
  );
};

export default RootLayouts;