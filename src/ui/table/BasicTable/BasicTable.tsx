// import {Box} from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'tipo',
        headerName: 'Tipo',
        editable: true,
    },
    {
        field: 'ingreso',
        headerName: 'Ingreso',
        editable: true,
    },
];

const rows = [
    {id:"1" ,tipo: 'Snow', ingreso: '1200'},
    {id:"2" ,tipo: 'Lannister', ingreso: '1200'},
    {id:"3" ,tipo: 'Lannister', ingreso: '1200'},
]


export const BasicTable = () => {

    return (
        <>
            <div style={{position: "relative",height:"auto"}}>
                {/*<Box >*/}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                />
                {/*</Box>*/}
            </div>
        </>
    )
}