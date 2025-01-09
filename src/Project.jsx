import img1 from './assets/CashFlow.png';
import img2 from './assets/Portfolio.png';
import img3 from './assets/Blog.png';
import img4 from './assets/CRUD.png';
import img5 from './assets/Dictionary.png';
import img6 from './assets/Cart.png';
import dash from './assets/Dashboard.JPG';



function Project() {

    return (
        <>
            <section id="projects"
                className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
                <h2 className="text-5xl text-sky-950 font-bold text-center">
                    My Projects
                </h2>


                <div className="p-10 bg-neutral-800 text-white flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                    <div className="w-80 rounded">
                        <a href=
                            "https://cashflowzen.netlify.app/"
                            className="w-full h-full" target="_blank">
                            <img src=
                                {dash}
                                alt="Project 1"
                                className="w-full h-full 
                                        bg-cover rounded"/>
                        </a>
                    </div>
                    <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:text-blue-300"
                                href=
                                "https://cashflowzen.netlify.app/" >
                                Cash Flow - Personal Finance Manager
                            </a>
                            <p className="font-bold text-xl">Capstone Project</p>
                        </h2>
                        <p>
                            <span className='font-bold text-xm text-teal-600'>Tech Stack Front End :</span> <span className="text-amber-200">(React js, Tailwind, Axios, React redux, React Router dom)</span>
                        </p>
                        <p>
                            <span className='font-bold text-xs text-teal-600'> Additional packages :</span> <span className="text-amber-200">(Chart.js, react2csv , react icons, hero icons )</span>
                        </p>
                        <p>
                            <span className='font-bold text-xm text-teal-600'>Tech Stack Back End :</span> <span className="text-amber-200">(Node js, Express, Mongo DB, Mongoose )</span>
                        </p>
                        <p>
                            <span className='font-bold text-xs text-teal-600'>Additional packages :</span> <span className="text-amber-200">(JWT, bcrypt, Cookie-parser, dotenv, cors )</span>
                        </p>

                        <p>
                            Cash flow is a personal finance tracker application which lets user to keep track of income/expense and set budget, goal, investment and recurring expenses.

                            Helps in managing the pesonal finance of a user effectively and provide detailed info about various factors.

                            User can export the transactions and user will be able to check notification and reminders and view charts .

                            User can edit their profile and select currency based on their region.
                        </p>

                        <p className='text-indigo-400'>
                            <span className='font-bold text-xs '>   GitHub Front-End :</span>  https://github.com/VinodhGangadharan/CashFlow-FrontEnd
                        </p>
                        <p className='text-indigo-400'>
                            <span className='font-bold text-xs'>  GitHub Back-End :</span> https://github.com/VinodhGangadharan/CashFlow-BackEnd
                        </p>
                    </div>
                </div>



                <div className="p-10 bg-neutral-800 text-white flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                    <div className="w-80 rounded">
                        <a href=
                            "https://zenportfoliopage.netlify.app/"
                            className="w-full h-full" target="_blank">
                            <img src=
                                {img2}
                                alt="Project 1"
                                className="w-full h-full 
                                        bg-cover rounded"/>
                        </a>
                    </div>
                    <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:text-blue-300"
                                href=
                                "https://zenportfoliopage.netlify.app/">
                                Portfolio - Layout Page
                            </a>
                        </h2>
                        <p className="">
                            A portfolio page with grids and layout and tables using Html, css & Bootstrap.
                        </p>
                        <p className="align-center justify-center ">
                            <span className='font-bold text-teal-400'>Tech Stack:</span>  <span className='text-amber-200'>(HTML,CSS,Bootstrap)</span>
                        </p>
                        <p className='text-indigo-400'>
                            <span className='font-bold text-xs'>   GitHub :</span>  https://github.com/VinodhGangadharan/ZEN-TASK-Bootstrap-Page1
                        </p>
                    </div>
                </div>



                <div className="p-10 bg-neutral-800 text-white flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                    <div className="w-80 rounded">
                        <a href=
                            "https://reactrouterzen.netlify.app/"
                            className="w-full h-full" target="_blank">
                            <img src=
                                {img3}
                                alt="Project 1"
                                className="w-full h-full 
                                        bg-cover rounded"/>
                        </a>
                    </div>
                    <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:text-blue-300"
                                href=
                                "https://reactrouterzen.netlify.app/">
                                Blog - React Router DOM
                            </a>
                        </h2>
                        <p>
                            Created web pages with routes using the react-router-dom concept.
                        </p>
                        <p className="align-center justify-center ">
                            <span className='font-bold text-teal-400'>Tech Stack:</span>  <span className='text-amber-200'>(React, React-Router)</span>
                        </p>
                        <p className='text-indigo-400'>
                            <span className='font-bold text-xs'>   GitHub:</span>  https://github.com/VinodhGangadharan/ZEN-REACT-ROUTER-TASK
                        </p>
                    </div>
                </div>



                <div className="p-10 bg-neutral-800 text-white flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                    <div className="w-80 rounded">
                        <a href=
                            "https://axioscrudzen.netlify.app/"
                            className="w-full h-full" target="_blank">
                            <img src=
                                {img4}
                                alt="Project 1"
                                className="w-full h-full 
                                        bg-cover rounded"/>
                        </a>
                    </div>
                    <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:text-blue-300"
                                href=
                                "https://axioscrudzen.netlify.app/">
                                CRUD - Axios
                            </a>
                        </h2>
                        <p>
                            CRUD operations with user data using React and Axios fetch to interact with a mock API.
                        </p>
                        <p className="align-center justify-center ">
                            <span className='font-bold text-teal-400'>Tech Stack:</span>  <span className='text-amber-200'>(React, Axios)</span>
                        </p>
                        <p className='text-indigo-400'>
                            <span className='font-bold text-xs'>   GitHub:</span>  https://github.com/VinodhGangadharan/ZEN-REACT-AXIOS-CRUD
                        </p>
                    </div>
                </div>


                <div className="p-10 bg-neutral-800 text-white flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                    <div className="w-80 rounded">
                        <a href=
                            "https://dictionaryzen.netlify.app/"
                            className="w-full h-full" target="_blank">
                            <img src=
                                {img5}
                                alt="Project 1"
                                className="w-full h-full 
                                        bg-cover rounded"/>
                        </a>
                    </div>
                    <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:text-blue-300"
                                href=
                                "https://dictionaryzen.netlify.app/">
                                Dictionary - Async Programming
                            </a>
                        </h2>
                        <p>
                            Dictionary built using promise concept and public API.
                        </p>
                        <p className="align-center justify-center ">
                            <span className='font-bold text-teal-400'>Tech Stack:</span>  <span className='text-amber-200'>(HTML,CSS,Bootstrap,Javascript)</span>
                        </p>
                        <p className='text-indigo-400'>
                            <span className='font-bold text-xs'>   GitHub:</span>  https://github.com/VinodhGangadharan/ZEN-API2-Dictionary
                        </p>
                    </div>
                </div>






                <div className="p-10 bg-neutral-800 text-white flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                    <div className="w-80 rounded">
                        <a href=
                            "https://zencontext.netlify.app/"
                            className="w-full h-full" target="_blank">
                            <img src=
                                {img6}
                                alt="Project 1"
                                className="w-full h-full 
                                        bg-cover rounded"/>
                        </a>
                    </div>
                    <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:text-blue-300"
                                href=
                                "https://zencontext.netlify.app/">
                                Shopping Cart - Context API
                            </a>
                        </h2>
                        <p>
                            Shopping cart page which updates cart details automatically using context API.
                        </p >
                        <p className="align-center justify-center ">
                            <span className='font-bold text-teal-400'>Tech Stack:</span>  <span className='text-amber-200'>(React, Context API)</span>
                        </p>
                        <p className='text-indigo-400'>
                            <span className='font-bold text-xs'>   GitHub:</span>  https://github.com/VinodhGangadharan/react-zen-context
                        </p>
                    </div>
                </div>



            </section>
        </>
    )
}

export default Project