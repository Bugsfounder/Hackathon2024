import { useEffect, useState } from "react";

function SensorData({ data }) {
    return (
        <div>
            <h2>Sensor Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

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
        const interval = setInterval(fetchData, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Smart Resource Conservation</h1>
            <SensorData data={data} />
        </div>
    );
}
