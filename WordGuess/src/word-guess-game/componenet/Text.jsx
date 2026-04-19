const styleTypes = { 
    score : "score",
    questIon : "question",
    answer : "answer"
}



const Text = ({type =styleTypes.score, text =""}) => {
let className = type;

  return (
   <span className={className}> {text} </span>
  )
}

 Text.styleTypes = styleTypes   // functions are object so we are passing them into another component without using export.
export default Text
