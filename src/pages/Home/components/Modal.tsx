
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React from "react"


interface ModalSuscripcion {
    elementTrigger: React.ReactNode,
    children: React.ReactNode,
    titleModal: string

}

export const Modal = ({elementTrigger, children, titleModal}: ModalSuscripcion) => {
    return (

        <AlertDialog>
            <AlertDialogTrigger asChild>
                {elementTrigger}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{titleModal}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {children}

                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )

}
