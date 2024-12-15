/* import React, { useEffect, useState } from "react";
import product from "../services/product";
import Slider from "react-slick";
import { useParams } from "react-router-dom";

const Carousel = () => {
  const { id } = useParams(); 
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    product.Getone(id)
      .then((res) => {
        setProductDetails(res.data.getone); 
        console.log("Product details:", res.data.getone);
      })
      .catch((error) => console.log("Error fetching product details:", error));
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {productDetails ? (
        <>
          <h2>{productDetails.Ref}</h2>
          <p>{productDetails.Description}</p>
          <p>Price: {productDetails.Price}</p>
          <p>Quantity: {productDetails.Qnt}</p>
          <Slider {...settings}>
            {productDetails.image && productDetails.image.length > 0 ? (
              productDetails.image.map((img, index) => (
                <div key={index}>
                  <img
                    src={`http://localhost:3000/file/${img}`}
                    alt={`Product ${index}`}
                    style={{ width: "33.33%", height: "auto", padding:"10px", margin: "10px" }}
                  />
                </div>
              ))
            ) : (
              <p>No images available for this product.</p>
            )}
          </Slider>
          </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Carousel;
 */
import SimpleImageSlider from "react-simple-image-slider";

const SliderImage = ({img})=>{

  const data = img.map((item)=>{
    return{
      url:`http://localhost:3000/file/${item}`
    }
    
  })



  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={data}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default SliderImage 