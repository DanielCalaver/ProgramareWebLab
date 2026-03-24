import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        fetch('/data/projects.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setProjects(data.projects);
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
            <ul>
            {
                projects.map(function(project) {
                    return <Card title = {project.title} description = {project.tech}/>
                })
            }
            </ul>
        </div>
    );
}

export default ProjectList;