export default function ({ categories, selectedCategory, setSelectedCategory }) {
    return (
        <select style={{ marginBottom: '1rem', width: '20rem' }} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map(c => <option>{c}</option>)}
        </select>
    )
}