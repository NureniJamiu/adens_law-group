import React from "react";

const Accordion = () => {
  return (
    <div>
      <div className="w-full bg-black mt-8 space-y-2 md:hidden">
        <details className="pb-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-gray-400">
            Practice areas
          </summary>
          <div className="mt-3">
            <ul>
              <li className="list-none text-gray-600 pl-2 text-sm my-3">
                Media & entertainment
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm mb-3">
                Corporate commercial
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm mb-3">
                Real estate
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm mb-3">
                Commercial arbitration
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm mb-3">
                Regulatory & compliance
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm">
                Intellectual property law
              </li>
            </ul>
          </div>
        </details>
        <details className="py-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-gray-400">Company</summary>
          <ul>
            <li className="list-none text-gray-600 pl-2 text-sm my-3">
              About us
            </li>
            <li className="list-none text-gray-600 pl-2 text-sm mb-3">Terms</li>
            <li className="list-none text-gray-600 pl-2 text-sm">
              Privacy policy
            </li>
          </ul>
        </details>
        <details className="py-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-gray-400">Follow</summary>
          <div className="mt-3">
            <ul>
              <li className="list-none text-gray-600 pl-2 text-sm my-3">
                Twitter
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm mb-3">
                LinkedIn
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm mb-3">
                Instagram
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm">Youtube</li>
            </ul>
          </div>
        </details>
        <details className="py-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-gray-400">Contact</summary>
          <div className="mt-3">
            <ul>
              <li className="list-none text-gray-600 pl-2 text-sm my-3 cursor-context-menu">
                16, Ilori street, Ireakari, Isolo.
                <br />
                Lagos, Nigeria
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm mb-3 cursor-context-menu">
                nurenijamiu951@gmail.com
              </li>
              <li className="list-none text-gray-600 pl-2 text-sm cursor-context-menu">
                (+234) 916-025-8105
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Accordion;
