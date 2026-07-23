import portrait from "@/assets/sonakshi-portrait.jpeg.asset.json";

export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-sm bg-paper ${className}`}>
      <img
        src={portrait.url}
        alt="Sonakshi Miyanbazaz"
        className="aspect-[4/5] w-full object-cover"
        loading="eager"
      />
    </div>
  );
}
