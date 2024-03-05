import { Box, Sheet, Table } from '@mui/joy';
import { IUsers, useGetUsersQuery } from '../../services/users/usersApiSlice';
import { UsersList } from './UsersList';

export const Users = () => {
	const { data = [] } = useGetUsersQuery([]);
	return (
		<Box
			component="main"
			className="MainContent"
			sx={{
				pl: { xs: 2, md: 40 },
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
			}}
		>
			<Sheet
				className="OrderTableContainer"
				variant="outlined"
				sx={{
					display: { xs: 'none', sm: 'initial' },
					width: '80%',
					borderRadius: 'sm',
					flexShrink: 1,
					overflow: 'auto',
					minHeight: 0,
				}}
			>
				<Table
					aria-labelledby="UserTable"
					stickyHeader
					hoverRow
					sx={{
						'--TableCell-headBackground': 'AliceBlue',
						'--Table-headerUnderlineThickness': '1px',
						'--TableRow-hoverBackground':
							'var(--joy-palette-background-level1)',
						'& tr > *:first-child': { bgcolor: 'success.softBg' },
						'--TableCell-height': '30px',
						'--TableCell-paddingX': '4px',
						'--TableCell-paddingY': '4px',
					}}
				>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{data.map((users: IUsers) => (
							<UsersList key={users.id} users={users} />
						))}
					</tbody>
				</Table>
			</Sheet>
		</Box>
	);
};
