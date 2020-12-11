import { useState } from "react"

export const useForm = (initialValue) =>{
    const [values, setValues] = useState(initialValue);
    return [values, (formtype,formValue) =>{
        if(formtype === 'reset'){
            return setValues(initialValue);
        }
        return setValues({...values, [formtype]: formValue});
    }]
}