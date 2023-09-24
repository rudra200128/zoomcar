// import React from 'react'

// const ZMS = () => {
//   return (
//     // <div>Work is going on...</div>
//     <div className='zms'>
//       <h1>How did Zoomcar Develop its Revolutionary Technology to Define the Future Mobility?</h1>
//       <p1>Established in 2013, Zoomcar holds the distinction of being India’s first personal mobility platform. It was founded by Greg Moran and David Back at a time when there was a serious dearth of personal mobility options in India and the concept of self-drive car rental was still relatively unknown in the country. Since its inception, Zoomcar has come a long way to become a market leader in the self-drive space with over 10,000 cars in its fleet. Under the visionary leadership of Mr. Greg Moran, CEO & co-founder of Zoomcar, we have always followed a technology-driven customer-first product approach to deliver a world-class user experience to our customers.

//         During all these years, we have been using the latest AI and ML technologies to develop top-of-the-line mobility solutions that have substantially enhanced our operational capabilities and maximized the revenue. Now, we have decided to share our story of innovation and growth with you. Hence, we’ll take you through our journey to help you understand how we used latest technology to take our business to the next level. And then, finally, we shall talk about the transformative impact that Zoomcar Mobility Services (ZMS) can have on your business and how our revolutionary technology is all set to define the future of mobility.</p1>
//     </div>
//   )
// }

// export default ZMS
import React from 'react';
import './ZMS.css';
import ZomeCarMobile from "../Images/Zoomcar-App-Mobile.jpg";
import carunlock from "../Images/Car-Unlock.png";
import ZMSControl from "../Images/ZMS-Control-Centre.png";

const ZMS = () => {
  return (
    <div className='zms-container'>
      <h1 className='zms-heading'>How did Zoomcar Develop its Revolutionary Technology to Define the Future Mobility?</h1>
      <p className='zms-paragraph'>Established in 2013, Zoomcar holds the distinction of being India’s first personal mobility platform. It was founded by Greg Moran and David Back at a time when there was a serious dearth of personal mobility options in India and the concept of self-drive car rental was still relatively unknown in the country. Since its inception, Zoomcar has come a long way to become a market leader in the self-drive space with over 10,000 cars in its fleet. Under the visionary leadership of Mr. Greg Moran, CEO & co-founder of Zoomcar, we have always followed a technology-driven customer-first product approach to deliver a world-class user experience to our customers.</p>
      <p className='zms-paragraph'>During all these years, we have been using the latest AI and ML technologies to develop top-of-the-line mobility solutions that have substantially enhanced our operational capabilities and maximized the revenue. Now, we have decided to share our story of innovation and growth with you. Hence, we’ll take you through our journey to help you understand how we used latest technology to take our business to the next level. And then, finally, we shall talk about the transformative impact that Zoomcar Mobility Services (ZMS) can have on your business and how our revolutionary technology is all set to define the future of mobility.</p>

      <h1 className='zms-heading'>Mobile App Launch</h1>
      <p className='zms-paragraph'>There is no point in making people go through several company employees or wait for hours before finally getting a car to rent. So, we decided to utilize the mobile technology to make car renting process as smooth and streamlined as it can possibly be. In 2014, Zoomcar launched its user-friendly mobile app, which enables the users to rent cars by the hour, day, week, or month and provides them with a great degree of flexibility, affordability, privacy, and freedom. Next year, we launched a mobile application for our on-ground representatives as well, which significantly enhanced the stability and scalability of our on-ground operations. During the same year, Zoomcar also introduced the doorstep delivery services for its customers that allow them to get a car delivered and picked-up by Zoomcar executives at any location of their choice.</p>
      <img src={ZomeCarMobile} alt='' className='zms-image' />

      <h1 className='zms-heading'>Introduction of Keyless Entry (KLE)</h1>
      <p className='zms-paragraph'>In order to enhance the convenience of our customers and remove any difficulties related to the handover of the car keys, we started working on a keyless entry solution that would enable the users to pick and drop the vehicle at any location of their choice. So, in 2016, the company launched the Keyless Entry (KLE) solutions, which significantly enhanced our fleet sharing and operational capabilities. The KLE system facilitates a remote access to the vehicles by enabling the users to unlock the car simply with the help of their smart phones. After unlocking the car through the smart phone, the users can access the vehicle keys in the dashboard. Now, the KLE feature can also be used with the Passive Entry Passive Start (PEPS) systems that are secure wireless communication systems, which enable a user to access the car (unlocking the car and starting the engine) without physically using a key.</p>
      <img src={carunlock} alt='Car Unlock Process through KLE' className='zms-image' />

      <h1 className='zms-heading'>IoT-Based Solution Gets Rolled Out</h1>
      <p className='zms-paragraph'>In 2017, Zoomcar launched a flagship full stack IoT-based solution named Cadabra to transform our vehicles into IoT-enabled vehicles. The underlying principle behind Cadabra is allowing access to real-time in-car data that makes the driver safer and more efficient. It also enables us to keep track of real-time information related to driving behavior, fuel levels, clutch position, harsh braking, inconsistent acceleration, seat belt usage and engine health. This real time data can also be used to reward or penalize the drivers based on their driving behavior and handling of the vehicle.</p>
      <img src={ZMSControl} alt='Control Centre enables us to keep an eye on vehicle’s location, health, and fuel level' className='zms-image' />

      <h1 className='zms-heading'>Impact of Zoomcar’s Technology on Future Mobility</h1>
      <p className='zms-paragraph'>The world of mobility is changing very fast. The ‘no-ownership’ mindset of the youth all over the world has given shape to an entirely new subscription-based economy. Along with Zoomcar, several other automotive OEMs have already entered the car subscription market to cater to the demands of the commitment-phobic millennials, who like to switch car models only after a few months’ time. It is high time that all OEMs started cashing in on this extremely lucrative car subscription market. Other than creating a new revenue stream, these subscription services will also enable the OEMs to forge a supplementary sales channel. In order to make things simple, Zoomcar has developed a Subscription Platform that allows the OEMs to launch an easily manageable and highly profitable subscription business within a few weeks.

        Similarly, the latest vehicle systems and their operations have also been completely revolutionized by the latest innovations in the Internet of Things (IoT) domain. The IoT-based ZMS Connected Vehicle Solutions will not only enhance the profitability of your business and improve the safety of your vehicles but also enable you to easily keep up with this current technological revolution.

        Now, you can experience the power of our top-of-the-line mobility solutions firsthand. Avail your demo by sending us an email at zms.contact@zoomcar.com. Make sure to mention some details about yourself, your company, and basic requirements. We will assess your requirements and get back to you as early as possible.</p>
    </div>
  );
}

export default ZMS;
