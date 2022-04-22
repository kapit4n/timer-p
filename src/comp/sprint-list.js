export default function ({ sprints, total }) {
    return (
        <div style={{ marginBottom: '1rem', width: '20rem' }}>
            {sprints.map(s => (<div style={{ borderBottom: '1px solid black' }}>{s}</div>))}
            <div style={{ marginTop: '1rem' }}>{total}</div>
        </div>
    )
}