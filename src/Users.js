import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
    {
        id: 1,
        name: 'Menuka',
    },
    {
        id: 2,
        name: 'Sandeepa'
    }
]// api data set ekak hadagaththa. api dan yanne me data tika palleha hadagttha UsersTable kiyana component ekata pass karanna.
// ekata api prop ekak use karanwa. <UsersTable/> tag eka asse.

const Users = () => {
    return(
        <Box sx={{
            width: 'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px',
        }}
        >  
            <UserForm/>
            <UsersTable rows={users} />
        </Box>
      //meka Box component ekak athule danwa.. e mokada return eka athule multiple root component danna ba. e nisa Box ekek or Grid ekak dagann puluwan.
    ); 


}
export default Users;