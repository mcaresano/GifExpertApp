import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onNewCategory = (value) => {
    if (
      categories.some(
        (category) => category.toLowerCase() === value.toLowerCase()
      )
    )
      return;
    setCategories([...categories, value]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <div className="">
        <AddCategory onNewCategory={onNewCategory} />
      </div>
        {categories.map((category) => (
         <GifGrid key={category} category={category}/>
        ))}
    </>
  );
};
