import { useState, useEffect } from 'react';
import Card from './Card';
import ProjectStatistics from './ProjectStatistics';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState('');

    useEffect(function() {
        fetch('http://localhost:3000/api/projects')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setProjects(data);
                setLoading(false);
            })
            .catch(function(err){
                setError('Eroare la incarcarea datelor ' + err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Se încarcă...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h3>Proiecte</h3>
            <input
                value = {search}
                onChange= {(e) => setSearch(e.target.value)}
                placeholder='cauta proiect...'
            />
            <ul>
            {
                projects.filter(function(p) {
                    return p.title.toLowerCase().includes(search.toLowerCase());
                }).map(function(project) {
                    return <Card title = {project.title} description = {project.tech}/>
                })
            }
            </ul>
            <ProjectStatistics projects={projects} />
        </div>
    );
}

export default ProjectList;