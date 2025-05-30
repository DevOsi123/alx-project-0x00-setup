// import Button from "@/components/Button";

// const Landing = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-10">
//       <h1 className="text-3xl font-bold mb-8">Button Component Variants</h1>

//       <div className="flex flex-col gap-6">

//         <div className="flex gap-4 items-center">
//           <Button title="Small Button" size="small" shape="rounded-sm" />
//           <Button title="Medium Button" size="medium" shape="rounded-md" />
//           <Button title="Large Button" size="large" shape="rounded-full"/>
//         </div>

//         <div className="flex gap-4 items-center">
//           <Button title="Custom Rounded" size="small" shape="rounded-md" />
//           <Button title="Circle Style" size="medium" shape="rounded-full" />
//           <Button title="Boxy" size="large" shape="rounded-sm" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Landing;



// app/landing/page.tsx or pages/landing.tsx (depending on routing setup)

import React from "react";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-3xl font-bold mb-6">Button Variants</h1>

      {/* Row 1 - Sizes */}
      <div className="flex gap-4">
        <Button title="Small" size="small" shape="rounded-sm" />
        <Button title="Medium" size="medium" shape="rounded-md" />
        <Button title="Large" size="large" shape="rounded-full" />
      </div>

      {/* Row 2 - Custom Styles */}
      <div className="flex gap-4">
        <Button title="Sm Pill" size="small" shape="rounded-full" styles="bg-green-500" />
        <Button title="Md Outline" size="medium" shape="rounded-md" styles="bg-white text-blue-600 border border-blue-600" />
        <Button title="Lg Shadow" size="large" shape="rounded-sm" styles="shadow-lg" />
      </div>
    </div>
  );
};

export default Landing;
