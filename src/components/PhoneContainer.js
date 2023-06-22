import React, {useState} from 'react';
import phone from '../images/phone.png';
import { useSelector, useDispatch } from 'react-redux';
import { buyPhone } from '../redux/phone/actionPhone'

function PhoneContainer (props) {

    const [TotalPhone, setTotalPhone] = useState(1)

    const phones = useSelector(state => state.rootReducer.phone.phones)
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <img src={phone} alt ="phone" />
            <p>
                Disponibilité: 
                <span id="count">{phones}</span>
            </p>
            <div className='btnContainer'>
                <button onClick={()=>dispatch(buyPhone(TotalPhone))}>Acheter</button>
                <input type='text' value={TotalPhone} onChange={e =>setTotalPhone(e.target.value)}/>
            </div>
            
        </div>
    )
}

export default PhoneContainer;