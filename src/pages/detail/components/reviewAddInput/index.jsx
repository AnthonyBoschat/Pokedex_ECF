import { useState } from "react";
import s from "./style.module.scss";
import { callBackend } from "@services/backend";
import { ENDPOINTS } from "@constants/endpoints";
import { toast } from "react-toastify";

// The input that can add a new review to a pokemon
export function ReviewAddInput({pokemonID, addReview}){

    const [errors, setErrors] = useState({})

    const haveSomeErrors = (errorsObject) => {
        return Object.keys(errorsObject).length !== 0
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData      = new FormData(event.target)
        const formValues    = Object.fromEntries(formData)
        
        const newErrors = {}
        if(formValues.content.length > 100){
            newErrors.content = "This message must contain a maximum of 100 characters."
        }
        if(haveSomeErrors(newErrors)){
            setErrors(newErrors)
        }else{
            const response = await callBackend({
                url:ENDPOINTS.ADD_REVIEW,
                method:"POST",
                body:{
                    pokemonId: pokemonID,
                    author:"Me",
                    content:formValues.content
                },
                successMessage:"Review add successfully"
            })
            const newReview = {...response, pokemonId:pokemonID}
            addReview(newReview)
            event.target.reset()
        }
    }

    const handleChange = (event) => {
        const formData      = new FormData(event.target.form)
        const formValues    = Object.fromEntries(formData)
        const newErrors = {}
        if(formValues.content.length > 100){
            newErrors.content = "This message must contain a maximum of 100 characters."
        }
        if(haveSomeErrors(newErrors)){
            setErrors(newErrors)
        }else{
            setErrors({})
        }

    }

    return(
        <form onSubmit={handleSubmit} className={s.container}>
            <span className={`${s.error} ${errors.content ? s.active : null}`}>{errors?.content}</span>
            <textarea onChange={handleChange} required name='content' className={s.textarea} type="text" placeholder="Add a review..." />

            <input className={`${s.submit} ${haveSomeErrors(errors) ? s.disabled : null}`} type="submit" />
        </form>
    )
}