export default function ({ value, setValue, addValue }) {
    return (
        <div style={{ marginBottom: '1rem', width: '20rem' }}>
            <input value={value} style={{ width: '16rem', height: '2rem', backgroundColor: '#FBEBE7' }} onChange={e => setValue(e.target.value)} />
            <button style={{ width: '3.2rem', height: '2.4rem', backgroundColor: '#FAC0B3' }} onClick={addValue}>ADD</button>
        </div>
    )
}