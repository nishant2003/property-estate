import React from "react";

export default function About() {
  const handleContactClick = () => {
    window.location.href = "mailto:21bcs3182@cuchd.in";
  };

  return (
    <div className='p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg'>
      <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>
        About Us
      </h1>
      <section className='mb-12'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
          Our Mission
        </h2>
        <p className='text-lg text-gray-700'>
          At Property Hub, our mission is to simplify the process of buying, selling, and renting properties. We strive to provide a user-friendly platform that connects people with their ideal homes while ensuring transparency and reliability throughout the process. Our dedicated team is committed to delivering exceptional service and innovative solutions to meet the needs of our clients.
        </p>
      </section>
      <section className='mb-12'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
          Our Story
        </h2>
        <p className='text-lg text-gray-700'>
          Property Hub was founded with a vision to transform the real estate industry. Our founders recognized the challenges faced by buyers and sellers in the traditional property market and set out to create a more efficient, transparent, and user-centric platform. Since our inception, we have continuously evolved to incorporate the latest technology and trends, ensuring that our users have access to the best tools and resources available.
        </p>
      </section>
      <section className='mb-12'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
          Meet the Team
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md'>
            <img
              src='https://i.postimg.cc/c448hH3m/photo.jpg'
              alt='Team Member'
              className='w-32 h-32 object-cover rounded-full mb-4'
            />
            <h3 className='text-xl font-semibold text-gray-800'>Nishant Dhiman</h3>
            <p className='text-gray-600'>Co-Founder & CEO</p>
          </div>
        </div>
      </section>
      <section className='text-center'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
          Get in Touch
        </h2>
        <p className='text-lg text-gray-700 mb-4'>
          We would love to hear from you! If you have any questions or feedback, please feel free to reach out to us.
        </p>
        <button
          onClick={handleContactClick}
          className='bg-blue-600 text-white py-3 px-6 rounded-lg text-lg uppercase hover:bg-blue-700'
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}
