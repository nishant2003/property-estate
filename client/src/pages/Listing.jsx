// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
// import { useSelector } from "react-redux";
// import { Navigation } from "swiper/modules";
// import "swiper/css/bundle";
// import "react-toastify/dist/ReactToastify.css";
// import { toast,ToastContainer } from "react-toastify";
// import {
//   FaBath,
//   FaBed,
//   FaChair,
//   FaMapMarkerAlt,
//   FaParking,
//   FaShare,
// } from "react-icons/fa";
// import Contact from "../components/Contact";
// import "react-toastify/dist/ReactToastify.css";

// SwiperCore.use([Navigation]);

// export default function Listing() {
//   const [listing, setListing] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [contact, setContact] = useState(false);
//   const [userExists, setUserExists] = useState(false); // Added state for user existence

//   const params = useParams();
//   const navigate = useNavigate();
//   const { currentUser } = useSelector((state) => state.user);
//   console.log(currentUser)
//   const UserID = currentUser?._id;
//   // console.log(UserID + "userid");

//   var loda = false;

//   useEffect(() => {
//     const checkUserExists = async (userId) => {

//       try {
//         // console.log(userId);
//         const response = await fetch(`/get/${userId}`);
//         const data = await response.json();
//         // console.log(data);
//         if (response.ok) {
//           console.log(userId);
//           setUserExists(true);
//         } else {
//           setUserExists(true);
//         }
//       } catch (err) {
//         setError("Error fetching user data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const persistedState = localStorage.getItem("persist:root");
//     if (persistedState) {
//       const parsedState = JSON.parse(persistedState);
//       const currentUserState = JSON.parse(parsedState.user);
//       const userId = currentUserState?.currentUser?._id;

//       // console.log(userId);
//       // if(userId == 'undefined'){
//       //   notify();
//       // }
//       // if(userId != undefined){
//       //   loda = true;
//       //   checkUserExists();
//       // } else {
//       //   setError("No user ID found");
//       //   setLoading(false);
//       //   loda=false;
//       // }
//     } else {
//       setError("No persisted state found");
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/listing/get/${params.listingId}`);
//         const data = await res.json();
//         if (data.success === false) {
//           setError(true);
//           setLoading(false);
//           return;
//         }
//         setListing(data);
//         setLoading(false);
//         setError(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchListing();
//   }, [params.listingId]);
//   const notify = () => toast("please Sign up first!");
//   function showAlertOnce() {
//     if (!sessionStorage.getItem('alertShown')) {
//       alert('Please Sign to Explore!!');
//       sessionStorage.setItem('alertShown', 'true');
//     }
//   }
//   const handleSubmit = () => {
//     window.open("https://api.whatsapp.com/send?phone=8219268634", "_blank", "noreferrer");
//   };
//   // const handleSubmit = async () => {
//   //   <a
//   //     className="btn btn-hire"
//   //     href="https://api.whatsapp.com/send?phone=8219268634"
//   //     rel="noreferrer"
//   //     target="_blank"
//   //     ></a>
//   // }
//   return (
//     <main>
//       {/* <ToastContainer /> */}
//       {UserID == null
//         ? (
//         // alert("Please Sign to Explore!!"),
//         showAlertOnce(),
//           navigate("/signup")
//         )

//         : (console.log("User Exists"),navigate("/signup"))
//         }

//       {loading  &&<p className="text-center my-7 text-2xl">Loading...</p>}
//       {error && (
//         <p className="text-center my-7 text-2xl">Something went wrong!</p>
//       )}
//       {listing   && !loading && !error && (
//         <div>
//           <Swiper navigation>
//             {listing.imageUrls.map((url) => (
//               <SwiperSlide key={url}>
//                 <div
//                   className="h-[550px]"
//                   style={{
//                     background: `url(${url}) center no-repeat`,
//                     backgroundSize: "cover",
//                   }}
//                 ></div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
//             <FaShare
//               className="text-slate-500"
//               onClick={() => {
//                 navigator.clipboard.writeText(window.location.href);
//                 setCopied(true);
//                 setTimeout(() => {
//                   setCopied(false);
//                 }, 2000);
//               }}
//             />
//           </div>
//           {copied && (
//             <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
//               Link copied!
//             </p>
//           )}
//           <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
//             <p className="text-2xl font-semibold">
//               {listing.name} - ₹
//               {listing.offer
//                 ? listing.discountPrice.toLocaleString("en-US")
//                 : listing.regularPrice.toLocaleString("en-US")}
//               {listing.type === "rent" && " / month"}
//             </p>
//             <p className="flex items-center mt-6 gap-2 text-slate-600 text-sm">
//               <FaMapMarkerAlt className="text-green-700" />
//               {listing.address}
//             </p>
//             <div className="flex gap-4">
//               <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
//                 {listing.type === "rent" ? "For Rent" : "For Sale"}
//               </p>
//               {listing.offer && (
//                 <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
//                   ₹{+listing.regularPrice - +listing.discountPrice} OFF
//                 </p>
//               )}
//             </div>
//             <p className="text-slate-800">
//               <span className="font-semibold text-black">Description - </span>
//               {listing.description}
//             </p>
//             <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
//               <li className="flex items-center gap-1 whitespace-nowrap">
//                 <FaBed className="text-lg" />
//                 {listing.bedrooms > 1
//                   ? `${listing.bedrooms} beds `
//                   : `${listing.bedrooms} bed `}
//               </li>
//               <li className="flex items-center gap-1 whitespace-nowrap">
//                 <FaBath className="text-lg" />
//                 {listing.bathrooms > 1
//                   ? `${listing.bathrooms} baths `
//                   : `${listing.bathrooms} bath `}
//               </li>
//               <li className="flex items-center gap-1 whitespace-nowrap">
//                 <FaParking className="text-lg" />
//                 {listing.parking ? "Parking spot" : "No Parking"}
//               </li>
//               <li className="flex items-center gap-1 whitespace-nowrap">
//                 <FaChair className="text-lg" />
//                 {listing.furnished ? "Furnished" : "Unfurnished"}
//               </li>
//             </ul>
//             {currentUser && listing.userRef !== currentUser._id && !contact && (
//               <button>
//               </button>
//             )}

//             {currentUser && listing.userRef !== currentUser._id && !contact && (
//               <button
//                 onClick={() => setContact(true)}
//                 className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3'
//               >
//                 Contact landlord
//               </button>
//             )}
//             {contact && <Contact listing={listing} />}
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";
import Contact from "../components/Contact";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";

SwiperCore.use([Navigation]);

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      navigate("/signin");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    if (currentUser) {
      fetchListing();
    }
  }, [currentUser, params.listingId]);

  const notify = () => toast("Please sign up first!");

  return (
    <main>
      {/* <ToastContainer /> */}
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied!
            </p>
          )}
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <p className="text-2xl font-semibold">
              {listing.name} - ₹
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </p>
            <p className="flex items-center mt-6 gap-2 text-slate-600 text-sm">
              <FaMapMarkerAlt className="text-green-700" />
              {listing.address}
            </p>
            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </p>
              {listing.offer && (
                <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  ₹{+listing.regularPrice - +listing.discountPrice} OFF
                </p>
              )}
            </div>
            <p className="text-slate-800">
              <span className="font-semibold text-black">Description - </span>
              {listing.description}
            </p>
            <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaBed className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds `
                  : `${listing.bedrooms} bed `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaBath className="text-lg" />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths `
                  : `${listing.bathrooms} bath `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaParking className="text-lg" />
                {listing.parking ? "Parking spot" : "No Parking"}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaChair className="text-lg" />
                {listing.furnished ? "Furnished" : "Unfurnished"}
              </li>
            </ul>
            {currentUser && listing.userRef !== currentUser._id && !contact && (
              <button
                onClick={() => setContact(true)}
                className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
              >
                Contact landlord
              </button>
            )}
            {contact && <Contact listing={listing} />}
          </div>
        </div>
      )}
    </main>
  );
}
