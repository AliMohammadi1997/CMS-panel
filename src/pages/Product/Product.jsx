import { Link, useParams } from 'react-router-dom';
import { productInfo } from '../../data';
import { products } from '../../data';
import './Product.css'
import Chart from '../../components/Chart/Chart';
import PublishIcon from '@mui/icons-material/Publish';


const Product = () => {
    const params = useParams()

    const productsData = [...products]
    const productsInfo = productsData.find(item => item.id == params.id)



    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newproduct' className='link'>
                    <button className="productTitleBtn">Create</button>
                </Link>
            </div>

            <div className="productTop">

                <div className="productTopLeft">
                    <Chart title='Sale In Month' data={productInfo} dataKey='sales' />
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={productsInfo.avatar} alt={productInfo.title} className='productInfoImg' />
                        <span className="productInfoTopName">{productsInfo.title}</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">ID :</div>
                            <div className="productInfoValue">{productsInfo.id}</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Name :</div>
                            <div className="productInfoValue">{productsInfo.title}</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sale :</div>
                            <div className="productInfoValue">150</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Active :</div>
                            <div className="productInfoValue">Yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Store :</div>
                            <div className="productInfoValue">10</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder={productsInfo.title} />

                        <label >Is Store</label>
                        <select id="isStore">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label >Active</label>
                        <select id="isStore">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="productFormRight">

                        <div className="productUploader">
                             <img src={productsInfo.avatar} alt={productsInfo.title} className="productFormImg" />
                             <label >
                                <PublishIcon/>
                             </label>
                             <input type="file" style={{display:'none'}} />
                        </div>

                        <button className="productFormBtn">Upload</button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Product;
