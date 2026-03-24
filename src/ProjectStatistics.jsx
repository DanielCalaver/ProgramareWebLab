function ProjectStatistics(props) {
    return (
        <div>
            <p>Total Proiecte: {props.projects.length}</p>
            <p>Proiecte Finalizate: {props.projects.filter(p => p.done).length}</p>
            <p>Proiecte în lucru: {props.projects.filter(p => !p.done).length}</p>
        </div>
    )
};

export default ProjectStatistics;