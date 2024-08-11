const Button = ({ text, handleClick }) => {
  return (
    <button
      className="rounded-md bg-blue-600 px-3 py-2 text-xl text-white hover:bg-blue-700 active:scale-95 sm:px-5"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
