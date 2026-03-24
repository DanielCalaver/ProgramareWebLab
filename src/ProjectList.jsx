import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function() {
        fetch('/data/projects.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setProjects(data.projects);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Se încarcă...</p>;
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