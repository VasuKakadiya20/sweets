import React from 'react'
import isosvg from '../../assets/ISO.svg'
import FDAsvg from '../../assets/FDA.svg'
import FSSATSVG from '../../assets/FSSAT.svg'
import useScrollAnimation from '../useScrollAnimation'

function Certifications() {
    useScrollAnimation();
  return (
  <>
      <section className='w-full py-10 bg-white slideU'>
                <div className='max-w-6xl mx-auto text-center py-10 px-6'>
                    <p className="text-gray-900 md:text-base text-sm font-bold">Priority<br /></p>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 leading-snug mb-2">
                        Certifications
                    </h2>
                </div>
                
                <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between sm:ml-2">
                    <img
                        src={isosvg}
                        alt="ISO"
                    />
                    <img
                        src={FDAsvg}
                        alt="FDA"
                    />
                    <img
                        src={FSSATSVG}
                        alt="FSSAT"
                    />
                </div>
            </section>
  </>
  )
}

export default Certifications
