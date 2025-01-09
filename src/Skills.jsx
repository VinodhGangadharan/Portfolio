function Skills() {

    const skills = ["React JS", "Node JS", "Express JS", "Mongo DB", "Javascript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"
        , "Web API", "SQL", "C#", "ASP.NET"
    ];

    return (
        <>

            <section id="skills"
                className="px-10  pb-12 py-16 w-full my-40 max-w-5xl mx-auto">
                <h2 className="text-5xl  mb-15 text-sky-950 font-bold text-center">
                    Skills
                </h2>



                <div className=" pt-16 flex gap-4 justify-center 
                            flex-wrap mx-auto max-w-xl  ">
                    {skills.map((skill, index) => {
                        return (
                            <div key={index}
                                className="cursor-pointer px-8 py-6 ring-2 ring-amber-100
                                        rounded bg-neutral-800 text-md text-slate-300
                                        flex items-center justify-center 
                                        font-bold hover:shadow-2xl">
                                {skill}
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Skills