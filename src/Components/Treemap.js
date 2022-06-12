import React, { useState } from 'react'
import '../Style/treemap.css'
import file from '../Assets/icons8-file-48.png'
import folder from '../Assets/icons8-folder-30.png'


function Treemap({ data }) {

    //creating a state to hold  the state of  opening and closing of every seperate child component rendered
    const [down, setDown] = useState(false);
    var url = "";
    if (data.folder)
        url = folder;
    else
        url = file;
    return (
        <div>
            <div onClick={() => {
                setDown(!down)
                console.log(down)
            }} className="child-container">
                <img className='image' src={url} alt="" />
                {data.name}
            </div>

            {/* rendering an empty jsx if the value of down is false  */}
            <div className='pad'  >
                {!down ? <></> :
                    data.child.map((datamap) => (
                        <Treemap key={datamap.id} data={datamap} />
                    ))
                }
            </div>
        </div>
    )
}

export default Treemap;