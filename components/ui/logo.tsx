import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '@/public/images/hero-image.png';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Ecurie_Lizaine">
      <Image className="md:max-w-none mx-auto rounded" src={HeroImage} width={50} height={50} alt="Logo" />
    </Link>
  );
}
