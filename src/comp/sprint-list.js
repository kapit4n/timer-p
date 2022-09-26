export default function ({ sprints, total, onRemove }) {
    return (
        <div style={{ marginBottom: '1rem', width: '20rem' }}>
            {sprints.map(s => (
                <div style={{
                    borderBottom: '1px solid black', backgroundColor: "#F7DFDA", marginBottom: '1px', height: '1.4rem', padding: '10px'
                }}>
                    <span>
                        {s.qty} {s.cat}
                    </span>
                    <button onClick={() => onRemove(s)}>X</button>
                </div>
            ))}
            <div style={{ marginTop: '1rem', padding: '10px', backgroundColor: '#FAC0B3' }}>{total}</div>
        </div>
    )
}