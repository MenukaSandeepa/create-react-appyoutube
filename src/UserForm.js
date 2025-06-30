import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = props => {
    //api users kiyana variable ekata api change ekak karoth api hadapu Users component eka nawatha relord refesh wen na
    //e nisa api state variable ekak hadagn ona..ape ID ektai Name ektai
    const[id, setId] = useState(0);
    const[name,setName] = useState(''); // api dan id ektai name ektai onama ekak enna puluwn vidihta array 2k hadan tynne.. 0,'' defolt value dala

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',

            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color:'#000000'}}> User Form </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography 
                component={'label'} 
                htmlFor="id"
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    widows: '100px',
                    display: 'block',  
                }}
                >
                    ID
                </Typography>
                <Input 
                    type="number"
                    id="id"
                    name="id"
                    sx={{width: '400px'}}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />

            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography 
                component={'label'} 
                htmlFor="id"
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    widows: '100px',
                    display: 'block',  
                }}
                >
                    Name
                </Typography>
                <Input 
                    type="text"
                    id="name"
                    name="name"
                    sx={{width: '400px'}}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

            </Grid>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor : '#00c6e6',
                    color : 'black',
                    marginLeft: '15px',
                    marginTop: '20px', 
                    '&:hover':{
                        opacity: '0.7',
                        backgroundColor: '00c6e6'
                    }
                }}
            >
                  Add
            </Button>

        </Grid>
    );

}

export default UserForm;