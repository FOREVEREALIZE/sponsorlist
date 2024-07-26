import {Brand} from "@prisma/client";

export default function MainGridItem({data}: { data: Brand }) {
    // 0: None
    // 1-3: Red
    // 4-5: Orange
    // 6-7: Yellow
    // 8-10: Green
    const color = data.overallScore >= 8 ? "bg-green-600" : (
        data.overallScore >= 6 ? "bg-yellow-500" : (
            data.overallScore >= 4 ? "bg-orange-600" : "bg-red-600"
        )
    );

    return (
        <div className="border-2 border-white rounded-xl p-4 flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/logos/${data.id}.png`} className="w-1/6 aspect-square" alt=""/>
                <span className="font-kanit font-semibold text-xl">
                    {data.name}
                </span>
            </div>
            <div className="flex flex-col">
                <span className="font-kanit text-xs text-neutral-400">
                    Overall Score
                </span>

                <div className="flex flex-row gap-1">
                    <div className="bg-neutral-800 w-6 h-6 rounded-sm flex flex-row overflow-hidden">
                        {data.overallScore > 0 && <div className={`w-3 ${color}`}></div>}
                        {data.overallScore > 1 && <div className={`w-3 ${color}`}></div>}
                    </div>
                    <div className="bg-neutral-800 w-6 h-6 rounded-sm flex flex-row overflow-hidden">
                        {data.overallScore > 2 && <div className={`w-3 ${color}`}></div>}
                        {data.overallScore > 3 && <div className={`w-3 ${color}`}></div>}
                    </div>
                    <div className="bg-neutral-800 w-6 h-6 rounded-sm flex flex-row overflow-hidden">
                        {data.overallScore > 4 && <div className={`w-3 ${color}`}></div>}
                        {data.overallScore > 5 && <div className={`w-3 ${color}`}></div>}
                    </div>
                    <div className="bg-neutral-800 w-6 h-6 rounded-sm flex flex-row overflow-hidden">
                        {data.overallScore > 6 && <div className={`w-3 ${color}`}></div>}
                        {data.overallScore > 7 && <div className={`w-3 ${color}`}></div>}
                    </div>
                    <div className="bg-neutral-800 w-6 h-6 rounded-sm flex flex-row overflow-hidden">
                        {data.overallScore > 8 && <div className={`w-3 ${color}`}></div>}
                        {data.overallScore > 9 && <div className={`w-3 ${color}`}></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
