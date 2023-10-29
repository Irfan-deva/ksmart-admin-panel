import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import './RecentOrders.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'product',
    headerName: 'Product',
    width: 300,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 110,
    editable: true,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'total',
    headerName: 'Total Amount',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, product: 'Snow', price: 100, quantity: 35, 'total': 100, 'status': 'placed' },
  { id: 2, product: 'Lannister', price: 50, quantity: 42, 'total': 100, 'status': 'placed' },
  { id: 3, product: 'Lannister', price: 10, quantity: 45, 'total': 100, 'status': 'placed' },
  { id: 4, product: 'Stark', price: 500, quantity: 16, 'total': 100, 'status': 'placed' },
  { id: 5, product: 'Targaryen', price: 30, quantity: 6, 'total': 100, 'status': 'placed' },
  { id: 6, product: 'Melisandre', price: 80, quantity: 150, 'total': 100, 'status': 'placed' },
  { id: 7, product: 'Clifford', price: 250, quantity: 44, 'total': 100, 'status': 'placed' },
  { id: 8, product: 'Frances', price: 600, quantity: 36, 'total': 100, 'status': 'placed' },
  { id: 9, product: 'Roxie', price: 30, quantity: 65, 'total': 100, 'status': 'placed' },
];


function RecentOrders() {
  return (
    <div className='recentOrders'>
      <div className="recentOrdersTitle">
        <h3>Recent Orders</h3>
        <span className="viewAll">View All</span>
      </div>
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default RecentOrders