export default function MobileMockup({ image, label }) {
  return <div className="w-20 shrink-0 rounded-[1.1rem] border-4 border-primary bg-white p-1 shadow-2xl sm:w-36 sm:rounded-[1.35rem] sm:border-[5px]"><div className="overflow-hidden rounded-[.75rem] bg-gradient-to-br from-primary via-[#60A5FA] to-accent sm:rounded-[.95rem]"><img className="aspect-[9/16] w-full object-cover" src={image} alt={label} loading="lazy" decoding="async" sizes="(min-width: 640px) 144px, 80px" /></div></div>
}


