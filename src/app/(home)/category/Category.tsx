import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const cateData = [
    {
        "id" : uuidv4(),
        "url": "/assests/images/cate1-min.png",
        "info": "WATERCOLOR PAINTINGS"
    },
    {
        "id" : uuidv4(),
        "url": "/assests/images/cate2-min.png",
        "info": "ACRYLIC PAINTINGS"
    },
    {
        "id" : uuidv4(),
        "url": "/assests/images/cate3-min.png",
        "info": "SKETCHES"
    },
    {
        "id" : uuidv4(),
        "url": "/assests/images/cate4-min.png",
        "info": "DIGITAL ARTS"
    },
]

const Category = () => {
    console.log(cateData);
  return (
    <section className='mt-[6rem] md:mt-[100px]'>

        <div className="md:container mx-[2rem]">
            <div className='category grid justify-end '>

                <div className='grid md:grid-cols-2 items-end'>
                    <div className='flex items-end col-span-2'>
                        <h1 className='text-[24px] lg:text-6xl font-semibold mb-[-20px]'>My Category</h1>
                    
                    </div>
                </div>
            </div>

            <div>
                <p className='md:text-right text-justify text-[15px] my-12 '>Discover The World Through Original Paintings For Sale.</p>
            </div>
        </div>

        <div className='bg-gray-200 py-24 pb-36  md:p-56'>
            <div className='px-[2rem] md:container grid md:grid-cols-2 lg:grid-cols-2  md:gap-x-24 gap-y-32'>
            
            {cateData.map((i) => {
                const {id, url, info} = i;
                return <div key={id} >
                    <img className='w-full h-full object-cover gap-y-12' src={url} />
                    <h5 className='font-bold text-4xl text-center mt-8'>{info}</h5>
                </div>
            })}
            
            </div>
        </div>
    </section>
  )
}

export default Category


// function CategoryItems({url,info}) {
//   return (
//     <div>
//         <img className='w-full h-full object-cover' src={url} />
//         <h5 className='font-bold text-4xl text-center mt-8'>{info}</h5>
//     </div>
//   )
// }

