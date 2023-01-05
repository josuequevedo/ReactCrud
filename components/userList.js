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
import { useState } from 'react';

export const UserList = ({ userData }) => {

// Cuando este componente se renderiza tambien lo hace el modal , el estado 
// userEdit pertenece a este componente y en el find cuando encuentras el user por id
// aunque lo pasas por props el otro estado no lo capta porque ya se renderizo
// al inicio de este componente y la unica forma de modificar un estado existente 
// despues de haber renderizado es con el hook useEffect (Efecto secundario)
// es por eso que cada vez que vas a editar un user debes decirle al useEffect que 
// renderice un nuevo estado , por eso le pasas en el watcher [userEdit] , asi el useEffect
// cada vez que recibe un nuevo userEdit se vuelve a ejecutar y setea los valores en el form
// con react query no pasa esto porque es un estado persistente, hay mayores detalles
// pero yo no los conozco todos
	const [open, setOpen] = useState(false);
	const [userEdit, setUserEdit] = useState({});
	const handleClose = () => {
		setOpen(false); 
		setUserEdit({});
	};

	const handleOpen = () => setOpen(true);

	const findUser = async (id) => {
		const userFound = await userData.find( item => item.id === id)
		setUserEdit(userFound)
	}
	return (
		<>
			<ModalForm
				open={open}
				handleClose={handleClose}
				userEdit={userEdit}
			/>
			<Box>
				<Button
					sx={{ bgcolor: '#0070f3' }}
					variant='contained'
					onClick={() => handleOpen()}
				>
					Add new User
				</Button>

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
							{userData && userData.map((user) => (
								<TableRow key={user.id}>
									<TableCell>{user.id}</TableCell>
									<TableCell align='right'>{user.name}</TableCell>
									<TableCell align='right'>{user.email}</TableCell>
									<TableCell align='right'>{user.city}</TableCell>
									<TableCell align='right'>{user.username}</TableCell>
									<TableCell align='right'>{user.website}</TableCell>
									<TableCell align='right'>
										<Button
											variant='outlined'
											color='warning'
											onClick={async ()=> {
												await findUser(user.id)
												handleOpen()
												
											}}
										>
											Edit
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</>
	);
};
