"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Gallery } from "@/components/Gallery";
import SkillCard from "@/components/SkillCard";

export default function Portfolio() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-8 text-black dark:text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/backgrounds/portfolio-bg.jpg')",
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
  className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
  Hi, I'm Dhruv Patel
</motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 mt-4"
          >
            Full Stack Developer | AI & ML Enthusiast
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
          <img
            src="/profile/boy1.png"
            alt="Dhruv"
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
      <section id="certificates" className="w-full max-w-5xl mb-16">
  <h2 className="text-3xl font-bold mb-6 text-white">Certificates</h2>
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
          className="min-w-[250px] bg-black/30 backdrop-blur rounded-xl p-4 shadow-lg flex-shrink-0"
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-40 object-contain mb-4 rounded"
          />
          <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
          <div className="flex flex-wrap gap-2">
            {cert.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-white/10 text-pink-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Optional: Arrows for scroll */}
    {/* Just for looks: add functionality with JS if you want */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 p-2 rounded-full cursor-pointer">
      ←
    </div>
    <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 p-2 rounded-full cursor-pointer">
      →
    </div>
  </div>
</section>

      {/* ✅ Skills */}
      <section id="skills" className="w-full max-w-5xl mb-16">
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
            { name: "golang", icon: "/logos/golang.png" },
            { name: "angularjs", icon: "/logos/angularjs.png" },
            { name: "HTML5", icon: "/logos/html5.png" },
          ].map((tech, i) => (
            <SkillCard key={i} icon={tech.icon} name={tech.name} index={i} />
          ))}
        </div>
      </section>

      {/* ✅ Experience */}
      <section id="experience" className="w-full max-w-5xl mb-16">
  <div className="text-center mb-6">
    <p className="uppercase tracking-widest text-sm text-pink-400 mb-2">
      -----------------------------
    </p>
    <h2 className="text-4xl font-extrabold text-white mb-2">
      Where I’ve Made Impact
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
        <p className="text-sm mb-2 font-bold text-white/70">Vaibhu Safety | Sep 2021 – Aug 2023</p>
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
        <h3 className="text-xl font-semibold text-white mb-1">Software Engineer Intern</h3>
        <p className="text-sm mb-2 font-bold text-white/70">L&T Power | Nov 2020 – Jul 2021</p>
        <ul className="list-disc ml-5 font-semibold text-sm text-white/80">
          <li>Designed ML models for defect detection in radiographs using XGBoost.</li>
          <li>Automated data pipelines and improved data quality.</li>
        </ul>
      </Card>
    </div>
  </div>
</section>


      {/* ✅ Volunteer */}
      <section id="volunteer" className="w-full max-w-5xl mb-16">
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
