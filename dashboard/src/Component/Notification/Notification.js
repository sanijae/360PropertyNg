import React from 'react'
import styled from 'styled-components'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import {} from '@mui/icons-material'


export default function Notification() {
  return (
    <Container>
      <Paper>
        <Header>
          <Heading>All Notifications</Heading>
        </Header>
        <Table>
          <TableHead>
              <TableCell>S/N</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Send By</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
          </TableHead>
        </Table>
        <TableBody>
          <TableRow>
              <TableCell>1</TableCell>
              <TableCell>how you</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>1</TableCell>
              <TableCell>how you</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>1</TableCell>
              <TableCell>how you</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>1</TableCell>
              <TableCell>how you</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>1</TableCell>
              <TableCell>how you</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>1</TableCell>
              <TableCell>how you</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>1</TableCell>
              <TableCell>how you</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>1</TableCell>
              <TableCell>how you</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
          </TableRow>
        </TableBody>
      </Paper>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
align-items: center;
background: transparent;
color: inherit;
`
const Header = styled.div`
width: 100%;
padding: 20px;
align-items: center;
background: rgb(20,10,10);
`
const Heading = styled.div`
font-size: 20px;
font-weight: bold;
color: #fff;
`
