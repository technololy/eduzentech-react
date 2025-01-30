'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

interface AcademicSession {
  id: string;
  term: string;
  session: string;
  active: boolean;
  resultPublished: boolean;
  lastUpdated: string;
}

const sessions: AcademicSession[] = [
  { id: '1', term: 'First Term', session: '2024/2025', active: true, resultPublished: false, lastUpdated: 'Mon, 24th Nov, 2024-9:45am' },
  { id: '2', term: 'First Term', session: '2024/2025', active: true, resultPublished: false, lastUpdated: 'Mon, 24th Nov, 2024-9:45am' },
  { id: '3', term: 'First Term', session: '2024/2025', active: true, resultPublished: false, lastUpdated: 'Mon, 24th Nov, 2024-9:45am' },
  { id: '4', term: 'First Term', session: '2024/2025', active: true, resultPublished: false, lastUpdated: 'Mon, 24th Nov, 2024-9:45am' },
  { id: '5', term: 'First Term', session: '2024/2025', active: true, resultPublished: false, lastUpdated: 'Mon, 24th Nov, 2024-9:45am' },
];

export default function AcademicSettings() {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [currentSession, setCurrentSession] = React.useState('2024/2025');

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedIds(sessions.map((session) => session.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Typography variant="h4">Academic Settings</Typography>
      <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ my: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Select
          value={currentSession}
          onChange={(e) => setCurrentSession(e.target.value)}
          size="small"
        >
          <MenuItem value="2024/2025">Current Session</MenuItem>
          <MenuItem value="2023/2024">2023/2024</MenuItem>
          <MenuItem value="2022/2023">2022/2023</MenuItem>
        </Select>
        <Button variant="contained" color="success" startIcon={<AddIcon />}>
          Add New Session
        </Button>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedIds.length === sessions.length}
                indeterminate={selectedIds.length > 0 && selectedIds.length < sessions.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell>Term</TableCell>
            <TableCell>Session</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Result Published</TableCell>
            <TableCell>Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions.map((session) => (
            <TableRow key={session.id}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedIds.includes(session.id)}
                  onChange={() => handleSelectOne(session.id)}
                />
              </TableCell>
              <TableCell>{session.term}</TableCell>
              <TableCell>{session.session}</TableCell>
              <TableCell>{session.active ? <CheckIcon color="success" /> : <CloseIcon color="error" />}</TableCell>
              <TableCell>{session.resultPublished ? <CheckIcon color="success" /> : <CloseIcon color="error" />}</TableCell>
              <TableCell>{session.lastUpdated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination count={10} size="small" />
      </Box>
    </Container>
  );
}
