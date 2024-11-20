import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { rowUsers } from '../../data';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './Users.css'
import { Link } from 'react-router-dom';




const Users = () => {

    const [userData, setUserData] = useState(rowUsers)

    const deletHandler =(userId) => {
        setUserData(userData.filter(user => user.id !== userId) )

    }

    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 90
        },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='userlistUser'>
                        <img src={params.row.avatar} alt="" className="userListImg" />
                        <span>{params.row.username}</span>
                    </div>
                )

            }
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='userListAction'>
                        <Link to={`/user/${params.row.id}`} className='link'>
                            <button className="userListbtn">
                                {/* <EditIcon className='userListIcon'/> */}Edit
                            </button>
                        </Link>

                        <button className="userListRemove" onClick={() => {deletHandler(params.id)}}>
                            <DeleteOutlinedIcon />
                        </button>
                    </div>
                )

            }
        }


    ]


    return (
        <div className='userList'>
            <DataGrid
                rows={userData}
                columns={columns}

                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 4,
                        },
                    },
                }}
                disableRowSelectionOnClick
                pageSizeOptions={[3]}
                checkboxSelection
            />
        </div>
    );
}

export default Users;
