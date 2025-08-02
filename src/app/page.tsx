"use client";
import ShootingStarsBackground from '@/components/ShootingStarsBackground';
import StarsBackground from '@/components/StarsBackground';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Gallery } from "@/components/Gallery";
import SkillCard from "@/components/SkillCard";
import Image from "next/image"; // Keeping import as we'll use it properly

export default function Portfolio() {
  return (
      <div
        className="min-h-screen flex flex-col items-center justify-start p-8 text-black dark:text-white"
        style={{
          background: "linear-gradient(to bottom,rgb(3, 3, 51) 0%,rgb(16, 16, 40) 50%,rgb(19, 20, 21) 100%)",
        }}
      >
        {/* ✅ Sticky Nav */}
        <nav className="w-full max-w-5xl flex justify-center md:justify-between items-center py-4 sticky top-0 z-50 backdrop-blur bg-black/30 rounded-full px-6 text-white">
          <div className="text-lg font-bold">Dhruv Patel</div>
          <ul className="flex gap-4 md:gap-8 text-sm md:text-base">
            <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
            <li><a href="#certificates" className="hover:text-pink-400">Certificates</a></li>
            <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
            <li><a href="#experience" className="hover:text-pink-400">Experience</a></li>
            <li><a href="#volunteer" className="hover:text-pink-400">Volunteer</a></li>
            <li><a href="#vlog" className="hover:text-pink-400">Vlog</a></li>
            <li><a href="#gallery" className="hover:text-pink-400">Gallery</a></li>
          </ul>
        </nav>

        {/* ✅ Home Section */}
        <section className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-12">
          {/* Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]"
            >
              Hi, I&apos;m Dhruv Patel
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/80 mt-4"
            >
              Full Stack Developer   X   AI/ML Engineer
            </motion.h2>

            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-block mt-8 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
            >
              ↓ Explore More
            </motion.a>
          </div>

          {/* ✅ Profile Image */}
          <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] mt-10 md:mt-0 rounded-full overflow-hidden border-4 border-white/20 shadow-xl hover:scale-105 transition-transform duration-500 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-50"></div>
            <Image
              src="/profile/boy1.png"
              alt="Dhruv"
              width={440}
              height={440}
              className="relative w-[110%] h-auto object-contain translate-y-4 z-10"
            />
          </div>
        </section>

        {/* ✅ About */}
        <section id="about" className="py-16 max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-white/80 leading-relaxed">
            I am a passionate Full Stack Engineer with a focus on building scalable web apps,
            AI & ML systems, and beautiful user experiences. Skilled in React, FastAPI,
            AWS, and more — always learning and creating.
          </p>
        </section>

        {/* ✅ Projects */}
        <section id="projects" className="w-full max-w-5xl mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold">Mask-Net</h3>
                <p>Real-time mask detection with invoicing using Python, FastAPI, TensorFlow.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold">Attendico</h3>
                <p>Attendance system using Face Recognition with Azure Face API, Firebase, and ReactJS.</p>
              </CardContent>
            </Card>
          </div>
        </section>

     {/* ✅ Certificates */}
<section 
  id="certificates" 
  className="w-screen py-16 relative overflow-hidden"
  style={{
    background: "linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f)",
    minHeight: "90vh"
  }}
>
  {/* Add the ShootingStarsBackground component */}
  <ShootingStarsBackground />
  
  {/* Section content with increased z-index */}
  <div className="relative z-10 max-w-5xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-12 text-white text-center">
      Professional Certifications
    </h2>
    
    <div className="relative">
      {/* Scroll container */}
      <div className="flex overflow-x-auto no-scrollbar space-x-6 pb-4">
        {[
          {
            title: "Agile Scrum Master",
            image: "/certificates/agile.png",
            tags: ["#Devops", "#ScrumMaster"]
          },
          {
            title: "React Native Developer",
            image: "/certificates/morgan.png",
            tags: ["#mobile", "#reactnative"]
          },
          {
            title: "TensorFlow Developer",
            image: "/certificates/google.png",
            tags: ["#ml", "#tensorflow"]
          },
          {
            title: "TensorFlow Developer",
            image: "/certificates/google.png",
            tags: ["#ml", "#tensorflow"]
          },
          // ➕ Add more here!
        ].map((cert, i) => (
          <div
            key={i}
            className="min-w-[300px] bg-black/40 backdrop-blur-md rounded-xl p-5 shadow-lg flex-shrink-0 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={250}
              height={208}
              className="w-full h-52 object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cert.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-sm px-2 py-1 bg-white/10 text-pink-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows for scroll with improved styling */}
      <button className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 hover:bg-pink-500/70 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 text-white z-20">
        ←
      </button>
      <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-pink-500/70 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 text-white z-20">
        →
      </button>
    </div>
  </div>
</section>

      {/* ✅ Skills */}
<section
  id="skills"
  className="w-screen relative overflow-hidden bg-black pb-0 mb-0" // Removed mb-16, added pb-0, mb-0
>
  {/* ✅ Video background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/backgrounds/cardsvideo.webm" type="video/webm" />
  </video>

  {/* ✅ Skills content */}
  <div className="relative z-10 p-8 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        { name: "React", icon: "/logos/react.png" },
        { name: "Python", icon: "/logos/python.png" },
        { name: "Java", icon: "/logos/java.png" },
        { name: "JavaScript", icon: "/logos/javascript.png" },
        { name: "Git", icon: "/logos/git.png" },
        { name: "Tailwind CSS", icon: "/logos/tailwind.png" },
        { name: "FastAPI", icon: "/logos/fastapi.png" },
        { name: "SQL", icon: "/logos/sql.png" },
        { name: "Docker", icon: "/logos/docker.png" },
        { name: "AWS", icon: "/logos/aws.png" },
        { name: "Next.js", icon: "/logos/nextjs.png" },
        { name: "TypeScript", icon: "/logos/typescript.png" },
        { name: "Node.js", icon: "/logos/nodejs.png" },
        { name: "MongoDB", icon: "/logos/mongodb.png" },
        { name: "Golang", icon: "/logos/golang.png" },
        { name: "AngularJS", icon: "/logos/angularjs.png" },
        { name: "HTML5", icon: "/logos/html5.png" },
      ].map((tech, i) => (
        <SkillCard key={i} icon={tech.icon} name={tech.name} index={i} />
      ))}
    </div>
  </div>
</section>

{/* ✅ Experience */}
<section
  id="experience"
  className="w-screen relative overflow-hidden text-white mt-0 pt-0" // Added mt-0, pt-0
  style={{
    background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
    minHeight: "100vh"
  }}
>
  {/* ✅ Add the StarsBackground component instead of div elements */}
  <StarsBackground />

  {/* ✅ Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-4 pt-16"> {/* Added pt-16 for spacing */}
    <div className="text-center mb-6">
      <p className="uppercase tracking-widest text-sm text-pink-400 mb-2">
        -----------------------------
      </p>
      <h2 className="text-4xl font-extrabold text-white mb-2">
        Where I&apos;ve Made Impact
      </h2>
      <p className="text-lg font-medium text-white/80">
        My Work Experience.
      </p>
      <p className="uppercase tracking-widest text-sm text-pink-400 mt-2">
        -----------------------------
      </p>
    </div>

    <div className="relative border-l-4 border-pink-500 ml-4">
      {/* Job 1 */}
      <div className="mb-10 ml-8">
        <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2.5 top-1"></div>
        <Card className="p-4 shadow-lg bg-black/30 backdrop-blur rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-1">Software Engineer</h3>
          <p className="text-sm mb-2 font-bold text-white/70">
            Vaibhu Safety | Sep 2021 – Aug 2023
          </p>
          <ul className="list-disc ml-5 font-semibold text-sm text-white/80 ">
            <li>Built monitoring systems using ASP.NET, Docker, AKS, and SQL Server.</li>
            <li>Implemented CI/CD and optimized app performance by 45%.</li>
          </ul>
        </Card>
      </div>

      {/* Job 2 */}
      <div className="mb-10 ml-8">
        <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2.5 top-1"></div>
        <Card className="p-4 shadow-lg bg-black/30 backdrop-blur rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-1">
            Software Engineer Intern
          </h3>
          <p className="text-sm mb-2 font-bold text-white/70">
            L&T Power | Nov 2020 – Jul 2021
          </p>
          <ul className="list-disc ml-5 font-semibold text-sm text-white/80">
            <li>Designed ML models for defect detection in radiographs using XGBoost.</li>
            <li>Automated data pipelines and improved data quality.</li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
</section>

      {/* ✅ Volunteer */}
      <section id="volunteer" className="text-white py-16 w-full max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">Volunteer</h2>
        <p>Adobe Student Ambassador at Northeastern — Hosting design events & creative workshops.</p>
        <p>RSO Proctor — Led dorm safety, managed events, built community initiatives.</p>
      </section>

      {/* ✅ Vlog */}
      <section id="vlog" className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Vlog</h2>
        <ul className="space-y-2">
          <li><a className="underline text-blue-400" href="#">🇮🇳 India → 🇺🇸 USA Journey Reel</a></li>
          <li><a className="underline text-blue-400" href="#">🎉 Diwali Hyperlapse Party Night</a></li>
          <li><a className="underline text-blue-400" href="#">👩‍✨ Salem Witch City Trip</a></li>
        </ul>
      </section>

      {/* ✅ Gallery */}
      <section id="gallery" className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">Gallery</h2>
        <Gallery />
      </section>
    </div>
  );
}