import React from 'react'



const Outdoor = () => {
  return (
    <section className='mx-[2rem] md:container mt-60 lg:mt-40'>
        <div>
            <div className='grid md:grid-cols-2 work-head items-end  mb-[-15px]  '>
              <h1 className='text-[24px] lg:text-6xl font-semibold  '>Outdoor Paintings</h1>
              
            </div>
            <p className='text-[14px] my-12 text-justify leading-relaxed '>I love to do the outdoor painting for many reasons. One of the most common reasons is doing outdoor activities and being connected with nature, along with the fact that when painting outdoors. It helps me
            to take fast decisions about using color &amp; composition. As well as working quickly allows me to keeps at
            the moment and let me get the essence of the sensor onto the canvas before the light and other factors
            change. Sometimes I also do a final brush-up on my work after I back to my studio from the reference
            picture- as we know there is no wrong way to create artwork!</p>
        </div>

        <div className=''>
            <img className='w-full h-full object-cover gap-y-12' src="/assests/images/outdoor.png" />
        </div>
        <div className='flex justify-center mt-20 mb-32'>
            {/* <button  className='out-btn text-4xl' >View More</button> */}
            <a href="/outdoor" className='outdoor-btn text-[14px] md:text-2xl'>View More</a>
        </div>

    </section>
  )
}

export default Outdoor
