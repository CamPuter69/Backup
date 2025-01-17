import React from 'react'


const Search = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
            {/* This is saerch container section */}
            <div className="w-full bg-neutral-100 rounded-md darkbg-neutral-900/40 p-8">
                <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">
                    <div className="">
                        <label htmlFor="from" className="block mb-2 font-black text-neutral-800 ">
                            From
                        </label>
                        {/* <select className="w-full appearance-none text-neutral-100 bg-neutral-800 px-3 h-12 border border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-700 placeholder:text-neutral-500"> */}
                        <select name="from" id="from" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        {/* <select name="from" id="from" className="w-full appearance-none dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:bg-neutral-900/60 px-3 h-12 border dark:border-neutral-900 rounded-md focus:outline-none  dark:bg-neutral-900"> */}
                            <option value="">Select Location</option>
                            <option value="location1">Location 1</option>
                            <option value="location2">Location 2</option>
                            <option value="location3">Location 3</option>
                        </select>
                    </div>

                    <div className="">
                        <label htmlFor="to" className="block mb-2 font-black text-neutral-800 ">
                            To
                        </label>
                        {/* <select className="w-full appearance-none text-neutral-100 bg-neutral-800 px-3 h-12 border border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-700 placeholder:text-neutral-500"> */}
                        <select name="to" id="to" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                        {/* <select name="from" id="from" className="w-full appearance-none dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:bg-neutral-900/60 px-3 h-12 border dark:border-neutral-900 rounded-md focus:outline-none  dark:bg-neutral-900"> */}
                            <option value="">Select Location</option>
                            <option value="location4">Location 4</option>
                            <option value="location5">Location 5</option>
                            <option value="location6">Location 6</option>
                        </select>
                    </div>

                    <div className="">
                        <label htmlFor="date" className="block mb-2 font-black text-neutral-800 ">
                            Choose Date
                        </label>
                        <input type="date" id='date' name='date' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>

                    <div className="">
                        <label htmlFor="time" className="block mb-2 font-black text-neutral-800 ">
                            Choose Time
                        </label>
                        <input type="time" id='time' name='time' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>

                    <div className="">
                        <label htmlFor="seat" className="block mb-2 font-black text-neutral-800 ">
                            Choose Seat
                        </label>
                        <input type="number" id='seat' placeholder='Enter Seat' name='seat' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>

                    <div className="">
                        <button className="w-full px-4 h-12 bg-red-600 text-neutral-50 text-base font-normal rounded-md">
                            Check Availability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search