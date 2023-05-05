import Image from './assets/500-error-codes.png'
import './assets/error.css'

export function ErrorMSG () {
    return (
        <div>
            <errmsg style={{marginLeft: "280px", fontSize:"30px"}}>
            <u>
            <b>
            <i>
            UNABLE TO FETCH DATA FROM API
            </i>
            </b>
            </u>
            </errmsg>
           <img src={Image} alt="error" style={{paddingLeft: "105px", paddingTop: "40px", paddingBottom: "100px"}}></img>
        </div>
    )
};

// Not yet in use2
// In testing phase
// Pre Implementation