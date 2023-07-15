import Image from 'next/image'
import Link from 'next/link';
import Flag from 'react-world-flags'

export default function Home() {
  const name = 'Josef George Orland';
  const skills = [
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
    { title: 'AWS Redis Elasticache', level: 8 },
    { title: 'CI/CD', level: 7 },
  ]

  return (
    <main className="flex min-h-screen items-center bg-neutral-200">
      <div className="flex h-screen w-2/4 h-full fixed items-center justify-center flex-col top-0 right-0 bg-green-300">
        <Image className="portrait" src="/me.jpg" width="300" height="300" alt={name} />
        <h1 className="text-2xl mt-5">{name}</h1>
        <h2 className="mt-1">Lead Software Developer</h2>
      </div>
      <div className="w-2/4 min-h-screen flex flex-col p-12">
        <ul className="w-2/4 flex list-none justify-end fixed left-0 top-12 pr-12">
          <li className="mr-4"><Link href={'#about'}>about</Link></li>
          <li className="mr-4"><Link href={'#skills'}>skills</Link></li>
          <li className="mr-4"><Link href={'#experience'}>experience</Link></li>
          <li className="mr-4"><Link href={'#education'}>education</Link></li>
          <li className="mr-4"><Link href={'#contact'}>contact</Link></li>
        </ul>
        <a id="about"></a>
        <div className="flex flex-col min-h-screen justify-center">
          <h3 className="text-center text-2xl mb-16">About me</h3>
          <p className="mb-5">Born in 1987 from <Flag width="22" code={'mt'} alt={`Malta`} style={{display: 'inline-block'}} /> Malta, Software Development has been my passion since I was very young playing around with mIRC scripts and plugins.</p>
          <p className="mb-5">After I graduated from MCAST with a Bachelors in Computer Science while also learning PHP alone, I have started to build websites by myself as a hobby while also landing my first job with Crimsonwing as a PHP Developer.</p>
          <p>During my ~13 years career now, I&apos;ve been throughout all the Software Development stages from meeting clients and understanding requirements, coding, and deploying production environments.</p>
        </div>
        <a id="skills"></a>
        <div className="flex flex-col min-h-screen justify-center">
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
                    <div className="w-full bg-gray-500 rounded-full h-5 dark:bg-gray-700">
                      <div className="bg-green-600 h-5 rounded-full" style={{width: `${skill.level * 10}%`}}></div>
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
                    <div className="w-full bg-gray-500 rounded-full h-5 dark:bg-gray-700">
                      <div className="bg-green-600 h-5 rounded-full" style={{width: `${skill.level * 10}%`}}></div>
                    </div>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <a id="experience"></a>
        <div className="flex flex-col min-h-screen justify-center">
          <h3 className="text-center text-2xl mb-16">Experience</h3>
        </div>
        <a id="education"></a>
        <div className="flex flex-col min-h-screen justify-center">
          <h3 className="text-center text-2xl mb-16">Education</h3>
        </div>
        <a id="contact"></a>
        <div className="flex flex-col min-h-screen justify-center items-center">
          <h3 className="text-center text-2xl mb-16">Contact</h3>
          <ul className="flex flex-col">
            <li className="flex items-center">
              <svg className="h-8 w-8 text-blue-500 mr-5" viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg> <Link href="https://linkedin.com/joorland">https://linkedin.com/joorland</Link>
            </li>
            <li className="flex items-center">
              <svg className="h-8 w-8 text-red-500 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/></svg>
              <Link href="mailto:jgorland@gmail.com">jgorland@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
