import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.error(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Top Section */}
      <div className='flex flex-col gap-6 p-10 lg:p-28 px-3 max-w-6xl mx-auto bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg shadow-lg text-center'>
        <h1 className='text-white font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-yellow-300'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-white text-xs sm:text-sm'>
          Sahand Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-300'
        >
          Let's get started...
        </Link>
      </div>

      {/* Swiper Section */}
      <div className='my-10'>
        <Swiper navigation className='rounded-lg shadow-lg'>
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                  className='h-[500px] rounded-lg'
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Listing Results for Offer, Sale, and Rent */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent Offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {offerListings.map((listing) => (
                <div className='flex-1 min-w-[300px]'>
                  <ListingItem listing={listing} key={listing._id} />
                </div>
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent Places for Rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {rentListings.map((listing) => (
                <div className='flex-1 min-w-[300px]'>
                  <ListingItem listing={listing} key={listing._id} />
                </div>
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent Places for Sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {saleListings.map((listing) => (
                <div className='flex-1 min-w-[300px]'>
                  <ListingItem listing={listing} key={listing._id} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

// export default function Home() {
  // const [userExists, setUserExists] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
//   var exists = false;
  // useEffect(() => {
  //   const checkUserExists = async (userId) => {
  //     try {
  //       const response = await fetch(`/api/listing/get?${userId}`);
  //       const data = await response.json();
  //       // console.log(response.status);

  //       if (response.ok == true) {
  //         console.log("in databse")
  //         exists = true;
  //         setUserExists(data.user);
  //       } else {
  //         exists = false;
  //         Navigate("/signup");
  //       }
  //     } catch (err) {
  //       setError("Error fetching user data");
  //     } finally {
  //       setLoading(false);
  //     }
  // };

  //   const persistedState = localStorage.getItem("persist:root");
  //   if (persistedState) {
  //     const parsedState = JSON.parse(persistedState);
  //     const currentUserState = JSON.parse(parsedState.user); // Adjust path based on your state structure
  //     const userId = currentUserState?.currentUser?._id;

  //     if (userId) {
  //       checkUserExists(userId);
  //     } else {
  //       setError("No user ID found");
  //       setLoading(false);
  //     }
  //   } else {
  //     navigate("/signup");
  //     setError("No persisted state found");
  //     setLoading(false);
  //   }
  // }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div>
//       <h1>Home Page</h1>
//       {userExists ? (
//         <div>
//           <h2>Welcome, {userExists.username}!</h2>
//           {/* Render user-related content here */}
//         </div>
//       ) : (
//         <div>
//           <p>User does not exist</p>
//           <Link to="/signin">Sign In</Link>
//         </div>
//       )}
//     </div>
//   );
// }

