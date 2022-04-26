import React from 'react'

function Homepage() {
  return (
    <main className='flex flex-col items-center justify-center  
    bg-purpler h-full text-white text-lg '>
      <section className='flex flex-col h-full items-center text-center my-5 mt-10'>
        <div className=' flex flex-col justify-center h-60 mb-2'>
          <h2 className='text-4xl'>I'm
            <span className='text-purple-500'> Mykell Mcswain</span>
          </h2>
          <h4 className='mt-2 text-gray-400'>Front-End Developer</h4>
        </div>
        <div className='mx-10'>
          <img className="object-contain" src="/Images/Web_designer_10_generated.jpg" alt="Image" />
        </div>
        <div className='flex items-center my-2'>
          <button type="button" className='items-center p-2 border rounded-full mr-5
          hover:shadow-[0_0_5px_] hover:shadow-purple-500 hover:transition ease-in-out delay-120'>
            <svg 
              className='fill-current w-4 h-4'
              role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
          <button type="button" className='items-center p-2 border rounded-full mr-5
          hover:shadow-[0_0_5px_] hover:shadow-purple-500 hover:transition ease-in-out delay-120'>
          <svg 
            className='fill-current w-4 h-4'
            role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          </button>
          <button type="button" className='items-center p-2 border rounded-full
          hover:shadow-[0_0_5px_] hover:shadow-purple-500 hover:transition ease-in-out delay-120'>
          <svg 
            className='fill-current w-4 h-4'
            role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>GitBook</title>
            <path d="M10.802 17.77a.703.703 0 11-.002 1.406.703.703 0 01.002-1.406m11.024-4.347a.703.703 0 11.001-1.406.703.703 0 01-.001 1.406m0-2.876a2.176 2.176 0 00-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 00-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 002.15 1.862 2.177 2.177 0 002.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0024 12.72a2.176 2.176 0 00-2.174-2.174"/>
          </svg>
          </button>
        </div>
      </section>

      <hr className='color-white' />

      
      <section className='my-5 mx-10 '>
        <div className='mx-auto mb-10'>
         <h2 className='text-center text-2xl'>Tutorial Island</h2>
        </div>
        <article>
          <p> Welcome to the first level of my story. 
            I am a Front-End Developer growing my skills and knowledge to be a Full-Stack Engineer.
          </p>

          <br />
          <p>
            I am fluent in Python and JavaScript
          </p>
          <br />
          
          <p>
          Whenever possible, I apply my passion for developing products with Node.js, 
          Modern Javascript Libraries and Frameworks like React.js and Next.js.
          </p>
        </article>
      </section>

      <section className='flex flex-col items-center my-5 my-10'>
        <h2 className='text-2xl mb-1'>Interested? </h2>
        <h4>Check out my pages below</h4>
        <div className='my-6'>
          <button className='border rounded-md mr-5 py-1 px-2 text-purple-500 
            hover:shadow-[0_0_5px_] hover:shadow-purple-500 hover:transition ease-in-out delay-120'>
            Projects
          </button>
          <button className='border rounded-md mr-5 py-1 px-5 text-purple-500
          hover:shadow-[0_0_5px_] hover:shadow-purple-500 hover:transition ease-in-out delay-120'>
            Skills
          </button>
          <button className='border rounded-md py-1 px-3 text-purple-500
          hover:shadow-[0_0_5px_] hover:shadow-purple-500 hover:transition ease-in-out delay-120'>
            Resume
          </button>
        </div>
      </section>

    </main>
  )
}

export default Homepage