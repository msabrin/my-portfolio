import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { hku, meta } from "../data";
import Google from "./image/google.esha.png";
import Meta from "./image/meta.png";
import hkut from "./image/hku.png";
import klanguage from "./image/klanguage.png";

export default function Testimonials() {
    return (
        <section id="testimonials">
          <div className="container px-5 py-10 mx-auto text-center">
            <UsersIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
              Crtfct
            </h1>
            <div className="inline-flex items-center">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <img alt="Google" src={Google}/>
                
              </div>
            </div>

            <div className="inline-flex items-center">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <img alt="mets" src={Meta}/>
                
              </div>
            </div>


            <div className="flex flex-wrap m-4">
              {meta.map((meta) => (
                <div className="p-4 md:w-1/3 w-full">
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
                    <div className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={meta.image}
                        className="flex-shrink-0 object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-white">
                          {meta.company}
                        </span>  
                     </span>
                      </div>
                   <p className="leading-relaxed mb-6">{meta.quote}</p>
                  </div>
                </div>
              ))}
            </div>

<div className="inline-flex items-center">
<div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
  <img alt="mets" src={hkut}/>
    
  </div>
</div>

<div className="flex flex-wrap m-4">
  {hku.map((hku) => (
    <div className="p-4 md:w-1/3 w-full">
      <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
        {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
        <div className="inline-flex items-center">
          <img
            alt="testimonial"
            src={hku.image}
            className="flex-shrink-0 object-cover object-center"
          />
        </div>
        <div>
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">
              {hku.company}
            </span>  
         </span>
          </div>
       <p className="leading-relaxed mb-6">{hku.quote}</p>
      </div>
    </div>
  ))}
</div>

<div className="inline-flex items-center">
<div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
  <a href="https://coursera.org/verify/specializat
ion/U76MJYCL5NTQ"><img alt="mets" src={klanguage}/></a>
    
  </div>
</div>

</div>
</section>
);
}