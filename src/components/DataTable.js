import { styled } from '@mui/material/styles';
import React from 'react'
import MaterialTable from 'material-table'


const DataTable = () => {


    const colums = [
       { title: "Name", field: 'name', cellStyle: {
        backgroundColor: '#039be5',
        color: '#FFF'
      },
      headerStyle: {
        backgroundColor: 'pink',
      }},
       { title: 'Img', field: 'img'},
       { title: 'Price', field: 'price', type: "numeric"},
       { title: 'Description', field: 'description'}
    ]

    const data = [
        {
            name: 'tv',
            img: '/dasda.png',
            price: 50,
            description: 'olo current quarte tear end send tend'

        },
        {
            name: 'tdsaddssdv',
            img: '/dasda.png',
            price: 50,
            description: 'otear end send tenddd'

        },
        {
            name: 'vvvvvvv',
            img: '/dasddda.png',
            price: 56,
            description: 'olo current quarte tear end send tend'

        },
    ]



    return (
        <div  >
            <MaterialTable 
                
                columns = { colums }
                data = { data }
                title = "CRUD Products"
                actions = {[
                    {
                        icon: 'edit',
                        tooltip: 'Edit',
                        onClick: (e,row) => alert (' Editar Producto: ' + row.name )
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete',
                        onClick: (e,row) => window.confirm (' Delete Producto: ' + row.name + ' ? ' )
                    },
                ]}
                options = {{
                    actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'
                      }
                    
                }}
            />
        </div>
    )
}

export default DataTable
