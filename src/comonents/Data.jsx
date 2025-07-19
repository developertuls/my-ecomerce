
import { useState } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";




export const Data = ({ singeldata }) => {









    const [showDetails, setShowDetails] = useState(false);

    const { id, name, image, price, speed, details, model, rating = 4 } = singeldata;
    const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

      for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  return (
      <div className='m-1 mt-4 hover:bg-gray-100 transition duration-200 h-[320px] flex flex-col justify-between rounded-sm box bg-white border overflow-hidden p-5 text-left'>
      



      
      {/* Main Content */}
      <div className='flex-grow'>
        <h1 className=' font-semibold mb-1'>{name}</h1>








    {/* ✅ Hover the zoom + smooth effect */}
    {/* imges+rap */}
<div className="overflow-visible">
  <img
    onClick={() => setShowDetails(true)}
    className="mt-4 bg-[#f6f6f6] rounded-[10px] mx-auto mb-2 h-[100px] w-auto
               object-contain cursor-pointer transform transition-transform
               duration-300 hover:scale-00 hover:-translate-y-2"
    src={image}
    alt={name}
  />
</div>

    

          <div className='mt-4 font-medium'>
          <hr className='mt-5' />
          <h5 className='text-sm mb-2 mt-2'>Model: {model}</h5>









          {/* ⭐ Rating */}
          <div className='flex items-center space-x-[2px] text-yellow-400 text-[14px] my-2'>
            {renderStars()}
            <span className='text-gray-500 text-[12px] ml-2'>({rating})</span>
          </div>

          <p className='text-sm mb-2'>Price: {price}</p>
        </div>
      </div>







      {/* Bottom Button */}
      <div className=' '>
      <Link to={'/readmor'}><button className='gap-x-3  md:text-lg  flex justify-center items-center  mx-auto w-full  mt-[-4px] transition text-white font-semibold px-3 py-2 text-sm rounded bg-[#22a6b3] hover:py-3 hover:px-4 hover:underline underline-offset-2'>
        <CiShoppingCart className='text-3xl' /> Shop New Car
      </button></Link>
     </div>






      {/* ✅ Modal Details */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-[#f6f6f6] p-6 rounded-md w-[90%] max-w-md shadow-lg relative">
            <button
              className="animate-pulse rounded-full w-[20px] h-[20px] absolute top-2 right-2 text-[red] text-xl font-bold"
              onClick={() => setShowDetails(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>

            <div className='imghover'>    
 



<img

  src={image}
  alt={name}
  className="  w-[200px] h-[150px] object-contain mx-auto"
  
/>
 



 
</div>   
            <p className="text-sm"><strong>Model:</strong> {model}</p>
            <p className="text-sm"><strong>Price:</strong> {price}</p>
            <p className="text-sm"><strong>Speed:</strong> {speed}</p>
            <p className="text-sm mt-2"><strong>Details:</strong> {details}</p>
            <Link to={'/readmor'}><button className='font-semibold md:text-lg  flex justify-center items-center   animate-bounce text-white mt-4  bg-[#130f40] rounded-lg px-2 py-1 border hover:underline underline-offset-4'>
              shpoNew
              <CiShoppingCart className='text-3xl' />
              </button></Link>
       
          
          </div>
        </div>
      )}
    </div>
  );
};
