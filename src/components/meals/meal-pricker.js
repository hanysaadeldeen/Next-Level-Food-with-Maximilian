
"use client"
import { useRef, useState } from "react"
import classes from "./meal-picker.module.css" 
import Image from "next/image"



export default function ImagePicker({ label, name }) {

    const [pickedImgae,setPicketImage]= useState()
    const imageinput = useRef()
    
    function handlePickKlick() {
    imageinput.current.click()
    }
    
    const handleImgae=(event) => {
        const file = event.target.files[0]
        if (!file) {
            setPicketImage(null);
            return;
        } else {   
            const fileReader = new FileReader()
            
            fileReader.onload = () => {
                setPicketImage(  fileReader.result )
            }
            fileReader.readAsDataURL(file)
        }
    }



    return (
        <div className={classes.picker}>
            <label htmlFor={name} className={classes}>{ label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImgae && <p>no image selected yet</p>}
                    {pickedImgae && <Image src={pickedImgae} alt="image selected by user" fill/>}
                </div>
                <input
                    ref={imageinput}
                    type="file"
                    className={classes.input}
                    id={name}
                    accept="imgae/png, image/jpeg"
                    name={label}
                    onChange={handleImgae}
                    required
                />
                <button className={classes.button}
                    id={name} type="button"
                    onClick={handlePickKlick}
                >Pick an Image</button>

            </div>
        </div>
    )
}