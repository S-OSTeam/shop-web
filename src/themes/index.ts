import { createTheme } from '@mui/material';

export const theme = createTheme({
    components:{
        MuiCssBaseline:{
            styleOverrides:{
                "*":{
                  padding: 0,
                  margin: 0,
                },
                html:{
                    width: '100%',
                    height: '100%',
                },
                body:{
                    width: '100%',
                    height: '100%',
                },
                '#root':{
                    width: '100%',
                    height: '100%',
                },

            }
        },
        MuiTablePagination:{
            styleOverrides:{
                root:{

                },
                spacer:{

                }
            }
        },
    },
    typography:{

    },

});
export default theme;