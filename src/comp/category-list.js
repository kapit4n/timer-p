export default function ({ categories }) {
    return (
        <select>
            {categories.map(c => <option>{c}</option>)}
        </select>
    )
}