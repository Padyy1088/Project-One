import Login from "./components/loginpage/loginpage";
import App from "./Home";
import { useState } from "react";
import { useEffect } from "react";

export default function Root() {
    const [email, setEmail] = useState(null);
    useEffect(() => {
    const email = JSON.parse(localStorage.getItem('email'));
    if (email) {
    setEmail(email);
        }
  }, []);
    if (email) {
        return (
            <App email={email}/>
        )
        }
        else{
            return (
                <Login onLogin={() => {
                    const email = JSON.parse(localStorage.getItem('email'));
                    if (email) {
                    setEmail(email);
                        }
                  }} />
            )
            }
}