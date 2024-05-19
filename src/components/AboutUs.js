import React from 'react';
import AboutUsImage from '../image/UBSOverviewImage.jpeg';

const AboutUs = () => {
  return (
    <div className="flex w-full h-full items-center">  {/* Ensures vertical centering */}
      <div className="flex-1 flex justify-center items-center p-20">
        <img src={AboutUsImage} alt="About Us" className="max-w-full h-auto" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-10 pr-20">
        <h1 className="text-3xl font-bold mb-3 text-left">ABOUT US</h1>
        <p className="text-base mb-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed mauris commodo erat rutrum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio sed vehicula. Integer in imperdiet ante.</p>
        <a 
          href="https://www.ubs.com/hk/en/wealth-management.html?gclid=CjwKCAjwo6GyBhBwEiwAzQTmc09CnmlGvjqcACGZqwvnYPkqjekk_w498aBRaT9GkKGXoPly3dG9LRoCl5oQAvD_BwE&campID=SEM-UBSADVICE-HK-ENG-Google-UBSAdvice_Lead_Gen_SEM_HK_ENG_%20Core%20Brand_Exact-Brand_Key%20Converting_Exact-ubs%20hk-Exact-c&ef_id=CjwKCAjwo6GyBhBwEiwAzQTmc09CnmlGvjqcACGZqwvnYPkqjekk_w498aBRaT9GkKGXoPly3dG9LRoCl5oQAvD_BwE:G:s&s_kwcid=AL!410!3!585191079350!e!!g!!ubs%20hk!16437535579!134847896638&gad_source=1" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white py-2 px-4 font-bold rounded hover:bg-red-700 transition-colors text-center"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutUs;