import React from 'react'

const data = ["/assests/images/work1-min.png","/assests/images/work2-min.png","/assests/images/work3-min.png"];
const Work = () => {
  return (
    <section className='mx-[2rem] md:container mt-[80px] md:mt-[150px]'>
        <div>
            <div className='grid md:grid-cols-2 work-head items-end absolute mt-[-50px]'>
              <h1 className='text-[24px] lg:text-6xl font-semibold mb-[-40px]'>Featured Works</h1>
              
            </div>
            <p className='text-[14px] my-12 leading-relaxed'>Technology and art combine to deliver a very contemporary visual story telling<br/> approach in the world of art.</p>
        </div>
        <div className='grid md:grid-cols-3  gap-x-12 gap-y-12'>
          

          {data.map(e=><WorkItem url={e}/>)}
            
            
            
        </div>                                                  
    </section>
  )
}

export default Work


function WorkItem({url}) {
  return (
    <div className='img-work w-full '>
    <img className='w-full h-full object-cover absolute-v' src={url} alt="" />
  </div>
  )
}
