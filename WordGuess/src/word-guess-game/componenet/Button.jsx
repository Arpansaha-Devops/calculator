


const Type = {
    CIRCULAR  : "circle",
    SQUARE : "square",
}

const Button = ({ label= "", onClick = () => {}}) => {

    let className = `btn_${Type.CIRCULAR}`
  return (
    <>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </>
  )
}

Button.Type = Type
export default Button