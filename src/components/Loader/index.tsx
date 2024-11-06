import { Box, CircularProgress, Typography } from "@mui/material"

const Loader = () => {
	return (
		<Box textAlign="center">
		<CircularProgress />
		<Typography variant="body1" color="textSecondary" mt={2}>
			Loading...
		</Typography>
	</Box>
	)
}
export default Loader 
