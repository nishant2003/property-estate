import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim()) {
      const phone = landlord.phone || "8219268634"; // Fallback to hardcoded if not provided
      window.open(
        `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`,
        "_blank",
        "noreferrer"
      );
    } else {
      alert("Please enter a message before sending.");
    }
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log("Failed to fetch landlord information:", error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${encodeURIComponent(message)}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
          <button
            className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
            onClick={handleSubmit}
          >
            Whatsapp owner
          </button>
        </div>
      )}
    </>
  );
}



// import React from 'react'



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Contact({ listing }) {
//   const [landlord, setLandlord] = useState(null);
//   const [message, setMessage] = useState("");
//   const onChange = (e) => {
//     setMessage(e.target.value);
//   };
//   const handleSubmit = () => {
//     window.open("https://api.whatsapp.com/send?phone=8219268634", "_blank", "noreferrer");
//   };

//   useEffect(() => {
//     const fetchLandlord = async () => {
//       try {
//         const res = await fetch(`/api/user/${listing.userRef}`);
//         const data = await res.json();
//         setLandlord(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchLandlord();
//   }, [listing.userRef]);
//   return (
//     <>
//       {landlord && (
//         <div className="flex flex-col gap-2">
//           <p>
//             Contact <span className="font-semibold">{landlord.username}</span>{" "}
//             for{" "}
//             <span className="font-semibold">{listing.name.toLowerCase()}</span>
//           </p>
//           <textarea
//             name="message"
//             id="message"
//             rows="2"
//             value={message}
//             onChange={onChange}
//             placeholder="Enter your message here..."
//             className="w-full border p-3 rounded-lg"
//           ></textarea>

//           <Link
//             to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
//             className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
//           >
//             Send Message
//           </Link>
//           <button className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3" 
//             onClick={handleSubmit}>
//               Whatsapp owner
//             </button> 
//         </div>
//       )}
//     </>
//   );
// }
