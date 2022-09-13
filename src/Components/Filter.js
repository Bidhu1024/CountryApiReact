import React from 'react'

const Filter = () => {
  return (
   <div className='filter'>
   <div>
        <form className="form-control">
            <input type="search" name='search' id='search'
            placeholder='Search for country' />
            </form>
        </div>

        <div>
            <select name="select" id="select" className='region-filter'>
                
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Ocenia">Ocenia</option>
                
            </select>
        </div>
        
    </div>
  )
}

export default Filter