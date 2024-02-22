import { FC, useState } from 'react';
import { useFetchBreedsQuery } from '../../services/dogs/dogApiSlice';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@mui/material';

export const Dogs: FC = () => {
  const { data = [] } = useFetchBreedsQuery(90);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div>
        {' '}
        <header data-testid="number-dogs-hd">
          Number of Dogs Fetched: {data.length}{' '}
        </header>{' '}
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((breed) => (
                <TableRow key={breed.id}>
                  <TableCell>{breed.name}</TableCell>
                  <TableCell>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component={Paper}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        data-cy={'RowsPerPage'}
      />
    </div>
  );
};
