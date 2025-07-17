

const DropDown=({list,handleSelect})=>{

    return (
        
<div className="max-w-sm mx-auto inline-block">
  <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select color mode</label>
  <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={(e)=>handleSelect(e.target.value)}>
    {
        list?.map((option,index)=>{
            return (
                <option value={option?.name} key={option?.name} selected={index===0}>
                   
                 {option?.name}
                  
                </option>
            )
        })
    }
  </select>
</div>

    )
}

export default DropDown;