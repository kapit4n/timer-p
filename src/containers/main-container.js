import { useState } from "react";
import CategoryList from "../comp/category-list";
import SprintInput from "../comp/sprint-input";
import SprintList from "../comp/sprint-list";

const PUSH_UPS = "PUSH UPS"
const ABS = "ABS"

let insertId = 1;

const cats_cals = { 'PUSH UPS': 10, "ABS": 5 }

export default function () {
    const [inValue, setInValue] = useState(30);
    const [categories] = useState([{ name: PUSH_UPS }, { name: ABS }])
    const [selectedCategory, setSelectedCategory] = useState(PUSH_UPS)
    //const [sprints, setSprints] = useState([{ qty: 100, cat: PUSH_UPS }, { qty: 50, cat: ABS }])
    const [sprints, setSprints] = useState([{ qty: 100, cat: PUSH_UPS }])
    //const [sprints, setSprints] = useState([])
    const [totalValue, setTotalValue] = useState(0);

    const addValue = (e) => {
        const sprintsAll = [...sprints, { id: insertId++, qty: inValue, cat: selectedCategory }]
        setSprints(sprintsAll)
        setInValue('')
        updateTotal(sprintsAll)
    }

    const updateTotal = (sprintsAll) => {
        const totalAll = { "PUSH UPS": { qty: 0 }, ABS: { qty: 0} }
        sprintsAll.forEach(s => {
            let nn = Number(s.qty)
            totalAll[s.cat].qty += nn
        })

        const ss = Object.keys(totalAll).reduce((acc, curr) => acc + cats_cals[curr] * totalAll[curr].qty, 0)
        setTotalValue(ss)
    }

    const onRemove = (c) => {
        const sprintsAll = sprints.filter(s => s.id != c.id)
        setSprints(sprintsAll)
        updateTotal(sprintsAll)
    }

    return (
        <div style={{ display: 'block' }}>
            <h1>WORKOUT PLUS</h1>
            <SprintInput addValue={addValue} value={inValue} setValue={setInValue} />
            <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryList>
            <SprintList sprints={sprints} total={totalValue}  onRemove={onRemove}/>
        </div>
    )
}