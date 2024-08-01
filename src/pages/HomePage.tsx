import { Button } from "antd";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState(null);
  const { logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://103.188.82.10:8069/api/model/student.test"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Button onClick={handleLogOut}>Get Data</Button>
      <Button onClick={handleLogOut}>Log out</Button>
    </div>
  );
};

export default HomePage;
