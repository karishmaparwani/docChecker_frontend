import React from 'react'
import Typography from '@mui/material/Typography';
import BasicTable from '../components/TableComponent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Grid from '@mui/material/Unstable_Grid2';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'; //Resume
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined'; //LOR
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'; //Essay
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined'; // PRD
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useNavigate } from "react-router-dom";

function createData(id, name, type, status) {
    return { id, name, type, status};
  }
  
  const rowsFromBackend = [
    createData(1001, 'rangoli_jain_resume.pdf','Resume', 'Reviewed'),
    createData(1002, 'rangoli_jain_LOR.pdf','Letter Of Recommendation', 'Pending'),
    createData(1003, 'Essay_New_York_University.pdf','College Application Essay', 'Reviewed'),
    createData(1004, 'Resume_reviewer_prd.pdf','Product Requirement Document', 'Pending'),
    createData(1005, 'Karishma_resume.pdf','Resume', 'Reviewed'),
    createData(1006, 'rangoli_jain_resume.pdf','Resume', 'Reviewed'),
    createData(1007, 'rangoli_jain_LOR.pdf','Letter Of Recommendation', 'Pending'),
    createData(1008, 'Essay_New_York_University.pdf','College Application Essay', 'Reviewed'),
    createData(1009, 'Resume_reviewer_prd.pdf','Product Requirement Document', 'Pending'),
    createData(1010, 'Karishma_resume.pdf','Resume', 'Reviewed'),
    createData(1011, 'rangoli_jain_resume.pdf','Resume', 'Reviewed'),
    createData(1012, 'rangoli_jain_LOR.pdf','Letter Of Recommendation', 'Pending'),
    createData(1013, 'Essay_New_York_University.pdf','College Application Essay', 'Reviewed'),
    createData(1014, 'Resume_reviewer_prd.pdf','Product Requirement Document', 'Pending'),
    createData(1015, 'Karishma_resume.pdf','Resume', 'Reviewed'),
    createData(1016, 'rangoli_jain_resume.pdf','Resume', 'Reviewed'),
    createData(1017, 'rangoli_jain_LOR.pdf','Letter Of Recommendation', 'Pending'),
    createData(1018, 'Essay_New_York_University.pdf','College Application Essay', 'Reviewed'),
    createData(1019, 'Resume_reviewer_prd.pdf','Product Requirement Document', 'Pending'),
    createData(1020, 'Karishma_resume.pdf','Resume', 'Reviewed'),
  ];

  const columns = ['Id','Document Name',`Type Of Document`, 'Status', '']

function HomePage() {
    const [rows, setRows] = React.useState([...rowsFromBackend])
    const navigate = useNavigate();

    const filterCompletedDocs = () => {
        let filteredData = rowsFromBackend.filter(row => row.status === 'Reviewed')
        setRows([...filteredData])
    }

    const filterPendingDocs = () => {
        let filteredData = rowsFromBackend.filter(row => row.status === 'Pending')
        setRows([...filteredData])
    }

    const showAllDocs = () => {
        setRows([...rowsFromBackend])
    }

    const populateRows = (page, rowsPerPage) => {
        return (
            rows && rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{  height: 80 }} 
                >
                  <TableCell >
                    {row.id}
                  </TableCell>
                  <TableCell scope='row'>
                    <Grid container spacing={2}>
                      <Grid xs={2} pt={2}>
                        {row.type === 'Resume' && <DescriptionOutlinedIcon fontSize='large'/>}
                        {row.type === 'College Application Essay' && <AssignmentOutlinedIcon fontSize='large' />}
                        {row.type === 'Letter Of Recommendation' && <DraftsOutlinedIcon fontSize='large' />}
                        {row.type === 'Product Requirement Document' && <DocumentScannerOutlinedIcon fontSize='large' />}
                      </Grid>
                      <Grid xs={10}>
                        <Grid xs={12} mb={1} sx={{fontWeight: 'bold'}}>{row.name}</Grid>
                        <Grid xs={12}>{row.status === 'Reviewed' ? 'Reviewed by expert' : 'Pending for Review'}</Grid>
                      </Grid>
                    </Grid>  
                  
                  </TableCell>
                  <TableCell >{row.type}</TableCell>
                  <TableCell >{row.status}</TableCell>
                  <TableCell align='right'>
                    <Button variant="contained" sx={{width: '12vw'}}>{row.status === 'Reviewed' ? 'View Feedback' : 'View Document'}</Button>
                  </TableCell>
                </TableRow>
              ))
        )
    }

  return (
    <>
      <Box>
      <Typography variant="h4" ml={5} mt={2} mb={2} sx={{ fontWeight: 'bold' }}>
            Home
        </Typography>
        <Box m={5} > 
            <Box component="section" sx={{border: '1px solid rgb(224, 224, 224)'}} p={3}>
                <Stack spacing={3} direction="row" >
                    <Button
                        variant="contained"
                        onClick={showAllDocs}
                        >
                            All Docs
                    </Button>
                    <Button
                        variant="contained"
                        onClick={filterCompletedDocs}
                        >
                            Completed Docs
                    </Button>
                    <Button
                        variant="contained"
                        onClick={filterPendingDocs}
                        >
                            Pending for Review
                    </Button>
                </Stack>
            </Box>
            <Box component="section" p={3} sx={{border: '1px solid rgb(224, 224, 224)'}} >
                <Stack direction="row" justifyContent="space-between">
                    <TextField
                        label="Search"
                        id="outlined-start-adornment"
                        size='small'
                        sx={{ width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1976d2"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                            </InputAdornment>,
                        }}
                        />
                    <Button
                        variant="contained"
                        onClick={() => navigate("/upload-document")}
                        startIcon={ <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>}
                        >
                           
                            Add New
                    </Button>
                </Stack>
            </Box>
            <BasicTable rows={rows} columns={columns} populateRows={populateRows}/>
        </Box>
      </Box>
        
        
    </>
  )
}

export default HomePage