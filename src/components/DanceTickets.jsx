// "use client";

// import { Instagram, Youtube } from "lucide-react";
// import { useState } from "react";
// import { Button } from "./button";
// import { ClassSections } from "./class-sections";
// import Hero from "./Hero";
// import { MailingList } from "./mailing-list";
// import Modal from "./shared/dialog";

// export default function DanceTickets() {
//   return (
//     <div className="min-h-screen bg-[#1a1b2e]">

// <nav className="fixed top-0 w-full z-50 bg-[#1a1b2e]/80 backdrop-blur-sm">
//   <div className="container mx-auto px-4 py-4">
//     <div className="flex items-center justify-between flex-wrap">
//       {/* Title Section */}
//       <a href="/" className="text-white text-2xl font-serif font-bold sm:text-3xl md:text-4xl">
//         <div className="flex flex-col items-center">
//           <span>DANCE WITH</span>
//           <span>PRIYA JAYANTHI</span>
//         </div>
//       </a>
      
//       {/* Centered Navbar Icons/Buttons */}
//       <div className="flex justify-center items-center space-x-6">
//         <NavbarButtons />
//       </div>

//       <div className="w-full md:w-auto"></div> {/* Spacer for alignment */}
//     </div>
//   </div>
// </nav>


//       {/* Hero Section */}
//       <Hero />

//       {/* Class Sections */}
//       <ClassSections />

//       {/* Footer */}
//       <footer className="py-12 border-t border-white/10">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-white/60 mb-4 md:mb-0">
//               © 2024 Dance Studio. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a
//                 href="#"
//                 className="text-white/60 hover:text-pink-300 transition-colors"
//               >
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-white/60 hover:text-pink-300 transition-colors"
//               >
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-white/60 hover:text-pink-300 transition-colors"
//               >
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-white/60 hover:text-pink-300 transition-colors"
//               >
//                 <i className="fab fa-youtube"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// const NavbarButtons = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <div className="flex items-center gap-x-2">
//         <div className="flex items-center space-x-6">
//           <button
//             title="Youtube"
//             className="bg-pink-400/5 text-white px-6 py-2 rounded-full hover:bg-pink-500/10 transition-colors"
//           >
//             <Youtube className="text-red-500" />
//           </button>
//         </div>
//         <div className="flex items-center space-x-6">
//           <button
//             title="Instagram"
//             className="bg-pink-400/5 text-white px-6 py-2 rounded-full hover:bg-pink-500/10 transition-colors"
//           >
//             <Instagram className="text-[#e1306c]" />
//           </button>
//         </div>

//         <Button onClick={() => setIsOpen(true)}>Join the Mailing List</Button>
//         <a href="#class">
//           <Button variant="secondary">BUY TICKETS</Button>
//         </a>
//       </div>

//       {isOpen && (
//         <Modal open={isOpen} onClose={() => setIsOpen(false)}>
//           <MailingList dialogClose={() => setIsOpen(false)} />
//         </Modal>
//       )}
//     </>
//   );
// };


"use client";

import { Instagram, Youtube } from 'lucide-react';
import { useState } from "react";
import { Button } from "./button";
import { ClassSections } from "./class-sections";
import Hero from "./Hero";
import { MailingList } from "./mailing-list";
import Modal from "./shared/dialog";

export default function DanceTickets() {
  return (
    <div className="min-h-screen bg-[#0a192f]">
      <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap">
            {/* Title Section */}
            <a href="/" className="text-[#64ffda] text-2xl font-serif font-bold sm:text-3xl md:text-4xl">
              <div className="flex flex-col items-center">
                <span className="text-shadow-glow">DANCE WITH</span>
                <span className="text-shadow-glow">PRIYA JAYANTHI</span>
              </div>
            </a>
            
            {/* Centered Navbar Icons/Buttons */}
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6">
              <NavbarButtons />
            </div>
            <div className='w-full lg:w-auto mt-2 md:mt-0'>
              <EndButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Class Sections */}
      <ClassSections />

      {/* Footer */}
      <footer className="py-12 border-t border-[#64ffda]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#64ffda]/60 mb-4 md:mb-0">
              © 2024 Dance Studio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#64ffda]/60 hover:text-[#64ffda] transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-[#64ffda]/60 hover:text-[#64ffda] transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-[#64ffda]/60 hover:text-[#64ffda] transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-[#64ffda]/60 hover:text-[#64ffda] transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const NavbarButtons = () => {
  
  return (
    <>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <button
          title="Youtube"
          className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center "
        >
          <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          title="Instagram"
          className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center"
        >
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
      </div>

      
    </>
  );
};

const EndButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<div className='space-x-3  w-full lg:w-auto flex justify-center gap-x-3 pt-3'>
<Button 
          onClick={() => setIsOpen(true)}
          className="text-xs sm:text-sm md:text-base bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/80 h-[40px] md:h-[60px]"
        >
          Join the Mailing List
        </Button>
        <a href="#class">
          <Button 
            variant="secondary"
            className="text-xs sm:text-sm md:text-base bg-[#0a192f] text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda]/10 h-[40px] md:h-[60px]"
          >
            BUY TICKETS
          </Button>
        </a> {isOpen && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <MailingList dialogClose={() => setIsOpen(false)} />
        </Modal>
      )}</div>
  )
}

