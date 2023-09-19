import React,{useContext} from 'react';
import { AppContext} from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const changecurrency = (val)=> {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    }


return(<div>
    <div className='alert alert-secondary'> Currency {	     
	<select name="Currency" id="Currency" onChange={event=>changecurrency(event.target.value)}>
	        <option value="£">pound(£)</option>
	        <option value="₹">Rupee(₹)</option>
	        <option value="€">Euro(€)</option>
	        <option value="$">Doller($)</option>
	      </select>	
	      }	
	    </div>
        </div>
	    );
	}
	
	export default Currency;

