export default function ({ value, setValue, addValue }) {
    return (
        <div style={{ marginBottom: '1rem', width: '20rem' }}>
            <input value={value} style={{ width: '16rem' }} onChange={e => setValue(e.target.value)} />
            <button style={{ width: '3.2rem' }} onClick={addValue}>ADD</button>
        </div>
    )
}