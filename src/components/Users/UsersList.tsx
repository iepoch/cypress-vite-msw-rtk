import { Typography } from '@mui/joy';

export type Props = {
	users: {
		id: string;
		firstName: string;
		lastName: string;
		email: string;
	};
};

export const UsersList = ({ users }: Props) => {
	const { id, firstName, lastName, email } = users;
	return (
		<tr key={id + lastName}>
			<td>
				<Typography level="body-xs">{firstName}</Typography>
			</td>
			<td>
				<Typography level="body-xs">{lastName}</Typography>
			</td>
			<td>
				<Typography level="body-xs">{email}</Typography>
			</td>
		</tr>
	);
};
