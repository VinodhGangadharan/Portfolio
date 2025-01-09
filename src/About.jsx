import img from './assets/Profile.png';


function About() {

    return (
        <>

            <section
                id="about"
                className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-neutral-800 max-w-5xl mx-auto text-white">
                <div className="flex-1 py-10">
                    <img src={img}
                        alt="About"
                        className="w-[14rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[18rem] md:-ml-4 lg:-ml-0" />
                </div>
                <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                    <div>
                    </div>
                    <p className="text-xl">
                        I am a <span className='text-amber-200'>Full Stack Software developer with 7+ years of Experience </span>in software development and maintenance with a background in Engineering.
                    </p>
                    <p className="text-xl">
                        Specialized in Software Development Life Cycle entails Requirement Analysis, Design, Development, Testing,
                        Troubleshooting & Implementation.

                    </p>
                    <p className="text-xl">
                        <span className="text-amber-200 font-bold ">Technologies: &nbsp;</span>
                        React JS, Node JS, Express JS, Mongo DB, Javascript, Web API, HTML, CSS, Bootstrap, C#, ASP.NET, SQL
                    </p>
                    <p className="text-xl">
                        <span className="text-amber-200 font-bold"> Tools: &nbsp;</span>
                        Visual Studio, Netlify, Git, Postman, SQL Server, MongoDB Compass TeamCity, Udeploy, Bitbucket
                    </p>

                    <ul class="list-disc text-xl">
                        <li>
                        <span className='text-amber-200'>GUVI/HCL</span> - MERN Fullstack course - Present
                        </li>
                        <li>
                        <span className='text-amber-200'>Virtusa</span> - Senior Consultant  (SEP 2020 - JAN 2022)
                        </li>
                        <li>
                        <span className='text-amber-200'>Cognizant</span> - Associate (MAY 2014 - AUG 2020)
                        </li>
                    </ul>

                </div>
            </section>
        </>
    )
}

export default About