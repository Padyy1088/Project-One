import  React, { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faWifi} from '@fortawesome/free-solid-svg-icons';
import './App.css'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="clock">
            <p><FontAwesomeIcon icon={faWifi} fade/> Connected</p>
            <p>: {date.toLocaleTimeString()} |</p>
            <p>| {date.toLocaleDateString()} <FontAwesomeIcon icon={faCalendar} /></p>
            
        </div>
    )
}

export default DateTime