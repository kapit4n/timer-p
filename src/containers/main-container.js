import { useState } from "react";
import CategoryList from "../comp/category-list";
import SprintInput from "../comp/sprint-input";
import SprintList from "../comp/sprint-list";

const PUSH_UPS = "PUSH UPS"
const ABS = "ABS"

const cats_cals = { 'PUSH UPS': 10, "ABS": 5 }

export default function () {
    const [inValue, setInValue] = useState(30);
    const [categories] = useState([{ name: PUSH_UPS }, { name: ABS }])
    const [selectedCategory, setSelectedCategory] = useState(PUSH_UPS)
    const [sprints, setSprints] = useState([{ qty: 20, cat: PUSH_UPS }, { qty: 50, cat: ABS }])
    const [totalValue, setTotalValue] = useState(0);

    const addValue = (e) => {
        const sprintsAll = [...sprints, { qty: inValue, cat: selectedCategory }]
        setSprints(sprintsAll)
        setInValue('')
        updateTotal(sprintsAll)
    }

    const updateTotal = (sprintsAll) => {
        const totalAll = { "PUSH UPS": { qty: 0 }, ABS: { qty: 0} }
        sprintsAll.forEach(s => {
            totalAll[s.cat].qty += Number(s.qty)
        })

        const ss = Object.keys(totalAll).reduce((acc, curr) => acc + cats_cals[curr] * totalAll[curr].qty, 0)
        setTotalValue(ss)
    }

    return (
        <div style={{ display: 'block' }}>
            <h1>WORKOUT PLUS</h1>
            <SprintInput addValue={addValue} value={inValue} setValue={setInValue} />
            <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryList>
            <SprintList sprints={sprints} total={totalValue} />
        </div>
    )
}