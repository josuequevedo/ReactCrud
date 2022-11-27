import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Input, FormControl, InputLabel } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	height: 500,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export const ModalForm = ({ open, handleClose, userEdit }) => {
	console.log('PROP', userEdit);
	const [user, setUser] = useState({
		id: userEdit?.id,
		name: userEdit?.name,
		email: userEdit?.email,
		city: userEdit?.city,
		username: userEdit?.username,
		website: userEdit?.website,
	});

	console.log('this is user', user?.id);

	const handleChange = (e) => {
		let property = e.target.name;
		setUser({ ...user, [property]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (user.id) {
			return console.log('fineeeeeeeeeeee');
		} else {
			fetch('https://immense-shelf-01877.herokuapp.com/users', {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
			setUser({
				name: '',
				email: '',
				city: '',
				username: '',
				website: '',
			});
		}
	};

	return (
		<Box>
			<Modal open={open}>
				<Box sx={style}>
					<form action=''>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								mt: 5,
							}}
						>
							<FormControl
								sx={{
									mb: 2,
									width: '80%',
								}}
							>
								<InputLabel htmlFor='name'>Your Name</InputLabel>
								<Input
									name='name'
									value={user.name}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl
								sx={{
									mb: 2,
									width: '80%',
								}}
							>
								<InputLabel htmlFor='email'>Your Email</InputLabel>
								<Input
									name='email'
									value={user.email}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl
								sx={{
									mb: 2,
									width: '80%',
								}}
							>
								<InputLabel htmlFor='city'>Your City</InputLabel>
								<Input
									name='city'
									value={user.city}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl
								sx={{
									mb: 2,
									width: '80%',
								}}
							>
								<InputLabel htmlFor='username'>Your Username</InputLabel>
								<Input
									name='username'
									value={user.username}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl
								sx={{
									mb: 5,
									width: '80%',
								}}
							>
								<InputLabel htmlFor='website'>Your Website</InputLabel>
								<Input
									name='website'
									value={user.website}
									onChange={handleChange}
								/>
							</FormControl>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									gap: 5,
								}}
							>
								<Button
									sx={{ bgcolor: '#0070f3' }}
									type='submit'
									variant='contained'
									onClick={handleSubmit}
								>
									Send
								</Button>
								<Button
									type='submit'
									variant='contained'
									color='error'
									onClick={handleClose}
								>
									close
								</Button>
							</Box>
						</Box>
					</form>
				</Box>
			</Modal>
		</Box>
	);
};
