import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { products } from '../../data';
import { Link } from 'react-router-dom';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './products.css'


const Products = () => {
    const [productsData, setProductsData] = useState(products)


    const productHandler = (productId) => {
        setProductsData(productsData.filter(product => product.id !== productId))

    }

    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 90
        },
        {
            field: 'title',
            headerName: 'Name',
            width: 200,
            renderCell: (params) => {
                return (
                    <Link to={`/product/${params.row.id}`} className='link'>
                        <div className='userlistUser'>
                            <img src={params.row.avatar} alt="" className="userListImg" />
                            <span>{params.row.title}</span>
                        </div>
                    </Link>
                )

            }
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='userListAction'>
                        <Link to={`/product/${params.row.id}`} className='link'>
                            <button className="userListbtn">
                                {/* <EditIcon className='userListIcon'/> */}Edit
                            </button>
                        </Link>

                        <button className="userListRemove" onClick={() => { productHandler(params.row.id) }}>
                            <DeleteOutlinedIcon />
                        </button>
                    </div>
                );

            }
        }
    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={productsData}
                columns={columns}

                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 4,
                        },
                    },
                }}
                disableRowSelectionOnClick
                pageSizeOptions={[4]}
                checkboxSelection
            />
        </div>
    );
}

export default Products;
