import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/Lock-PNG-Images.png" height={72} width={72} className="rounded-full" alt="" />
                        <span className='text-[#63e] text-3xl'>&lt;</span>
                        <span className="text-2xl text-white">PassManager</span>
                        <span className='text-[#63e] text-3xl'>/&gt;</span>
                    </a>
                    <a href="https://github.com/x-anish-y/PassManager-MongoDB.git">
                        <button className="inline-flex gap-3 items-center text-white transition-all bg-[#5b2ed6] border-0 py-1 px-3 focus:outline-none hover:bg-[#8267ff] rounded text-base mt-4 md:mt-0">Github
                            <img className='z-10 invert' style={{ width: "20px", height: "20", zIndex: "10" }} src="/github.svg" alt="" />
                        </button></a>
                </div>
            </header>
        </div>
    )
}

export default Navbar
