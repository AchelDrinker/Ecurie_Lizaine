'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/ice_urielle.jpg'
import FeaturesBg1 from '@/public/images/faro_galop.jpg'
import FeaturesBg2 from '@/public/images/cheval_saut.jpg'

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4"> À l'écoute des chevaux</h1>
            <p className="text-xl text-gray-600">En tant que passionnée d'équitation, j'ai souhaité construire une écurie active centrée sur leurs besoins.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Les atouts</h3>
                <p className="text-xl text-gray-600">Le mental joue un rôle essentiel dans les performances de vos équidés. Dans cet esprit, voici mes différences :</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Foin à volonté</div>
                    <div className="text-gray-600">Dans la nature, les chevaux se gérent seuls. Ici, ils ne seront plus dans l'attente du repas.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.407 490.407" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M288.336,97.59c-53.6-26.3-100.2,8.3-113.6,36.5l-171.8,326.1c-7.4,12.8,2.8,37.6,27.1,28.1l328.2-175 c40.6-20.8,56.3-70.8,36.5-111.5C371.736,157.99,335.236,122.59,288.336,97.59z M337.336,279.89l-268.8,141.7l141.7-267.8 c7.3-14.6,32.7-34.2,58.3-17.7c40.6,20.8,69.8,50,88.6,86.5C367.536,243.39,358.236,268.49,337.336,279.89z"></path> <path d="M325.936,116.49c13.5,4,24-4.2,26-12.5l29.2-77.1c3.1-10.4-2.1-21.9-12.5-26c-10.4-3.1-21.9,2.1-26,12.5l-29.2,77.1 C310.336,100.89,315.536,112.29,325.936,116.49z"></path> <path d="M348.836,140.29c12.1,11.4,25,4.2,29.2,1l53.1-54.1c8.3-8.3,8.3-20.8,0-29.2c-8.3-8.3-20.8-8.3-29.2,0l-53.1,53.1 C340.436,119.49,340.236,132.19,348.836,140.29z"></path> <path d="M488.436,119.29c-4.2-10.4-15.6-15.6-26-11.5l-77.1,29.2c-10.4,4.2-15.6,15.6-11.5,26c3.1,8.3,12.6,17.4,26,11.5 l77.1-29.2C487.336,141.19,492.536,129.69,488.436,119.29z"></path> </g> </g> </g> </g></svg>  
                  </div>
                </div>
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Ecurie active</div>
                    <div className="text-gray-600">Plus d'espace, plus de terrains différents, des ateliers, voilà ce qui attend vos chevaux à l'écurie.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path d="M379.987,204.198c-2.456-7.501-4.813-14.566-6.504-21.254c-1.703-6.702-2.74-12.982-2.734-19.03 c0.014-6.464,1.116-12.664,4.028-19.346c8.406-19.214,11.436-38.125,11.43-55.186c-0.007-21.895-4.92-40.806-9.799-54.335 c-4.893-13.528-9.785-21.703-10.05-22.146L358.588,0l-63.354,80.633h-78.25L153.637,0.007l-7.771,12.889 c-0.264,0.449-5.157,8.624-10.049,22.152c-4.886,13.529-9.792,32.426-9.799,54.335c-0.006,17.061,3.024,35.972,11.43,55.179 c2.806,6.438,3.928,12.816,3.935,19.604c0.052,12.863-4.371,27.25-9.323,42.582c-4.873,15.352-10.268,31.647-10.314,49.23 c0,4.483,0.37,9.052,1.222,13.641c2.311,12.433,6.96,27.554,12.631,43.77c8.504,24.285,19.34,50.881,28.029,72.34 c4.338,10.717,8.148,20.152,10.809,27.25c1.327,3.533,2.37,6.491,3.018,8.59c0.323,1.043,0.554,1.876,0.66,2.351l0.026,0.132 c-0.013,0.694-0.079,1.81-0.211,3.275c-0.436,5.183-1.433,13.523-1.44,22.72c0.013,7.171,0.588,14.936,2.753,22.602 c2.153,7.62,6.055,15.358,12.935,21.254c5.956,5.084,12.908,8.432,19.907,10.928c10.518,3.698,21.327,5.401,29.646,6.286 c8.313,0.872,14.117,0.884,14.381,0.884c0.357-0.013,10.538,0,23.427-2.08c6.444-1.056,13.576-2.622,20.594-5.091 c7.005-2.496,13.952-5.844,19.914-10.928c6.874-5.896,10.776-13.634,12.935-21.254c2.166-7.666,2.74-15.438,2.746-22.608 c0-6.141-0.449-11.859-0.872-16.56c-0.211-2.35-0.422-4.444-0.561-6.154c-0.132-1.453-0.198-2.549-0.211-3.249 c0.086-0.382,0.27-1.129,0.561-2.06c0.759-2.522,2.159-6.47,3.981-11.271c6.398-16.89,17.98-44.575,28.458-71.646 c5.242-13.543,10.215-26.966,14.169-38.97c3.956-12.044,6.907-22.502,8.082-31.006c0.634-4.676,0.918-9.238,0.918-13.675 C390.241,236.03,384.866,219.186,379.987,204.198z M213.636,101.426h85.618c0.31,0.515,0.614,1.057,0.918,1.664 c2.12,4.278,3.711,10.591,4.609,17.378c0.924,6.788,1.228,14.05,1.228,20.482c0,4.186-0.125,8.009-0.284,11.146l-18.21-3.038 l-20,43.314c-14.864-7.844-23.83-18.521-29.343-27.791c-3.136-5.289-5.098-10.102-6.253-13.523 c-0.574-1.703-0.951-3.063-1.182-3.954l-0.224-0.978l-0.039-0.198l-1.757-9.613l-25.711,11.02 c-0.819-3.117-1.539-7.138-1.532-11.898C201.52,126.305,203.944,114.638,213.636,101.426z M368.736,266.337 c-0.495,3.704-1.704,9.006-3.48,15.186c-6.193,21.763-19.036,54.255-30.287,82.185c-5.632,13.991-10.875,26.88-14.757,36.982 c-1.941,5.052-3.546,9.396-4.721,12.955c-0.588,1.796-1.076,3.381-1.459,4.886c-0.185,0.766-0.357,1.492-0.489,2.284 c-0.132,0.805-0.258,1.638-0.264,2.832c0.007,1.776,0.133,3.513,0.298,5.448c0.495,5.725,1.366,13.232,1.366,20.944 c0.007,5.982-0.548,11.99-1.961,16.929c-1.42,4.978-3.546,8.65-6.471,11.159c-3.129,2.707-7.877,5.203-13.297,7.091 c-8.122,2.885-17.597,4.47-24.9,5.229c-3.651,0.384-6.774,0.575-8.94,0.674c-1.083,0.04-1.935,0.066-2.496,0.08l-0.621,0.013 h-0.145h-0.046c-0.792,0-10.195-0.125-21.103-1.994c-5.447-0.924-11.257-2.298-16.461-4.173c-5.21-1.875-9.752-4.298-12.796-6.926 c-2.919-2.502-5.045-6.174-6.471-11.152c-1.406-4.932-1.968-10.948-1.954-16.923c0-5.13,0.383-10.214,0.786-14.691 c0.205-2.245,0.416-4.338,0.574-6.26c0.166-1.934,0.298-3.658,0.304-5.448c-0.014-1.287-0.152-2.192-0.304-3.076 c-0.304-1.664-0.733-3.216-1.28-4.998c-2.034-6.55-5.85-16.269-10.703-28.346c-7.257-18.045-16.738-41.01-25.091-63.248 c-8.345-22.185-15.542-43.842-18.157-58.13c-0.601-3.242-0.872-6.524-0.872-9.871c-0.053-13.093,4.371-27.566,9.323-42.886 c4.86-15.338,10.261-31.522,10.314-48.926c0.007-9.138-1.604-18.626-5.685-27.929c-7.124-16.296-9.68-32.209-9.686-46.854 c-0.006-18.758,4.265-35.405,8.564-47.269c0.535-1.486,1.07-2.899,1.598-4.226l43.407,55.252 c-11.066,15.484-14.533,30.478-14.487,42.298c0.026,15.418,5.454,25.341,5.844,26.074l3.42,6.154l22.687-9.719 c1.473,4.04,3.645,9.046,6.92,14.579c7.547,12.796,20.99,28.062,43.552,37.438l6.932,2.892l21.44-46.457l23.097,3.843l0.865-8.241 c0.012-0.172,0.957-9.178,0.957-21.05c-0.007-9.231-0.548-20.152-2.688-30.293c-1.082-5.071-2.562-9.964-4.747-14.434 c-0.594-1.202-1.255-2.384-1.968-3.526l43.05-54.79c4.734,11.945,10.221,30.36,10.168,51.476c0,14.638-2.556,30.544-9.687,46.854 c-4.113,9.362-5.783,18.732-5.764,27.678c0,8.399,1.406,16.408,3.361,24.133c2.951,11.595,7.124,22.615,10.406,33.688 c3.302,11.073,5.738,22.092,5.738,33.714C369.469,258.994,369.244,262.613,368.736,266.337z"></path> <path d="M228.176,441.839c-4.305,0-7.798,6.398-7.798,14.288c0,7.896,3.493,14.295,7.798,14.295 c4.305,0,7.798-6.398,7.798-14.295C235.974,448.237,232.481,441.839,228.176,441.839z"></path> <path d="M284.049,441.839c-4.305,0-7.798,6.398-7.798,14.288c0,7.896,3.493,14.295,7.798,14.295 c4.305,0,7.791-6.398,7.791-14.295C291.84,448.237,288.354,441.839,284.049,441.839z"></path> <path d="M180.781,242.726c-8.075,0-14.618,6.537-14.618,14.612c0,8.082,6.543,14.619,14.618,14.619 c8.076,0,14.612-6.537,14.612-14.619C195.393,249.262,188.856,242.726,180.781,242.726z"></path> <path d="M331.443,242.726c-8.075,0-14.612,6.537-14.612,14.612c0,8.082,6.537,14.619,14.612,14.619 c8.076,0,14.619-6.537,14.619-14.619C346.062,249.262,339.519,242.726,331.443,242.726z"></path> </g> </g></svg>
                  </div>
                </div>
                <div
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">À l'écoute de vos projets</div>
                    <div className="text-gray-600">Monitrice indépendante diplômée depuis 2017, je saurais tirer le meilleur potentiel de vos chevaux.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.3931 9.85868C8.38638 10.2728 8.71667 10.614 9.13083 10.6208C9.54499 10.6275 9.88618 10.2972 9.8929 9.88303L8.3931 9.85868ZM12 7.10386L11.9882 7.85376C11.9961 7.85389 12.0039 7.85389 12.0118 7.85376L12 7.10386ZM14.857 9.87086L15.607 9.87398C15.607 9.86888 15.607 9.86378 15.6069 9.85868L14.857 9.87086ZM13.633 12.1419L14.043 12.7699L14.048 12.7666L13.633 12.1419ZM11.1306 14.0509C10.7297 14.1549 10.489 14.5643 10.593 14.9652C10.6971 15.3662 11.1064 15.6069 11.5074 15.5028L11.1306 14.0509ZM7 10.0039H7.75L7.75 10.0034L7 10.0039ZM10.9911 5.10335L11.1424 5.83793L10.9911 5.10335ZM16.5941 8.0272L15.905 8.32319V8.32319L16.5941 8.0272ZM14.857 14.1039L15.2755 14.7264L15.2856 14.7194L14.857 14.1039ZM10.808 18.8589L11.0019 19.5834L10.808 18.8589ZM7 16.6609H6.25C6.25 16.7169 6.25628 16.7728 6.26873 16.8274L7 16.6609ZM9.8929 9.88303C9.91139 8.74418 10.8493 7.8358 11.9882 7.85376L12.0118 6.35395C10.0449 6.32292 8.42502 7.89179 8.3931 9.85868L9.8929 9.88303ZM12.0118 7.85376C13.1507 7.8358 14.0886 8.74418 14.1071 9.88303L15.6069 9.85868C15.575 7.89179 13.9551 6.32292 11.9882 6.35395L12.0118 7.85376ZM14.107 9.86773C14.1042 10.5314 13.7708 11.1499 13.218 11.5171L14.048 12.7666C15.0174 12.1227 15.6021 11.0378 15.607 9.87398L14.107 9.86773ZM13.223 11.5139C12.1865 12.1906 11.7688 12.9152 11.4957 13.4681C11.1952 14.0765 11.2 14.0329 11.1306 14.0509L11.5074 15.5028C12.386 15.2748 12.6633 14.4913 12.8406 14.1324C13.0452 13.718 13.3105 13.2481 14.043 12.7699L13.223 11.5139ZM7.75 10.0034C7.74865 7.98563 9.16618 6.24508 11.1424 5.83793L10.8397 4.36878C8.16601 4.91964 6.24817 7.2745 6.25 10.0044L7.75 10.0034ZM11.1424 5.83793C13.1186 5.43077 15.1087 6.46926 15.905 8.32319L17.2833 7.7312C16.2059 5.22293 13.5134 3.81793 10.8397 4.36878L11.1424 5.83793ZM15.905 8.32319C16.7013 10.1771 16.0843 12.3354 14.4285 13.4884L15.2856 14.7194C17.5259 13.1595 18.3606 10.2395 17.2833 7.7312L15.905 8.32319ZM14.4386 13.4814C12.7369 14.6254 12.0653 15.8324 11.6155 16.7728C11.3827 17.2595 11.2593 17.5528 11.0926 17.7881C10.9604 17.9747 10.8318 18.0761 10.6141 18.1344L11.0019 19.5834C11.6137 19.4196 12.0184 19.0761 12.3166 18.6551C12.5803 18.2829 12.7841 17.8059 12.9687 17.4199C13.3537 16.6149 13.8771 15.6663 15.2754 14.7263L14.4386 13.4814ZM10.6141 18.1344C9.89164 18.3277 9.26349 18.3009 8.7965 18.0746C8.35861 17.8623 7.94128 17.4162 7.73127 16.4943L6.26873 16.8274C6.55872 18.1005 7.21589 18.9754 8.14225 19.4244C9.03951 19.8593 10.0654 19.834 11.0019 19.5834L10.6141 18.1344ZM7.75 16.6609V10.0039H6.25V16.6609H7.75Z" fill="#000000"></path> </g></svg>

                  </div>
                </div>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 ">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg1} width={500} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg2} width={500} height="462" alt="Features bg" />
                    </div> 
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}