

export const MisionVision = () => {
    return (
        <>

            <section className="w-full  flex flex-col h-50 py-2 ">
                <div className="grid grid-cols-9 gap-3 h-full ml-6 mr-6">
                    <div className="bg-blue-100 col-span-1 flex flex-col">

                        <div className="flex -space-x-4 rtl:space-x-reverse">
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="" />
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="" />
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-4.jpg" alt="" />

                        </div>

                    </div>
                    <div className="bg-blue-100 col-span-4"></div>
                    <div className="bg-blue-100 col-span-4"></div>
                </div>
            </section>

        </>
    )
}
