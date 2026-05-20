import { useState, useEffect } from 'react';

function Home() {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(null);

    useEffect(function() {
        fetch('http://localhost:3000/api/stats')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setStats(data);
            })
            .catch(function(err) {
                setError('Eroare la incarcarea statisticilor ' + err);
            });
    }, []);

    return (
        <div>
            <h2>Home</h2>
            <p>Bine ai venit pe dashboard-ul meu!</p>
            {error && <p>{error}</p>}
            {stats && (
                <div>
                    <h3>Statistici</h3>
                    <p>Total: {stats.total}</p>
                    <p>Finalizate: {stats.finalizate}</p>
                    <p>In lucru: {stats.inLucru}</p>
                </div>
            )}
        </div>
    );
}
export default Home
