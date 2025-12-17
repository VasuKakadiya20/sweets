import React from 'react'
import useScrollAnimation from '../useScrollAnimation'

function Contectusbox() {
    useScrollAnimation()
    return (
        <>
            <section className="py-12 px-6 slideU">
                <div className="max-w-5xl mx-auto text-center shadow-2xl p-8 rounded-2xl ">
                    <p className="inline-block text-sm font-semibold tracking-widest text-[#c19b5a] mb-6 border-l-4 border-[#c19b5a] pl-3">
                        OUR CONTACTS
                    </p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="border border-gray-700 text-gray-700 rounded-full px-4 py-3  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border border-gray-700 rounded-full px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="md:col-span-2 border border-gray-700 rounded-2xl px-4 py-3  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c19b5a]"
                        ></textarea>
                        <button
                            type="submit"
                            className="md:col-span-2 mx-auto border-1 border-[#c19b5a] text-[#c19b5a] rounded-full px-8 py-3 hover:bg-[#c19b5a] hover:text-white transition "
                        >
                            SUBMIT
                        </button>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Contectusbox
