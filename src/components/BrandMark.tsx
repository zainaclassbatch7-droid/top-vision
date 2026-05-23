type BrandMarkProps = {
  logoClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
};

export default function BrandMark({
  logoClassName = 'h-12 sm:h-14',
  titleClassName = 'text-xl sm:text-2xl',
  subtitleClassName = 'text-[10px] sm:text-xs text-white/55 tracking-[0.18em]',
  className = 'gap-3',
}: BrandMarkProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo-new.png"
        alt="Top Vision Security"
        className={`${logoClassName} w-auto object-contain`}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      <div className="flex flex-col min-w-0">
        <span className={`${titleClassName} font-extrabold tracking-tight leading-none whitespace-nowrap`}>
          <span className="text-[#C8102E]">TOP</span>
          <span className="text-white">VISION</span>
        </span>
        <span className={`${subtitleClassName} uppercase leading-none mt-1 whitespace-nowrap`}>
          Security Company LLC
        </span>
      </div>
    </div>
  );
}
