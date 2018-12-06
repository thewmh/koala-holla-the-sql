import { createMuiTheme } from '@material-ui/core/styles';
import { grey, cyan } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
			main: grey[900],
		},
    secondary: {
			main: cyan[800],
		},
		background: 'powderblue',
	},
	typography: {
		useNextVariants: true,
	},
	shape: {
		borderRadius: 2,
	},
});

export default theme;