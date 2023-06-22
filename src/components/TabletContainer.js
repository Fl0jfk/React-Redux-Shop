import React, { useState } from 'react';
import tablet from '../images/tablet.png';
import { useSelector, useDispatch } from 'react-redux';
import { buyTablet } from '../redux/tablet/actionTablet';

function TabletContainer (props) {

    const [TotalTablet, setTotalTablet] = useState(1)

    const tablets = useSelector(state => state.rootReducer.tablet.tablets)
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <img src={tablet} alt ="tablet" />
            <p>
                Disponibilité: 
                <span id="count-tab">{tablets}</span>
            </p>
            <div className='btnContainer'>
                <button onClick={()=>dispatch(buyTablet(TotalTablet))}>Acheter</button>
                <input type='text' value={TotalTablet} onChange={e =>setTotalTablet(e.target.value)}/>
            </div>
        </div>
    )
}

export default TabletContainer;