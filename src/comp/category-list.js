export default function ({ categories, selectedCategory, setSelectedCategory }) {
    return (
        <select style={{ marginBottom: '1rem', width: '20rem', height: '2rem', backgroundColor: '#FBEBE7' }} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map(c => <option value={c.name}>{c.name}</option>)}
        </select>
    )
}