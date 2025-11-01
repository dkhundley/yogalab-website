import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Yoga() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the Class Offerings page
    navigate('/classes', { replace: true });
  }, [navigate]);

  return null;
}
