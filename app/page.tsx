'use client';

import { differenceInYears, format, parseISO } from 'date-fns';
import Image from 'next/image'
import Link from 'next/link';
import Flag from 'react-world-flags'
import { Button, Carousel, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function Home() {
  interface Experience {
    role: string;
    company: string;
    description: string;
    from: Date;
    to: Date | null;
  }

  interface Education {
    school: string,
    degree: string,
    from: Date;
    to: Date;
  }

  const name: string = 'Josef George Orland';
  const skills: Array<{
    title: string,
    level: number
  }> = [
    { title: 'PHP', level: 9 },
    { title: 'CakePHP', level: 9 },
    { title: 'Laravel', level: 6 },
    { title: 'HTML', level: 9 },
    { title: 'CSS/SASS', level: 9 },
    { title: 'JavaScript', level: 9 },
    { title: 'MySQL', level: 9 },
    { title: 'Next.js', level: 8 },
    { title: 'Tailwind', level: 6 },
    { title: 'React.js', level: 6 },
    { title: 'React Native', level: 3 },
    { title: 'AWS RDS', level: 8 },
    { title: 'AWS EC2', level: 8 },
    { title: 'AWS Lambda', level: 8 },
    { title: 'AWS S3', level: 8 },
    { title: 'AWS Cloudfront', level: 8 },
    { title: 'Redis Elasticache', level: 8 },
    { title: 'CI/CD', level: 7 },
    { title: 'GIT', level: 9 },
    { title: 'Agile', level: 9 },
  ]

  const [selectedMenu, setSelectedMenu] = useState<string>('about');

  const experiences: Array<Experience> = [
    {
      company: 'Northern Gas & Power',
      role: 'Senior Software Developer',
      description: `
        <p>At NGP, my role consists of maintaining the CRM and ERP platforms of the company. The system is running on PHP5 and AngularJS including multiple services to connect with external APIs.</p>
        <p>At the moment we are working on upgrading the system to PHP8 running on a Docker image which I prepared and also integrating real time notifications using Websockets. The Websocket server is something I'm building using AdonisJS 5 and the Redis Pub-Sub protocol</p>
      `,
      from: parseISO('2023-09-01'),
      to: null
    },
    {
      company: 'THESPIKE.GG',
      role: 'Tech Lead',
      description: `
        <p>THESPIKE.GG is a website that provides coverage of professional esports for VALORANT, a game published by Riot Games (same publisher of League of Legends).<p>
        <p>I had founded this project back in 2019 and had built the whole system from scratch by myself using a custom CMS, frontend with CakePHP, SASS and jQuery and a MySQL database hosted on AWS infrastructure.</p>
        <p>In 2021, the website was sold to Zealium Media Ltd. where I kept my role as a Tech Lead on the project. The role included porting the frontend to Next.JS hosted on Vercel while also creating a REST API to handle data for the frontend. I have setup the API to run on AWS Elasticbeanstalk with CI/CD for Staging and Production environments that connects to an AWS RDS MySQL Cluster.</p>
        <p>The project also boosts other AWS services such as AWS Lambda Node.js functions running as cron jobs, a Websocket.io Node.js AWS EC2 server for Live Scores, AWS S3 & Cloudfront for image hosting and CDN delivery and AWS Redis Elasticache for data caching.</p>
      `,
      from: parseISO('2020-11-01'),
      to: parseISO('2023-08-20')
    },
    {
      company: 'PreeoStudios',
      role: 'Managing Director',
      description: `
        <p>Founder of the company alongside 2 other school friends, we created the company to build websites and further down the years more complex internal systems for larger companies. Role included all stages of the development life-cycle from meeting the client and launching the final version of the project. The company had approximately around 8-10 developers who where assigned to several projects running simultaneously.</p>
        <p>During these years I have used a lot of different technologies on different projects such as CakePHP, Laravel, SASS, Angular.js, React.js, React Native, Firebase, AWS RDS, AWS EC2, AWS Elasticache and much more.</p>
      `,
      from: parseISO('2009-01-01'),
      to: parseISO('2020-11-01'),
    },
    {
      company: 'Cashpoint Sportwetten',
      role: 'Team Coordinatior Online Development',
      description: `
        <p>Leading a team of 3 developers in Malta for a Betting Company that had it's headquarters in Austria, my role included being a Scrum Master for the re-design project of the website based on Yii2 while also working on a Sportsbook live scores screen running on Raspberry Pi with Javascript and Websockets to be shown on TVs in Betting Shops</p>
      `,
      from: parseISO('2013-06-01'),
      to: parseISO('2015-01-01'),
    },
    {
      company: 'Fengaming Ltd.',
      role: 'Software Developer',
      description: `
        <p>Development of new projects and improvements to an online betting platform based on PHP & MySQL. My main focus was the pre-live Sports Betting section and Bonuses given on Betting Slips.</p>
        <p>I also implemented a lot of the Betting section to obtain the Italian Sportsbook License (AAMS) while having tasks involving HTML, CSS and jQuery</p>
      `,
      from: parseISO('2011-06-01'),
      to: parseISO('2013-05-01'),
    },
    {
      company: 'Crimsonwing',
      role: 'Web Developer',
      description: `
        <p>Developing e-commerce websites using the Magento Enterprise Edition (based on the Zend MVC), involving the use of PHP, MySQL, CSS, XHTML and JavaScript with Prototype & jQuery libraries. Development included also integration of payment gateway (RBS Worldpay)</p>
      `,
      from: parseISO('2011-06-01'),
      to: parseISO('2013-05-01'),
    }
  ]

  const education: Array<Education> = [
    {
      school: 'MCAST',
      degree: 'B. Sc., Computer Science',
      from: parseISO('2010-01-01'),
      to: parseISO('2011-12-01')
    },
    {
      school: 'MCAST',
      degree: 'Higher National Diploma',
      from: parseISO('2008-01-01'),
      to: parseISO('2009-12-01')
    },
    {
      school: 'MCAST',
      degree: 'National Diploma',
      from: parseISO('2006-01-01'),
      to: parseISO('2007-12-01')
    },
  ];
  
  const [currentExperience, setCurrentExperience] = useState<Experience | null>(null)

  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center bg-neutral-200">
      <div className="flex h-screen w-full relative lg:w-2/4 lg:fixed items-center justify-center flex-col lg:top-0 lg:right-0 bg-blue-400">
        <Image className="w-250 h-250 p-1 rounded-full ring-2 ring-black" src="/me.jpg" width="300" height="300" alt={name} />
        <h1 className="text-2xl mt-5">{name}</h1>
        <h2 className="mt-1">Lead Software Developer</h2>
        <div>{differenceInYears(new Date(), parseISO('1987-09-20'))} yrs old from <Flag width="22" code={'mt'} alt={`Malta`} style={{display: 'inline-block'}} /> Malta</div>
        <div className="absolute bottom-5 lg:right-5 text-xs">
          <p>CV created using Next.js 13 + Tailwind CSS + Flowbite React</p>
          <p className="text-right">Hosted on Vercel.com using Hobby plan</p>
        </div>
      </div>
      <div className="lg:w-2/4 min-h-screen flex flex-col lg:p-0 border border-white lg:border-0">
        <ul className="menu sticky z-10 top-0 w-full flex list-none justify-center p-6 bg-blue-400">
          <li className="mr-4"><Link onClick={() => setSelectedMenu('about')} className={"hover:font-bold hover:underline hover:underline-offset-4 " + (selectedMenu == 'about' ? 'selected' : '')} href={'#about'}>About</Link></li>
          <li className="mr-4"><Link onClick={() => setSelectedMenu('skills')} className={"hover:font-bold hover:underline hover:underline-offset-4 " + (selectedMenu == 'skills' ? 'selected' : '')} href={'#skills'}>Skills</Link></li>
          <li className="mr-4"><Link onClick={() => setSelectedMenu('experience')} className={"hover:font-bold hover:underline hover:underline-offset-4 " + (selectedMenu == 'experience' ? 'selected' : '')} href={'#experience'}>Experience</Link></li>
          <li className="mr-4"><Link onClick={() => setSelectedMenu('education')} className={"hover:font-bold hover:underline hover:underline-offset-4 " + (selectedMenu == 'education' ? 'selected' : '')} href={'#education'}>Education</Link></li>
          <li><Link onClick={() => setSelectedMenu('contact')} className={"hover:font-bold hover:underline hover:underline-offset-4 " + (selectedMenu == 'contact' ? 'selected' : '')} href={'#contact'}>Contact</Link></li>
        </ul>
        <a id="about"></a>
        <div className="flex flex-col min-h-screen justify-center pl-6 pr-6 lg:pl-12 lg:pr-12">
          <h3 className="text-center text-2xl mb-16">About me</h3>
          <p className="mb-5">Born in 1987 from <Flag width="22" code={'mt'} alt={`Malta`} style={{display: 'inline-block'}} /> Malta, Software Development has been my passion since I was very young playing around with mIRC scripts and plugins.</p>
          <p className="mb-5">After I graduated from MCAST with a Bachelors in Computer Science while also learning PHP alone, I have started to build websites by myself as a hobby while also landing my first job with Crimsonwing as a PHP Developer.</p>
          <p>During my ~13 years career now, I&apos;ve been throughout all the Software Development stages from meeting clients and understanding requirements, coding, code reviews, and deploying production environments.</p>
        </div>
        <a id="skills"></a>
        <div className="flex flex-col min-h-screen justify-center pl-6 pr-6 lg:pl-12 lg:pr-12">
          <h3 className="text-center text-2xl mb-16">Skills</h3>
          <div className="flex">
            <div className="flex-1 mr-5">
              <ul>
                {skills.slice(0, skills.length/2).map((skill, index) => {
                  return <li key={`skill-${index}`} className="mb-5">
                    <div className="flex justify-between">
                      <span>{skill.title}</span>
                      <span>{skill.level}/10</span>
                    </div>
                    <div className="w-full bg-gray-400 rounded-full h-2 lg:h-5">
                      <div className="bg-gray-700 h-2 lg:h-5 rounded-full" style={{width: `${skill.level * 10}%`}}></div>
                    </div>
                  </li>
                })}
              </ul>
            </div>
            <div className="flex-1">
              <ul>
                {skills.slice(skills.length/2).map((skill, index) => {
                  return <li key={`skill-${index + skills.length /2}`} className="mb-5">
                    <div className="flex justify-between">
                      <span>{skill.title}</span>
                      <span>{skill.level}/10</span>
                    </div>
                    <div className="w-full bg-gray-400 rounded-full h-2 lg:h-5">
                      <div className="bg-gray-700 h-2 lg:h-5 rounded-full" style={{width: `${skill.level * 10}%`}}></div>
                    </div>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <a id="experience"></a>
        <div className="flex flex-col min-h-screen justify-center pl-12 pr-12">
          <h3 className="text-center text-2xl mb-16">Experience</h3>
          <div className="hidden lg:flex" style={{height: "600px"}}>
            <Carousel slide={false} indicators={false}>
              {experiences.map((experience, index) => {
                return <div key={`experience-${index}`} className="flex h-full items-center bg-gray-700 text-white">
                  <div className="flex flex-col flex-1 pl-20 pr-20">
                    <div className="flex flex-1 flex-col mb-5">
                      <span><b>{experience.role}</b> at <b>{experience.company}</b></span>
                      <span>{format(experience.from, "MMMM yyyy")} - {experience.to == null ? 'Present' : format(experience.to, 'MMMM yyyy')}</span>
                    </div>
                    <div className="experience-description" dangerouslySetInnerHTML={{__html: experience.description}}></div>
                  </div>
                </div>
              })}
            </Carousel>
          </div>
          <div className="lg:hidden">
            {experiences.map((experience, index) => {
              return <Button className="w-full mb-5 bg-gray-700" onClick={() => setCurrentExperience(experience)} key={`experience-button-${index}`}>
                  {experience.role} at {experience.company}<br />
                  {format(experience.from, "MMMM yyyy")} - {experience.to == null ? 'Present' : format(experience.to, 'MMMM yyyy')}
                </Button>
            })}
          </div>
          {currentExperience !== null && (
            <Modal theme={{
              root: {
                // Replace: h-modal h-screen with h-full
                base: 'fixed top-0 right-0 left-0 z-50 h-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
              },
              content: {
                // Added: flex flex-col justify-center
                base: 'relative h-full w-full p-4 md:h-auto flex flex-col justify-center',
                // Added: max-h-full max-w-full overflow-hidden
                inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col',
              },
            }} show={currentExperience !== null} onClose={() => setCurrentExperience(null)}>
              <Modal.Header>{currentExperience.role} at {currentExperience.company}</Modal.Header>
              <Modal.Body>
                <div className="space-y-6 text-gray-500 experience-description" dangerouslySetInnerHTML={{__html: currentExperience.description}}>
                </div>
              </Modal.Body>
            </Modal>
          )}          
        </div>
        <a id="education"></a>
        <div className="flex flex-col min-h-screen justify-center lg:pl-12 lg:pr-12">
          <h3 className="text-center text-2xl mb-16">Education</h3>
          <ul>
            {education.map((educationItem, index) => {
              return <li key={`skill-${index + skills.length /2}`} className="mb-5">
                <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
                  <span><b>{educationItem.degree}</b> at <b>{educationItem.school}</b></span>
                  <span>{format(educationItem.from, "MMMM yyyy")} - {educationItem.to == null ? 'Present' : format(educationItem.to, 'MMMM yyyy')}</span>
                </div>
              </li>
            })}
          </ul>
        </div>
        <a id="contact"></a>
        <div className="flex flex-col min-h-screen justify-center items-center lg:pl-12 lg:pr-12">
          <h3 className="text-center text-2xl mb-16">Contact</h3>
          <ul className="flex flex-col">
            <li className="flex items-center">
              <svg className="h-8 w-8 text-blue-500 mr-5" viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg> <Link target='_blank' href="https://www.linkedin.com/in/joorland/">@joorland</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-8 w-8 text-red-500 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/></svg>
              <Link target='_blank' href="mailto:jgorland@gmail.com">jgorland@gmail.com</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-8 w-8 text-black mr-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <Link target='_blank' href="https://github.com/hexIV">hexIV</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
