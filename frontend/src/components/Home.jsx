
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTable from './UserTable';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <UserTable />
    </div>
  );
}

export default Home;
