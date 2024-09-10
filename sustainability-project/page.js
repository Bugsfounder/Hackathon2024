'use client'
import { useEffect, useState } from "react";
import SensorData from "./src/pages/api/sensorData"


export default function Home() {

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/sensorData');
        const result = await res.json();
        console.log('Fetched data:', result); // Log the fetched data
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Smart Resource Conservation</h1>
      <SensorData data={data} />
    </div>
  );
}
