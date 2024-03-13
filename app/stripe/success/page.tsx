import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="Section h-[calc(100vh-200px)]">
      <div className="flex flex-col items-center justify-center py-36">
      <BadgeCheck className="text-green-600 size-20 mx-auto my-10" />
        <div className="  text-center space-y-2">
          <h3 className="md:text-2xl text-base font-semibold text-center">
            Payment successful!
          </h3>
          <p className="md:text-sm text-base font-semibold text-center">
            Thank you for your order. We're excited to fulfill it and ensure you
            have a fantastic experience with our products/services
          </p>

          <p className="md:text-sm text-base font-semibold text-center">
            Hav a good Day !
          </p>
          <Button asChild>
            <Link href={"/"}>Go Back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
