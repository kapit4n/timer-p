import { useState } from "react";
import CategoryList from "../comp/category-list";
import SprintInput from "../comp/sprint-input";
import SprintList from "../comp/sprint-list";

const PUSH_UPS = "PUSH UPS"
const ABS = "ABS"

const cats_cals = { PUSH_UPS: 10, "ABS": "5" }

export default function () {
    const [inValue, setInValue] = useState('30');
    const [categories, setCategories] = useState([{ name: PUSH_UPS }, { name: ABS }])
    const [selectedCategory, setSelectedCategory] = useState(PUSH_UPS)
    const [sprints, setSprints] = useState([{ qty: 20, cat: PUSH_UPS }, { qty: 50, cat: ABS }])
    const [total, setTotal] = useState({ PUSH_UPS: { qty: 20 }, })

    const addValue = (e) => {
        console.log(selectedCategory)
        setSprints(sps => [...sps, { qty: inValue, cat: selectedCategory }])
        setInValue('')
    }

    return (
        <div style={{ display: 'block' }}>
            <h1>WORKOUT PLUS</h1>
            <SprintInput addValue={addValue} value={inValue} setValue={setInValue} />
            <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryList>
            <SprintList sprints={sprints} total={Object.keys(total).reduce((acc, curr) => acc + cats_cals[curr] * total[curr].qty, 0)} />
        </div>
    )
}