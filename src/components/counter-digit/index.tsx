export default function CounterDigit({ digit }: { digit: number }) {
    return (
        <div className="digit flex-1 pt-4">
            <h1 className="text-[10rem] md:text-[15rem] font-normal text-[#b60708] italic translate-y-full opacity-0">
                {digit}
            </h1>
        </div>
    );
}
