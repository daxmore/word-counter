import React, { useState } from 'react'

const InputBox = (props) => {
    const [text, setText] = useState("")

    const inputBox = (e) => {
        setText(e.target.value)
    }

    const toUpper = () => {
        const newText = text.toUpperCase()
        setText(newText)
    }
    const toLower = () => {
        const newText = text.toLocaleLowerCase()
        setText(newText)
    }
    const toClear = () => {
        setText("")
    }
    return (
        <>
            <div className="container px-96 w-full">
                <div className="col-span-full">
                    <label htmlFor="bio" className="text-5xl font-semibold">{props.heading}</label>
                    <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 border my-2 text-gray-900 focus:ring-gray-600 border-gray-300" spellcheck="false" data-ms-editor="true" rows={10} value={text} onChange={inputBox}></textarea>
                </div>
                <div className="btns flex gap-x-2">
                    <button type='button' className="bg-slate-800 text-white px-4 py-3 w-max rounded-md" onClick={toUpper}>{props.btn1}</button>
                    <button type='button' className="bg-slate-800 text-white px-4 py-3 w-max rounded-md" onClick={toLower}>{props.btn2}</button>
                    <button type='button' className="bg-slate-800 text-white px-4 py-3 w-max rounded-md" onClick={toClear}>{props.btn3}</button>
                </div>

                <div className="numberOfWordsAndCharater my-4">
                    <span className='font-semibold'>{(text.trim() === "") ? 0 : text.split().length}</span> Words and <b>{text.length}</b> Characters <br />
                    <span className='font-semibold'>{(0.008 * text.length).toFixed(2)}</span> Time to Read this Text
                </div>

                <div className="container bg-gray-200 h-[20rem] overflow-y-auto my-10 p-4 rounded-md">{text}</div>
            </div>

        </>
    )
}

export default InputBox