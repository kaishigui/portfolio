import React from 'react'

function Contact() {
  return (
    <div className='block p-6 rounded-lg shadow-lg bg-purpler max-w-md mb-10'>

      <div className='my-7 text-center text-2xl'>
        <h2>Drop some feedback below</h2>
      </div>
    <form>
      <div className="form-group mb-6">
        <input type="text" className="form-control block w-full  px-3  py-1.5  
        text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300   rounded transition  ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" id="exampleInput7"
          placeholder="Name"/>
      </div>
      <div className="form-group mb-6">
        <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal
        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
          transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600
          -600 focus:outline-none" id="exampleInput8" 
          placeholder="Email address"/>
      </div>
      <div class="form-group mb-6">
        <textarea
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
        "
        id="exampleFormControlTextarea13"
        rows="3"
        placeholder="Message"
      ></textarea>
      </div>
      <button type="submit" className=" w-full px-6 py-2.5 bg-purple-500 text-white font-medium text-xs leading-tight
        uppercase rounded shadow-md hover:bg-purple-500  hover:shadow-lg focus:bg-purple-500 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
    </form>
  </div>
  )
}

export default Contact