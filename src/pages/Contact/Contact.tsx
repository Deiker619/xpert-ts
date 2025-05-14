import { Header } from "@/components/Header/Header"

export const Contact = () => {
    return (
        <>
            <Header
                titleHeader="titulo"
                bgHeader=''
                descriptionHeader="descripcion"
                messageHeader="message"

            ></Header>

            <div className="h-110 w-full bg-amber-300 mt-20 mb-30 py-4">
                <div className="ml-6 mr-6 flex flex-col h-full border  relative">
                    <div className="grid grid-cols-6  h-full w-full">
                        <div className="col-span-3 bg-red-300 ">a</div>
                        <div className=" w-150 bg-blue-300 absolute -top-20 inset-y-0 right-0 h-140">a</div>
                    </div>

                </div>
            </div>
        </>
    )
}
