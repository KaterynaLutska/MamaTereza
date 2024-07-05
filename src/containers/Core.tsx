import React, { FC } from 'react';

import CoreProvider from '@contexts/CoreProvider';
import App from '@/App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});


export const Core: FC = () => {
	return (
		<CoreProvider>
		      <ThemeProvider theme={theme}> 
		        <CssBaseline />
		       <App/>
		         <CssBaseline />
		     </ThemeProvider> 
	     </CoreProvider>
	)
}
