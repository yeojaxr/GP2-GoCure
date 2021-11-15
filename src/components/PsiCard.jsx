import React from 'react'

const PsiCard = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="text-gray-900 grid grid-flow-col-3">
                    <div className="">
                        <img src={props.image} alt="psikolog" className="object-cover object-right h-24 w-full" />
                    </div>
                    <div className="px-2 py-3 md:py-4 col-span-2">
                        <div className="font-bold  text-sm mb-2">
                            {props.title}
                        </div>
                        <p className="pb-1 md:pb-2 text-sm">
                            {props.description}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default PsiCard
