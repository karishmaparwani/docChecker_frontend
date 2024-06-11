import React from 'react'
import Typography from '@mui/material/Typography';
import BasicTable from '../components/TableComponent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/UseAxios.hook'
import { REVIEW_STATUS } from '../Constants'

const columns = ['Id','User Name', 'Document Name', `Type Of Document`, 'Status', 'Created Date', '']

function HomePage() {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = React.useState('');
    const {data} = useAxios({
      url: '/user/reviews',
      autoFetch: true
    });

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const filteredRows = data?.filter((row) =>
        row.doc_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const populateRows = (page, rowsPerPage) => {
        return (
          filteredRows?.length > 0 ?   filteredRows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.docId}
                  sx={{  height: 80 }} 
                >
                  <TableCell >
                    {row.docId}
                  </TableCell>
                  <TableCell>
                    {row.createdBy}
                  </TableCell>
                  <TableCell ><Button sx={{textTransform: 'none'}}>{row.attachment_name}</Button></TableCell>
                  <TableCell >{row.docType}</TableCell>
                  <TableCell >{row.reviewStatus === REVIEW_STATUS.COMPLETED ? 'Reviewed' : 'Pending'}</TableCell>
                  <TableCell >{row.createdAt}</TableCell>
                  <TableCell align='right'>
                    <Button 
                      variant="contained" 
                      sx={{width: '12vw'}}
                      onClick={() => navigate('/document-review')}
                      >
                        {row.reviewStatus === REVIEW_STATUS.COMPLETED ? 'View Feedback' : 'Review'}
                      </Button>
                  </TableCell>
                </TableRow>
              )) : 
              <TableRow>
                <TableCell colSpan={7}>
                  <Alert severity="error">No data to display.</Alert>
                </TableCell>
                  
              </TableRow>
              
        )
    }

  return (
    <>
        <Typography variant="h4" ml={5} mt={2} mb={2} sx={{ fontWeight: 'bold' }}>
            Home
        </Typography>
        <Box m={5} > 
            <Box component="section" p={3} sx={{border: '1px solid rgb(224, 224, 224)'}} >
                <Stack direction="row" justifyContent="space-between">
                    <TextField
                        label="Search"
                        id="outlined-start-adornment"
                        size='small'
                        sx={{ width: '25ch' }}
                        value={searchQuery}
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1976d2"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                            </InputAdornment>,
                        }}
                        />
                </Stack>
            </Box>
            
                <BasicTable rows={filteredRows} columns={columns} populateRows={populateRows}/>
           
            
        </Box>
        
    </>
  )
}

export default HomePage