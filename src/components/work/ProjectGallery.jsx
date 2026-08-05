import MobileMockup from './MobileMockup'
export default function ProjectGallery({ images, brand }) { return <div className="flex items-center justify-center gap-2 sm:gap-4">{images.map((image, i) => <MobileMockup key={image} image={image} label={`${brand} social creative ${i + 1}`} />)}</div> }

