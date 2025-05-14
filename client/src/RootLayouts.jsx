import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentUser, resetAuth } from './Context/Auth'; // Fixed import
import { useNavigate } from 'react-router-dom';
import Header from './Layouts/Header';
import { Outlet } from 'react-router-dom';
import { persistor } from './App/Store'; // Import persistor for rehydration check

const RootLayouts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isRehydrated, setIsRehydrated] = useState(false);

  // Wait for redux-persist rehydration
  useEffect(() => {
    const unsubscribe = persistor.subscribe(() => {
      if (persistor.getState().bootstrapped) {
        setIsRehydrated(true);
        unsubscribe();
      }
    });
    return () => unsubscribe();
  }, []);

  // Dispatch CurrentUser after rehydration if not authenticated
  useEffect(() => {
    if (isRehydrated && isInitialLoad && !isAuthenticated) {
      dispatch(CurrentUser());
      setIsInitialLoad(false);
    }
  }, [dispatch, isAuthenticated, isInitialLoad, isRehydrated]);

  // Handle token expiration
  useEffect(() => {
    if (error === 'Token expired') {
      dispatch(resetAuth());
      navigate('/login', { replace: true });
    }
  }, [error, dispatch, navigate]);

  return (
    <div className="app-container" role="main">
      <Header user={user} isAuthenticated={isAuthenticated} />
      {loading && isInitialLoad && !isRehydrated ? (
        <div className="loading" aria-live="polite">
          Loading user data...
        </div>
      ) : (
        <Outlet context={{ user, isAuthenticated }} />
      )}
    </div>
  );
};

export default RootLayouts;