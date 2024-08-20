import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'
import Link from 'next/link'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Référence</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Laura Jardon, monitrice indépendante, a étudié au MFR des 4 vents (88) avant de valider son certificat de qualification professionnelle enseignant animateur d’équitation.
            Une expérience de 4 mois en Pologne en tant que cavalière maison et concours dans l’écurie internationale Centrum Hipiki (Antoni CHŁAPOWSKI) lui a permis de développer ses compétences sur le travail du jeune cheval et de faire des compétitions à l’étranger.</p>
            <br/>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">À son compte depuis 2017, elle a travaillé avec des écuries de propriétaires, des centres équestres, des associations, des élevages et des particuliers.</p>
            <br/>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">En 2023, elle se lance dans un nouveau qui lui ressemble, la création de sa propre structure.
            C’est ainsi que l’Ecurie de la Lizaine est née au cœur de Frahier-et-Chatebier (70).
            Cette écurie active, spécialement dédiée aux propriétaires de chevaux, s’inscrit dans une démarche axée sur le bien-être de l’animal. Des prés, des ateliers (brosses, etc) ou encore des boxs s’ouvrant sur de larges paddocks sont proposés.
            Sans oublier le travail du cheval, l’Ecurie de la Lizaine dispose d’un rond de longe et d’une grande carrière, un grand manège est disponible également sur demande.</p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Mes réseaux</h2>
            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-2 md:grid-cols-2">

              {/* Item */}
              <Link href="https://www.instagram.com/explore/locations/1144558235695752/ecurie-de-la-lizaine---laura-jardon/">
                <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                  <svg width="36px" height="36px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </div>
              </Link>

              {/* Item */}
              <Link href="https://www.facebook.com/p/Ecurie-de-la-Lizaine-Laura-Jardon-100063562120873/">
                <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                  <svg xmlns="http://www.w3.org/2000/svg"  width="36px"  height="36px"  viewBox="0 0 24 24"  fill="none"  stroke="#000000"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}