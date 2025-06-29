import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

//functional component ekak hadagnwa UsersTable kya..eka default vidihta export krgnwa..
const UsersTable = ({rows}) => { //apita me thiyana "prop" kiyana ek hamathanma ghann wena pis ekath wens krn puluwn
//meterial UI use karala table ekak hdagnn yanne.eken table ekak ganna TableContainer tag eka use karanwa ({rows}) vidihta. ethkota apita {props.rows} kiyana eka {rows} kiyla vithrk use krnn puluwn
    <TableContainer component={Paper}> 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : { border: 0 }}}>
                            <TableCell component='th' scope="row">{row.id}</TableCell>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{ margin: '0px 10px'}}
                                    onClick={() => {}}
                                >
                                    Update
                                </Button>
                                <Button
                                    sx={{ margin: '0px 10px'}}
                                    onClick={() => {}}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
         

                    ))
                }
                
            </TableBody>
        </Table>
    </TableContainer>
    //component eka ppr ekak vidihta convrt karala tynne.. eken apita puluwan ona divise ekka ona vidihata me table eka hasurawnna..loku podi karala
            //apita dan ona onama users la ganak add weddi auto ena vidihta hadaganna.. nathm apita table eke data add kara kara yanna wenwa
            //e nisa api array ekak use kaala hadagnwa.
}
export default UsersTable;