import { useState, useEffect } from 'react';
import Card from './Card';
import ProjectStatistics from './ProjectStatistics';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState('');

    const [title, setTitle] = useState('');
    const [tech, setTech] = useState('');

    async function handleDelete(id) {
        try {
            await fetch('http://localhost:3000/api/projects/' + id, {
                method: 'DELETE',
            });
            setProjects(projects.filter(p => p._id !== id));
        } catch (err) {
            console.error('Eroare:', err);
        }
    }

    async function handleSubmit() {
        try {
            const response = await fetch('http://localhost:3000/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: title, tech: tech }),
            });
            const newProject = await response.json();
            setProjects([...projects, newProject]);
            setTitle('');
            setTech('');
        } catch (err) {
            console.error('Eroare:', err);
        }
    }

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
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='titlu proiect...'
                />
                <input
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                    placeholder='tehnologii...'
                />
                <button type='submit'>Adauga proiect</button>
            </form>
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
                    return <Card key={project._id} title={project.title} description={project.tech} onDelete={() => handleDelete(project._id)} />
                })
            }
            </ul>
            <ProjectStatistics projects={projects} />
        </div>
    );
}

export default ProjectList;