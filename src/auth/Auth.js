import styled from "styled-components";
import { BrowserRouter, Route, Routes,useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./SIgnup";
import { useState } from "react";


const Auth = ({setToken}) =>{

    

    const [whichOn, setWhichOn] = useState({
        login: true,
        signup: false,
    })

    const navigate = useNavigate();

    return(
        <AuthSection>
            <Box>
                <h3>Please Login to continue</h3>
                <Director>
                    <button className={!whichOn.login?"on":""} onClick={()=>{
                        setWhichOn({login:true,signup:false});
                        navigate("/login")}}>
                            Login
                    </button>
                    <button className={!whichOn.signup?"on":""} onClick={()=>{
                        setWhichOn({login:false,signup:true})
                        navigate("/Signup")}}>
                        Signup
                    </button>
                </Director>
                
                    <Routes>
                        <Route path="/login" element={<Login setToken={setToken}/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                    </Routes>
                
                
            </Box>  
        </AuthSection>
        
    )
}


const AuthSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
const Box = styled.div`
    min-height: 80vh;
    background-color: #474747;
    width: 30vw;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    position: relative;
    h3{
        color: #757575;
        height: 5%;
        padding: 0.2rem;
    }
`
const Director = styled.div`
    height: 20%;
    width: 100%;
    background-color: pink;

    .on{
        background-color: #dbdbdb;
    }
   button{
        width: 40%;
        border: none;
   }

`

export default Auth;