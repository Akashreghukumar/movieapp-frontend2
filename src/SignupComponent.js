import React from 'react';
import {TextField,Button} from '@mui/material';

import axios from 'axios';


class SignupComponent extends React.Component{
    constructor(props){
        super()
        this.state={
            username:'',
            email:'',
            password:''

        }
    }
render(){
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
           const response= await axios.post('https://moviebackend7.herokuapp.com/register/signup',
           {

               username:this.state.username,
               password:this.state.password,
               email:this.state.email
           }
           )
           console.log(response.data)
           if(response.data){
               await localStorage.setItem('access-token',response.data);
               this.props.history.push('./signin')
           }
        }
        catch(err)
        {
            console.log(err)
        }
    }





    return(
        <div style={{padding:'60px',
        backgroundImage: "url(/img/image4.jpg)",
        backgroundRepeat: 'no-repeat',
      //width:'100%',
      backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        color:'red'
        
        
        
        
        
        
        }}>
            <div style={{fontSize:'30px'}}>
            <h2>Signup </h2>
            </div>
             <form onSubmit={(e)=>handleSubmit(e)}>

                 <div>
                 <TextField id="standard-basic" label="Username" variant="standard" 
                 name="username" 
                 value={this.state.username} 
                 style={{color:"red"}}
                 onChange={(e)=>this.setState({username:e.target.value})}/>
                 </div>
                 <div>
                 <TextField id="standard-basic" label="Email" variant="standard" 
                 name="email" 
                 value={this.state.email} 
                 onChange={(e)=>this.setState({email:e.target.value})}/>

                 </div>
                 <div>
                 <TextField id="standard-basic" label="Password" variant="standard" 
                                name="password" 
                                value={this.state.password} 
                                onChange={(e)=>this.setState({password:e.target.value})}
                 
                 />

                 </div>
                 <div style={{padding:'30px'}}>
                 <Button type="submit" variant="contained" style={{backgroundColor:"red"}}>Signup</Button><br></br>
                 </div>
                 <div >
                 <Button type="submit" variant="contained" style={{backgroundColor:"red"}} onClick={() => this.props.history.push('./signin')}>Signin</Button>
                 </div>
             </form>

        </div>
       
    )
}


}

export default SignupComponent;