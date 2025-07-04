"use client";
import MyButton from '../ui/MyButton';
import { useRouter } from "next/navigation";

export default function RattingSection() {
    const router = useRouter();
    
    return (
        <section className="px-8 py-14 my-5 bg-mygray-150 w-[95%] max-w-[1500px] max-md:px-4 max-md:pt-8 max-md:pb-10">
            <div className="flex gap-8 justify-center items-center max-md:flex-col">
                {/* Left: Text Content */}
                <div className="w-[50%] max-w-[500px] max-md:w-full">
                    <h2 className="text-myneutral-900 text-3xl md:text-5xl font-bold mb-6">
                        Can your rate ever be too low?
                    </h2>
                    <ul className="list-disc pl-5 text-myneutral-900 text-base font-semibold md:text-lg mb-8 space-y-2">
                        <li>
                            Our platform delivers exclusive rates and terms to fit your needs.
                        </li>
                        <li>
                            With rates starting at 5.99%, how much could you save?
                        </li>
                    </ul>
                    <MyButton 
                    className='z-10 w-60'
                    onClick={() => router.push("/user-form")}
                    >
                        Visit our offers
                    </MyButton>
                </div>
                {/* Right: Image/Media Placeholder */}
                <div className="w-[50%] flex justify-center items-center max-md:w-full max-md:mt-8">
                    <div className="bg-myneutral-300 h-[270px] md:h-[450px] w-full max-w-[500px] rounded-md" />
                </div>
            </div>
        </section>
    );
}