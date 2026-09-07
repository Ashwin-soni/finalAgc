import React from 'react'
import Navbar from "../../components/Navbar"
import RequestCallback from "../../components/RequestCallback"
import Footer from "../../components/Footer"
import Image from 'next/image'

const page = () => {
    return (
        <main>
            <Navbar />


            {/* Vertical gallery: preserve original size and display images stacked */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h3 className="text-center text-2xl font-bold mb-6">Result Highlights</h3>

                    <div className="flex flex-col gap-8">
                        <div className="flex justify-center">
                            <img src="/1.png" alt="Result 1" className="max-w-full h-auto rounded-lg shadow-md" />
                        </div>

                        <div className="flex justify-center">
                            <img src="/2.png" alt="Result 2" className="max-w-full h-auto rounded-lg shadow-md" />
                        </div>

                        <div className="flex justify-center">
                            <img src="/3.png" alt="Result 3" className="max-w-full h-auto rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center py-12 bg-white">
                <div className="max-w-3xl w-full px-4">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={'/resultimg.jpg'}
                            alt="Exam Results"
                            width={1200}
                            height={700}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>

                    <p className="mt-4 text-center text-lg font-medium text-gray-700">
                        Celebrating our top achievers — congratulations to all students!
                    </p>
                </div>
            </section>
            <RequestCallback />
            <Footer />
        </main>
    )
}

export default page
