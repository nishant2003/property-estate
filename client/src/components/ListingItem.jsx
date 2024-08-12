import React from 'react'; 
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { ToastContainer,toast } from 'react-toastify';

const notify = () => toast('Property added Succsfully!');
export default function ListingItem({ listing }) {

  const handleClick = () => {
    notify(); 
  };
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>
          <p className='text-slate-500 mt-2 font-semibold '>
          ₹
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import { MdLocationOn } from "react-icons/md";

// export default function ListingItem({ listing }) {
//   return (
//     <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
//       <Link to={`/listing/${listing._id}`}>
//         <img
//           src={
//             listing.imageUrls[0] ||
//             "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
//           }
//           alt="listing cover"
//           className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
//         />
//         <div className="p-3 flex flex-col gap-2 w-full">
//           <p className="truncate text-lg font-semibold text-slate-700">
//             {listing.name}
//           </p>
//           <div className="flex items-center gap-1">
//             <MdLocationOn className="h-4 w-4 text-green-700" />
//             <p className="text-sm text-gray-600 truncate w-full">
//               {listing.address}
//             </p>
//           </div>
//           <p className="text-sm text-gray-600 line-clamp-2">
//             {listing.description}
//           </p>
//           <p className="text-slate-500 mt-2 font-semibold ">
//             $
//             {listing.offer
//               ? listing.discountPrice.toLocaleString("en-US")
//               : listing.regularPrice.toLocaleString("en-US")}
//             {listing.type === "rent" && " / month"}
//           </p>
//           <div className="text-slate-700 flex gap-4">
//             <div className="font-bold text-xs">
//               {listing.bedrooms > 1
//                 ? `${listing.bedrooms} beds `
//                 : `${listing.bedrooms} bed `}
//             </div>
//             <div className="font-bold text-xs">
//               {listing.bathrooms > 1
//                 ? `${listing.bathrooms} baths `
//                 : `${listing.bathrooms} bath `}
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import { MdLocationOn } from "react-icons/md";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { signup } from "../../../api/controllers/auth.controller";
// export default function ListingItem({ listing }) {
//   // const id = useSelector((state) => state.user._id);
//   const [userExists, setUserExists] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   var exists = false;

//   useEffect(() => {
//     const checkUserExists = async (userId) => {
//       try {
//         const response = await fetch(`/api/listing/get/${userId}`);
//         const data = await response.json();
//         // console.log(response.status);

//         if (response.ok == true) {
//           console.log("in databse")
//           exists = true;
//           setUserExists(data.user);
//         } else {
//           exists = false;
//           // Navigate("/signup");
//         }
//       } catch (err) {
//         setError("Error fetching user data");
//       } finally {
//         setLoading(false);
//       }
//   };

//     const persistedState = localStorage.getItem("persist:root");
//     if (persistedState) {
//       const parsedState = JSON.parse(persistedState);
//       const currentUserState = JSON.parse(parsedState.user); // Adjust path based on your state structure
//       const userId = currentUserState?.currentUser?._id;

//       if (userId) {
//         checkUserExists(userId);
//       } else {
//         setError("No user ID found");
//         setLoading(false);
//       }
//     } else {
//       // navigate("/signup");
//       setError("No persisted state found");
//       setLoading(false);
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const res = await fetch("/listing/:listingId", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       if (data.success === false) {
//         setLoading(false);
//         setError(data.message);
//         return;
//       }
//       setLoading(false);
//       setError(null);
//       // navigate("/signup");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div
//       className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden
//     rounded-lg w-full sm:w-[330px]"
//     >
//       {/* {exists}: */}
//       <Link to={`/listing/${listing._id}`}>
//         <img
//           src={listing.imageUrls[0]}
//           alt="listing cover"
//           className="h-[320px] sm:h-[220] w-full object-cover hover:scale-105 transition-scale duration-300"
//         ></img>
//         <div className="p-3 flex flex-col gap-2 w-full">
//           <p className="truncate  text-lg font-semibold text-slate-700">
//             {listing.name}
//           </p>
//           <div className=" flex items-center gap-1">
//             <MdLocationOn className="h-4 w-4 text-green-700" />
//             <p className="text-sm text-gray-600 w-full">{listing.address}</p>
//           </div>
//           <p class name="text-sm line-clamp-2 text-gray-600">
//             {listing.description}
//           </p>
//           <p>
//             ₹
//             {listing.offer
//               ? listing.discountPrice.toLocaleString("en-US")
//               : listing.regularPrice.toLocaleString("en-US")}
//             {listing.type === "rent" && "/month"}
//           </p>
//           <div className="text-slate-700 flex gap-4">
//             <div className="font-bold text-xs">
//               {listing.bedrooms > 1
//                 ? `${listing.bedrooms} beds`
//                 : `${listing.bedrooms} bed`}
//             </div>
//             <div className="font-bold text-xs">
//               {listing.bathrooms > 1
//                 ? `${listing.bathrooms} baths`
//                 : `${listing.bathrooms} bath`}
//             </div>
//           </div>
//         </div>
//       </Link>
//       {/* : */}
//       {/* <Link to={signup}></Link> */}
//     </div>
//   );
// }
