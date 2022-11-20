import React from "react"

export default function Start(props) {

    return (
        <div className="big-container">
        <svg className="bolb" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFD6E8" d="M33.7,-62.7C43.2,-52.8,50.3,-42.9,60.3,-32.5C70.3,-22.1,83.3,-11,84.6,0.8C85.9,12.5,75.5,25.1,67.5,39C59.5,52.9,53.9,68.2,43,72.6C32.1,77,16.1,70.6,2.6,66C-10.8,61.5,-21.6,58.8,-35.8,56.3C-49.9,53.8,-67.3,51.4,-75.6,42C-83.8,32.6,-82.9,16.3,-79.6,1.9C-76.3,-12.5,-70.7,-25.1,-64,-37.1C-57.3,-49.1,-49.5,-60.7,-38.6,-69.9C-27.8,-79.1,-13.9,-86,-0.9,-84.4C12,-82.8,24.1,-72.7,33.7,-62.7Z" transform="translate(100 100)" />
            </svg>
            <svg className="bolb2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#D0E2FF" d="M31.2,-56.8C41.2,-48.2,50.6,-41.4,59.7,-32.3C68.8,-23.1,77.6,-11.6,79.2,1C80.9,13.5,75.4,26.9,68.6,40.1C61.8,53.2,53.6,66,42,72.8C30.3,79.7,15.2,80.7,0.9,79.2C-13.4,77.7,-26.9,73.7,-40,67.7C-53.2,61.7,-66.1,53.7,-72.6,42C-79,30.4,-79.1,15.2,-79.4,-0.2C-79.8,-15.6,-80.5,-31.2,-74.9,-44.4C-69.3,-57.6,-57.5,-68.4,-44,-74.9C-30.5,-81.4,-15.2,-83.6,-2.3,-79.6C10.6,-75.6,21.2,-65.3,31.2,-56.8Z" transform="translate(100 100)" />
            </svg>
        <div className="start-container">
            <h1 className="start-title">Quizzical</h1>
            <p className="start-subtitle">Test your knowledge of geography!</p>
            <button className="btn" onClick={props.startQuiz}>Start quiz</button>
        </div>
        </div>
    )
}