import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "../components/ListingItem";

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "created_at",
    order: "desc",
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingFromUrl = urlParams.get("parking");
    const furnishedFromUrl = urlParams.get("furnished");
    const offerFromUrl = urlParams.get("offer");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        parking: parkingFromUrl === "true",
        furnished: furnishedFromUrl === "true",
        offer: offerFromUrl === "true",
        sort: sortFromUrl || "created_at",
        order: orderFromUrl || "desc",
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      if (data.length > 8) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, type, checked, value } = e.target;
    if (id === "searchTerm") {
      setSidebardata({ ...sidebardata, searchTerm: value });
    } else if (id === "sort_order") {
      const [sort, order] = value.split("_");
      setSidebardata({ ...sidebardata, sort: sort || "created_at", order: order || "desc" });
    } else if (["parking", "furnished", "offer"].includes(id)) {
      setSidebardata({ ...sidebardata, [id]: checked });
    } else if (["all", "rent", "sale"].includes(id)) {
      setSidebardata({ ...sidebardata, type: id });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(sidebardata);
    navigate(`/search?${urlParams.toString()}`);
  };

  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", numberOfListings);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/listing/get?${searchQuery}`);
    const data = await res.json();
    if (data.length < 9) {
      setShowMore(false);
    }
    setListings([...listings, ...data]);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="p-6 md:p-8 border-b-2 md:border-r-2 md:min-h-screen bg-white shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Search Term */}
          <div className="flex flex-col gap-2">
            <label htmlFor="searchTerm" className="text-lg font-semibold text-gray-700">
              Search Term
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Enter search term..."
              className="border rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>

          {/* Type Selection */}
          <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold text-gray-700">Type</label>
            <div className="flex flex-col gap-2">
              {["all", "rent", "sale"].map((type) => (
                <div key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={type}
                    name="type"
                    className="form-radio"
                    onChange={handleChange}
                    checked={sidebardata.type === type}
                  />
                  <label htmlFor={type} className="text-gray-600 capitalize">{type}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Offer Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="offer"
              className="form-checkbox"
              onChange={handleChange}
              checked={sidebardata.offer}
            />
            <label htmlFor="offer" className="text-gray-600">Offer</label>
          </div>

          {/* Amenities */}
          <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold text-gray-700">Amenities</label>
            <div className="flex flex-col gap-2">
              {["parking", "furnished"].map((amenity) => (
                <div key={amenity} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={amenity}
                    className="form-checkbox"
                    onChange={handleChange}
                    checked={sidebardata[amenity]}
                  />
                  <label htmlFor={amenity} className="text-gray-600 capitalize">{amenity}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex flex-col gap-2">
            <label htmlFor="sort_order" className="text-lg font-semibold text-gray-700">
              Sort
            </label>
            <select
              onChange={handleChange}
              defaultValue="created_at_desc"
              id="sort_order"
              className="border rounded-lg p-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>

      {/* Listings Results */}
      <div className="flex-1 p-6 md:p-8">
        <h1 className="text-3xl font-semibold border-b pb-3 text-slate-700">
          Listing Results
        </h1>
        <div className="flex flex-wrap gap-6">
          {/* No Listings */}
          {!loading && listings.length === 0 && (
            <p className="text-xl text-slate-700 w-full text-center">No listings found!</p>
          )}

          {/* Loading */}
          {loading && (
            <p className="text-xl text-slate-700 w-full text-center">Loading...</p>
          )}

          {/* Listings */}
          {!loading && listings.map((listing) => (
            <ListingItem key={listing._id} listing={listing} />
          ))}

          {/* Show More Button */}
          {showMore && (
            <button
              onClick={onShowMoreClick}
              className="bg-green-500 text-white hover:bg-green-400 p-3 rounded-lg transition duration-300 text-center w-full mt-4"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}



