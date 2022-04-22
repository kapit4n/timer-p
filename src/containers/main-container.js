import { useState } from "react";
import CategoryList from "../comp/category-list";
import SprintInput from "../comp/sprint-input";
import SprintList from "../comp/sprint-list";

export default function () {
    const [inValue, setInValue] = useState('30');
    const [categories, setCategories] = useState(['PUSH UPS', 'ABS'])
    const [selectedCategory, setSelectedCategory] = useState("PUSH UPS")
    const [sprints, setSprints] = useState(["+ 20 PUSH UPS", "+ 50 ABS", "+ 30 PUSH UPS"])
    const [total, setTotal] = useState("50 PUSH UPS and 50 ABS, 500 Calories")
    const addValue = (e) => {
        setSprints(sps => [...sps, `+ ${inValue} ${selectedCategory}`])
        setInValue('')
    }

    return (
        <div style={{ display: 'block' }}>
            <h1>WORKOUT PLUS</h1>
            <SprintInput addValue={addValue} value={inValue} setValue={setInValue} />
            <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryList>
            <SprintList sprints={sprints} total={total} />
        </div>
    )
}