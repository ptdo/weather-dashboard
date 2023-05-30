export default function SearchBar(props) {
    const handleEnter = (e) => {
      if (e.keyCode === 13) {
        props.setCity(e.target.value)
        e.target.value = ""
      }
    }

    return (
      <div className="md:p-1.5 mt-4">
        <input
          type="text"
          className=" focus:outline-orange-300 text-lg font-semibold rounded-md p-1 text-gray-800 shadow-md bg-sand-50"
          placeholder="Enter Location"
          onKeyDown={handleEnter}
        />
      </div>
    )
}