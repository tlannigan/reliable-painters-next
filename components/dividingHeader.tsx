import { Component } from 'react'

export default function DividingHeader(props: any) {
    return (
        <div id={props.id} className="py-16 roboto-bold text-center">
            <h2 className="text-3xl">
                {props.before}
                <span className="highlight">
                    {props.underlined}
                </span>
                {props.after}
            </h2>
        </div>
    )
}
