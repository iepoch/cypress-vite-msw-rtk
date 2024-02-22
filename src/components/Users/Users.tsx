import { Box } from "@mui/material";
import { useGetUsersQuery } from "../../services/users/usersApiSlice";
import { UsersList } from "./UsersList";
import Sheet from '@mui/joy/Sheet';

import Table from '@mui/joy/Table';

export const Users = () => {
  const { data = [] } = useGetUsersQuery()

    return (
      <Box   component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: 'calc(12px + var(--Header-height))',
          sm: 'calc(12px + var(--Header-height))',
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        height: '100dvh',
        gap: 1,
      }}>
      <Sheet
      className="OrderTableContainer"
      variant="outlined"
      sx={{
        display: { xs: 'none', sm: 'initial', },
        width: '100%',
        borderRadius: 'sm',
        flexShrink: 1,
        overflow: 'auto',
        minHeight: 0,
      }}
    >
      <Table 
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        sx={{
          '--TableCell-headBackground': 'AliceBlue',
          '--Table-headerUnderlineThickness': '1px',
          '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
          '& tr > *:first-child': { bgcolor: 'success.softBg' },
          "--TableCell-height": "30px",
          "--TableCell-paddingX": "4px",
          "--TableCell-paddingY": "4px",
        }}>
        <thead>
          <tr>
            <th style={{ width: 140, padding: '12px 6px' }}>First Name</th>
            <th style={{ width: 140, padding: '12px 6px' }}>Last Name</th>
            <th style={{ width: 240, padding: '12px 6px' }}>Email</th>
            <th style={{ width: 140, padding: '12px 6px' }}> </th>
          </tr>
        </thead>
        <tbody>
        {data.map((users) =>(
        <UsersList users={users} />
         ))}
        </tbody>
      </Table>
    </Sheet>
    </Box>
)
}