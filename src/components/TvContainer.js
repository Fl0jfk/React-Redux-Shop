import React, { useState } from 'react';
import tv from '../images/tv.png'
import { useSelector, useDispatch } from 'react-redux';
import { buyTv } from '../redux/tv/actionTv';

function TvContainer (props) {

    const [TotalTv, setTotalTv] = useState(1)

    const tvs = useSelector(state => state.rootReducer.tv.tvs)
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <img src={tv} alt ="tv" />
            <p>
                Disponibilité: 
                <span id="count-tv">{tvs}</span>
            </p>
            <div className='btnContainer'>
                <button onClick={()=>dispatch(buyTv(TotalTv))}>Acheter</button>
                <input type='text' value={TotalTv} onChange={e =>setTotalTv(e.target.value)}/>
            </div>
        </div>
    )
}

export default TvContainer;