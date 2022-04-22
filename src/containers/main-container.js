import { useState } from "react";
import CategoryList from "../comp/category-list";
import SprintInput from "../comp/sprint-input";
import SprintList from "../comp/sprint-list";

export default function() {
    const [inValue, setInValue] = useState('30');
    const [categories, setCategories] = useState(['PUSH UPS', 'ABS'])
    const [sprints, setSprints] = useState(["20 PUSH UPS", "50 ABS", "30 PUSH UPS"])
    const [total, setTotal] = useState("50 PUSH UPS and 50 ABS, 500 Calories")
    return (
        <div>
            <SprintInput setValue={setInValue} value={inValue}/>
            <CategoryList categories={categories}></CategoryList>
            <SprintList sprints={sprints} total={total}/>
        </div>
    )
}