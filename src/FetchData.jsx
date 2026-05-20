import { useState, useEffect } from 'react';

function FetchData() {
    const [users, setUsers] = useState([]);
    const [usersLoading, setUsersLoading] = useState(true);
    const [usersError, setUsersError] = useState(null);

    // const [posts, setPosts] = useState([]);
    // const [postsLoading, setPostsLoading] = useState(true);
    // const [postsError, setPostsError] = useState(null);

    const [search, setSearch] = useState('');

    useEffect(function() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setUsers(data);
                setUsersLoading(false);
            })
            .catch(function(err){
                setUsersError('Eroare la incarcarea datelor ' + err);
                setUsersLoading(false);
            });
    }, []);

    if (usersLoading) {
        return <p>Se încarcă...</p>;
    }

    if (usersError) {
        return <p>{usersError}</p>;
    }

    return (
        <div>
            <h3>Utilizatori</h3>
            <input
                value = {search}
                onChange= {(e) => setSearch(e.target.value)}
                placeholder='cauta utilizator...'
            />
            <ul>
            {
                users.filter(function(u) {
                    return JSON.stringify(u).toLowerCase().includes(search.toLowerCase());
                }).map(function(u) {
                    return(<div>
                        <p>Nume: {u.name}</p>
                        <p>Username: {u.username} </p>
                        <p>email: {u.email}</p>
                    </div>)
                })
            }
            </ul>
        </div>
    );
}

export default FetchData;