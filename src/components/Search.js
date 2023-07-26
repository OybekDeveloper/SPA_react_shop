import React, { useState } from 'react'

export default function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("");
    const handleKey = () => {
        handleSubmit();
    }
    const handleSubmit = () => {
        cb(value)
    }
    return (
        <div className="input-field coll s12">
            <input
                type='search'
                id='search-field'
                placeholder='Search...'
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button className='btn'
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0
                }}
                onClick={handleSubmit}
            >
                Search
            </button>
        </div>
    )
}