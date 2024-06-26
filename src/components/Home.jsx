import React from 'react'
import logo from '../images/crime.png'

const Home = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={logo} />
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Crime Detection System</h1>
                        <p class="mb-8 leading-relaxed">A.I. Model powered with machine learning algorithm to detect crime</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Log IN
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Customer Benefits</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Crime Prediction System can provide several benefits to
                            the people: </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                {/* <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2> */}
                                {/* <p className="leading-relaxed">Enhanced Safety</p> */}
                                <br />
                                <a href='/'>Enhanced Safety</a>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                {/* <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2> */}
                                <a className='adv'><p className="leading-relaxed">Crime Prevention</p></a>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                </svg>
                                {/* <h2 className="title-font font-medium text-3xl text-gray-900">74</h2> */}
                                <p className="leading-relaxed">Reduced Victimization</p>
                                
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                {/* <h2 className="title-font font-medium text-3xl text-gray-900">46</h2> */}
                                <p className="leading-relaxed">Business and Economic Development</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home