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

export const ModalForm = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [user, setUser] = useState({
		name: '',
		email: '',
		city: '',
		username: '',
		website: '',
	});

	const handleChange = (e) => {
		let property = e.target.id;
		setUser({ ...user, [property]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

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
	};

	return (
		<Box>
			<Button
				sx={{ bgcolor: '#0070f3' }}
				variant='contained'
				onClick={handleOpen}
			>
				Add new User
			</Button>

			<Modal open={open} onClose={handleClose}>
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
									id='name'
									value={user.name}
									onChange={(e) => handleChange(e)}
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
									id='email'
									value={user.email}
									onChange={(e) => handleChange(e)}
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
									id='city'
									value={user.city}
									onChange={(e) => handleChange(e)}
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
									id='username'
									value={user.username}
									onChange={(e) => handleChange(e)}
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
									id='website'
									value={user.website}
									onChange={(e) => handleChange(e)}
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
									onClick={(e) => handleSubmit(e)}
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
