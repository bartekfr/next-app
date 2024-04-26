'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

type FileInputEvent = React.ChangeEvent<HTMLInputElement>
interface ImagePickerProps {
  label: string
  name: string
}



export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const handlePickClick = () => {
    inputRef.current?.click()
  }

  const handleImageChange = (e: FileInputEvent) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log('no image')
      setPickedImage(null)
      return
    }
    const file = e.target.files[0]
    if (!file) {
      setPickedImage(null)
    }
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      setPickedImage(fileReader.result )
    }
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && (
            <p>No image selected</p>
          )}
         {pickedImage && (
            <Image fill src={pickedImage as string} alt={label} />
          )}
        </div>
        <input
          id={name}
          ref={inputRef}
          onChange={handleImageChange}
          className={classes.input}
          type="file"
          name={name}
          accept='image/jpg, image/png'
          required
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  )

}