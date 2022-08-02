import React, {useState} from "react";
import ShortcutCard from "./ShortcutCard";
import SnippetCard from "./SnippetCard";
// import ToggleKeys from "./ToggleKeys";

function ItemCollection({shortCuts, snippets, handleToggle}) {
    // console.log(shortCuts)
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
      setToggle(!toggle)
    }
  
    const searchShortCuts = () => (
    shortCuts.map((shortCut) => (
      <ShortcutCard 
        keyStroke={shortCut.keyStroke}
        action={shortCut.action}
        worksIn={shortCut.worksIn}
        category={shortCut.category}
      />
     )
    )
  )

  const searchSnippets = () => (
    snippets.map((snippet) => (
      <ShortcutCard 
      // prefix={snippet.prefix}
      action={snippet.action}
      worksIn={snippet.worksIn}
      />
     )
    )
  )

  return (
    <div>
      {searchShortCuts()}
      {searchSnippets()}
    </div>
    )
}
export default ItemCollection;