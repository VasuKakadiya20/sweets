import React from 'react'
import useScrollAnimation from '../useScrollAnimation'

function Contectusbox() {
    useScrollAnimation()
    return (
        <>
            <section className="py-12 px-6 slideU">
                <div className="max-w-5xl mx-auto text-center shadow-2xl p-8 rounded-2xl ">
                    <p className="inline-block text-sm font-semibold tracking-widest text-[#E09F40] mb-6 border-l-4 border-[#E09F40] pl-3">
                        OUR CONTACTS
                    </p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="border border-gray-700 text-gray-700 rounded-full px-4 py-3  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border border-gray-700 rounded-full px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="md:col-span-2 border border-gray-700 rounded-2xl px-4 py-3  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
                        ></textarea>
                        <button
                            type="submit"
                            className="md:col-span-2 mx-auto border-1 border-[#E09F40] text-[#E09F40] rounded-full px-8 py-3  transition "
                        >
                            SUBMIT{/*hover:bg-[#f5c37a] hover:text-white */}
                        </button>
                    </form>
                    
                </div>
            </section>
        </>
    )
}

export default Contectusbox
