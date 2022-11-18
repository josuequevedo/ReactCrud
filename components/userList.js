import {
	Box,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { ModalForm } from './modalForm';

export const UserList = ({ userData }) => {
	/* 	const { id, name, email, city, username, website } = userData; */

	return (
		<Box>
			<Box
				sx={{
					marginX: 0,
				}}
			>
				<ModalForm />
			</Box>

			<TableContainer>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>id</TableCell>
							<TableCell align='right'>name</TableCell>
							<TableCell align='right'>email</TableCell>
							<TableCell align='right'>city</TableCell>
							<TableCell align='right'>username</TableCell>
							<TableCell align='right'>website</TableCell>
							<TableCell align='right'>edit</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{userData.map((user) => (
							<TableRow key={user.id}>
								<TableCell>{user.id}</TableCell>
								<TableCell align='right'>{user.name}</TableCell>
								<TableCell align='right'>{user.email}</TableCell>
								<TableCell align='right'>{user.city}</TableCell>
								<TableCell align='right'>{user.username}</TableCell>
								<TableCell align='right'>{user.website}</TableCell>
								<TableCell align='right'>
									<Button variant='outlined' color='warning'>
										Edit
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};
