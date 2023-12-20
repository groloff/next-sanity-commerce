import { Button } from "@/components/ui/button";
import { ArrowLeft, XCircle } from "lucide-react";
import Link from "next/link";



const ErrorStripe = () => {
  return (
    <div className="h-screen">
        <div className="mt-32 md:max-w-[50vw] mx-auto flex flex-col content-center">
        <XCircle className="text-red-600 w-16 h-16 mx-auto my-6" />
            
            <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Something went wrong</h3>
                <p className="text-gray-600 my-2">
            We were unable to proccess your payment</p>
          <p className="font-medium mb-10">Please try again later</p>

          <Button asChild>
            <Link href="/" className="flex gap-2 items-center">
                <ArrowLeft />
            GO Back</Link>
          </Button>
            </div>
        </div>

    </div>
  )
}
export default ErrorStripe;