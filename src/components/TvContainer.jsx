import tv from '../images/tv.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { buyTv } from '../redux/tv/actionTv';
import { useState } from 'react';
 
function TvContainer (){
    const [totalTv, setTotalTv] = useState(1);
    const tvs = useSelector(state => state.tv.tvs );
    const dispatch = useDispatch() 
    return (
        <div className="container">
            <img src={tv} alt='tv'/>
            <p>Disponibilité : 
                <span id='count'>{tvs}</span>
            </p>
            <div className='btnContainer'>
                <button onClick={() => dispatch(buyTv(totalTv))}>Acheter</button>
                <input type="number" value={totalTv} onChange={ e => setTotalTv(e.target.value)} />
            </div>
        </div>
    )
}

export default TvContainer;