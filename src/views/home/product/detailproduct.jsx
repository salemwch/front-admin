import React, { useEffect, useState } from 'react';
import SliderImage from '../../../component/carousel'; // Assurez-vous que ce composant accepte un tableau d'images
import { useParams } from 'react-router-dom';
import product from '../../../services/product';
const DetailProduct = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const NewToken = localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")).tokens.refreshToken :null;
    if(!NewToken){
      console.log("sorry no access");
      return;
    }
        product.Getone(NewToken,id).then((res) => {
        setProductDetails(res.data.getone); // Assurez-vous que res.data.getone contient bien les données du produit
        console.log('Product details:', res.data.getone);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              { productDetails.image.length > 0 ? (
                <div className="card">
                  <SliderImage img={productDetails.image} />
                </div>
              ) : (
                <div>No images available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailProduct;