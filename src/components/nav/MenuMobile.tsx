import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { pages } from "../routes/Rutas"
export const MenuMobile = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger><Menu className="text-white" /></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            Menú de navegación
                        </SheetTitle>
                        <SheetDescription></SheetDescription>
                            <div className="flex flex-col w-full pt-10 gap-4">
                                {pages.map((page, index) => (

                                    <Link className="border rounded-2xl p-3" key={index} to={page.url}>
                                        {page.name}
                                    </Link>

                                ))}

                            </div>
                        
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}
