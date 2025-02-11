"use client"
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "react-hot-toast";

const BookService = () => {
    return (
        <div>
            <Toaster />
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" className="border-none bg-blue-500 text-white hover:bg-black hover:text-white hover:shadow-md hover:shadow-blue-600 transition">
                        Book Now
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Book This Service</AlertDialogTitle>
                        <AlertDialogDescription>
                            <form className="space-y-3">
                                <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border rounded-lg" required />
                                <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border rounded-lg" required />
                                <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded-lg" required />
                                <textarea name="message" placeholder="Your Message (Optional)" className="w-full p-2 border rounded-lg"></textarea>
                            </form>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => toast.success("Successfully toasted!")}
                            className="border-none bg-blue-500 text-white hover:bg-black hover:text-white hover:shadow-md hover:shadow-blue-600 transition"
                        >
                            Submit
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default BookService;
