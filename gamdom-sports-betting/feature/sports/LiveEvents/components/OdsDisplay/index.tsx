type OdsDisplayProps = {
    title: '1' | 'X' | '2';
    odd: number;
    handleOddsClick: () => void;
}

export default function OdsDisplay({title, odd, handleOddsClick}: OdsDisplayProps) {
    return (
        <div
            className="duration-400 group flex w-1/3 cursor-pointer flex-col items-center rounded p-2 transition-colors hover:bg-emerald-400 hover:text-white"
            onClick={handleOddsClick}
        >
            <span className="mb-3 text-sm text-white hover:text-white">{title}</span>
            <span className="text-2xl font-bold text-emerald-400 group-hover:text-white">{odd}</span>
        </div>
    )
}