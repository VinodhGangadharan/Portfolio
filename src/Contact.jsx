function Contact() {

    return (
        <>

            <section id="contact"
                className="my-40 align-center max-w-5xl mx-auto p-3 ">
                <h2 className="text-5xl pt-40  pb-22 font-bold text-sky-950 text-center">
                    Contact
                </h2>
                <div className="flex gap-5 justify-center text-3xl 
                        my-10">
                    <a rel="noreferrer"
                        target="_blank"
                        className="text-center hover:text-blue-400 text-slate-100"
                        href=
                        "mailto:writetovino@live.com">
                        <i className="bi bi-envelope" style={{ color: "yellow", fontSize: 25 }}></i>
                        <span className="font-bold">
                            &nbsp; writetovino@live.com
                        </span>
                    </a>
                </div>


                <div className="flex gap-5 justify-center text-3xl 
                        my-10 text-slate-100  " >
                    <a rel="noreferrer"
                        target="_blank"
                        className="text-center hover:text-blue-400"
                        href=
                        "https://www.linkedin.com/in/vinodhgangadharan">
                        <i className="bi bi-linkedin" style={{ color: "yellow", fontSize: 25 }}></i>
                        <span className="font-bold">
                            &nbsp;  Vinodh G
                        </span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Contact