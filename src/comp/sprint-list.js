export default function({sprints, total}) {
    return (
        <div>
            {
                sprints.map(s => (<div>{s}</div>))
            }
            <div>{total}</div>
        </div>
    )
}