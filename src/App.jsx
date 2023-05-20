import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import { RouterConfig } from './Router/RouterConfig';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';

function App() {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = createTheme({
        palette: {
            // mode: isDarkMode ? 'dark' : 'light'
            mode: 'light',
            mainColor: {
                main: '#3B3B40',
            },
            accentColor: {
                // 落ち着いた緑
                // main: '#40BD5D',
                // 青緑
                // main: '#008080'
                // 明るめの緑
                // main: '#90ee90',
                // 黄色
                main: '#ffff1a'
            },
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterConfig />
        </ThemeProvider>
    )
}

export default App
