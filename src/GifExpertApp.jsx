import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpert = () => {
    const [categories, setcategories] = useState(['Dragon Ball']);
    //console.log(categories);

    const onAddCategory = ( newValue ) => {
        if(categories.includes(newValue)) return;
        setcategories([ newValue, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory= { onAddCategory } />

            { categories.map( (category) => (
                <GifGrid 
                    key={ category }
                    category={ category }
                />
            ))
            }
        </>
    )
}