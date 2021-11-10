import React from 'react'

const Form = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="flex flex-wrap pt-3">
                    <div className="w-full">
                        <label className="tracking-wide text-sm font-bold">
                            {props.title}
                        </label>
                        <input className="text-gray-900 appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-2 px-2 my-2 text-xs leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder={props.desc} />
                    </div>
                </div>

            </a>
        </div>
    )
}

export default Form
