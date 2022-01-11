import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
    AppBar, Toolbar, IconButton,
    Typography, Card,  CardContent, CardActions, Grid,Button
    
} from "@mui/material";


function MovieComponent(props) {





    const [movieList, setMovieList] = useState([]);

    const token = localStorage.getItem('access-token');

    useEffect(async () => {
        var response = await axios.get('https://moviebackend7.herokuapp.com/movie/get', {
            headers: {
                'access-token': token
            }
        })
        setMovieList(response.data);
        // console.log(response)
        // console.log("movielist of",movieList)
    },[])


    // const handlelogout=async (e)=>{
    //     console.log('enter into logout fun')
    //    // e.preventDefault();
    //     try{
    //         const response= await axios.post('https://moviebackend7.herokuapp.com/register/logout',

    //    // const response= await axios.post('http://localhost:3000/register/logout',


    //        {
    //         headers: {
    //             'access-token': token
                
    //         }

    //         //    username:this.state.username,
    //         //    password:this.state.password,
    //         //    email:this.state.email
    //        }
    //        )
    //      console.log(response.data)
    //     //    if(true){
    //     //        await localStorage.clear();
    //     //        console.log("local storage is cleared")
    //     //        this.props.history.push('./signin')
    //     //    }
    //     }
    //     catch(err)
    //     {
    //         //console.log(err)
    //     }
    // }

    const handlelogout=async (e)=>{
      await  localStorage.clear();
     // this.props.history.push('./signin')
     window.location.href='/signin'

    //  axios.get('https://moviebackend7.herokuapp.com/register/logout').then(response => {
    //     this.setState({
    //         logout: response.data
    //     }, () => this.props.history.push('/signin'));
    // });
   

    }


    return (
        <>
            <div style={{ backgroundImage: "url(/img/image2.jpg)",
    backgroundRepeat: 'no-repeat',
  width:'100%',
  
    
    }}>

            <div >
                <AppBar position="static" style={{backgroundColor:"tomato"}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Movie Review App
                        </Typography>
                        <div >
                 <Button type="submit" variant="contained" style={{backgroundColor:"red"}} onClick={handlelogout}>Logout</Button>
                 </div>
                    </Toolbar>
                  
                </AppBar>

            </div>
            <div style={{ padding: '30px' }}>
                <Grid container spacing={4}>


                    {movieList.map(row => (
                        <Grid item key={row._id}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 25,fontWeight:700 }} color="text.secondary" gutterBottom>
                                        {row.movieName}
                                    </Typography>
                                    <Typography variant="h5" component="div">

                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                       Category: {row.category}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                       Year: {row.year}
                                    </Typography>
                                    <Typography variant="body2">
                                        
                                        <br />
                                        {row.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Learn More</Button> */}
                                </CardActions>
                            </Card>
                        </Grid>


                    ))}

                </Grid>



            </div>




            </div>

            
        </>

    )
}

export default MovieComponent;