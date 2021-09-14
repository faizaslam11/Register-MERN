import React, { useState} from 'react';

export default function Form(){
    const [formData, setfromData] = useState ({
        isAgree: false,
        gender: "female"
    })
    const handleChange = event => {
        const target = event.target
        const name = target.name
        const value = target.value=="checkbox" ? target.checked :target.value
        setfromData({
            ...formData,
            [name] : value
        })
    }
    return (
      
        <form>
        <p>Gender:</p>
            <div>
                <label>Male</label>
                <input type="radio" name="gender" value="male"
                    onChange={handleChange} checked={formData.gender=='male'}    /> 
              <label>Female</label>
                <input type="radio" name="gender" value="female"
                    onChange={handleChange} checked={formData.gender=='female'}    />

          <label>Others</label>
                <input type="radio" name="gender" value="others"
                    onChange={handleChange} checked={formData.gender=='others'}    />
             
            </div>
        </form>
        )
}