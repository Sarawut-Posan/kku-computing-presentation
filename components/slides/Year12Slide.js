import { motion } from 'framer-motion';
import AnimatedList from '../AnimatedList';

const animations = {
  header: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, type: 'spring' },
  },
  section: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function Year12Slide() {
  const skillData = [
    ['Programming Logic', '85%'],
    ['Problem Solving', '90%'],
    ['Code Debugging', '75%'],
    ['Team Collaboration', '80%'],
    ['Version Control (Git)', '70%'],
    ['Database Basics', '65%'],
    ['Web Development', '60%'],
    ['Mobile Development', '40%'],
  ];

  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="terminal text-left space-y-8 overflow-y-auto h-[80vh] p-4"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,65,0.8)' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
        initial="hidden"
        animate="visible"
      >
        {/* SECTION 1 - ANIMATED HEADER */}
        <motion.section variants={animations.header} className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold">📚 ปี 1-2: Building Foundation Layer...</h2>
          <div className="w-full bg-white/20 h-3 rounded">
            <motion.div
              className="h-3 bg-accent rounded"
              initial={{ width: 0 }}
              animate={{ width: '78%' }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <pre className="text-sm md:text-base">System status: Initializing CS_Foundation_v1.2...</pre>
        </motion.section>

        {/* SECTION 2 - PROGRAMMING PROGRESSION TIMELINE */}
        <motion.section variants={animations.section} className="space-y-2">
          <h3 className="text-xl md:text-3xl font-semibold">Programming Progression Timeline</h3>
          <pre className="text-sm md:text-base bg-black/50 p-4 rounded whitespace-pre">
          {`// Week 1: First Hello World
          console.log("Hello, World!");

          // Month 3: Basic Functions
          function calculateGPA(credits, points) {
            return points / credits;
          }

          // Month 6: Object-Oriented Programming
          class Student {
            constructor(name, id) {
              this.name = name;
              this.studentId = id;
              this.courses = [];
            }

            enrollCourse(course) {
              this.courses.push(course);
            }
          }

          // Month 12: Data Structures
          class LinkedList {
            constructor() {
              this.head = null;
              this.size = 0;
            }
          }`}
          </pre>
        </motion.section>

        {/* SECTION 3 - MATHEMATICS & ALGORITHMS VISUAL */}
        <motion.section variants={animations.section} className="space-y-2">
          <h3 className="text-xl md:text-3xl font-semibold">Mathematics &amp; Algorithms</h3>
          <AnimatedList
            className="list-disc list-inside text-sm md:text-base"
            items={[
              'Algorithm complexity: O(1), O(n), O(log n)',
              'Sorting animations: bubble sort, merge sort',
              'Discrete math → graph theory visuals',
              'Statistics → data distribution charts',
              'Linear algebra → matrix operations',
            ]}
          />
        </motion.section>

        {/* SECTION 4 - TEAMWORK SIMULATION */}
        <motion.section variants={animations.section} className="space-y-2">
          <h3 className="text-xl md:text-3xl font-semibold">Teamwork Simulation</h3>
          <AnimatedList
            className="list-disc list-inside text-sm md:text-base"
            items={[
              'Mock GitHub interface & commit history',
              'Chat threads for discussion',
              'Pull request reviews',
              'Agile sprint board with moving tasks',
            ]}
          />
        </motion.section>

        {/* SECTION 5 - DEVELOPMENT TOOLS MASTERY */}
        <motion.section variants={animations.section} className="space-y-2">
          <h3 className="text-xl md:text-3xl font-semibold">Development Tools Mastery</h3>
          <pre className="text-sm md:text-base bg-black/50 p-4 rounded whitespace-pre">
                {`bash# Terminal Commands Learned
                $ git init
                $ git add .
                $ git commit -m "First commit 🎉"
                $ git push origin main

                # VS Code Extensions Used
                - GitLens
                - Prettier
                - Live Server
                - Python Extension
                - Bracket Pair Colorizer`}
          </pre>
        </motion.section>

        {/* SECTION 6 - PROJECT PROGRESSION SHOWCASE */}
        <motion.section variants={animations.section} className="space-y-2">
          <h3 className="text-xl md:text-3xl font-semibold">Project Progression Showcase</h3>
          <AnimatedList
            className="list-disc list-inside text-sm md:text-base"
            items={[
              'Calculator App (Month 2) - HTML, CSS, JavaScript',
              'Student Grade System (Month 6) - Python, SQLite',
              'Mini Social Network (Month 10) - React, Node.js, MSSQL',
              'Mobile Weather App (Month 12) - React Native, Weather API',
            ]}
          />
        </motion.section>

        {/* SECTION 7 - SKILLS ACQUIRED DASHBOARD */}
        <motion.section variants={animations.section} className="space-y-2">
          <h3 className="text-xl md:text-3xl font-semibold">Skills Acquired</h3>
          {skillData.map(([label, percent]) => (
            <div key={label} className="mb-1">
              <span className="mr-2 inline-block w-48">{label}</span>
              <div className="w-full bg-white/20 h-3 rounded inline-block align-middle">
                <motion.div
                  className="h-3 bg-accent rounded"
                  initial={{ width: 0 }}
                  animate={{ width: percent }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>
          ))}
        </motion.section>

        {/* SECTION 8 - PREPARATION FOR YEAR 3-4 */}
        <motion.section variants={animations.section} className="space-y-2">
          <h3 className="text-xl md:text-3xl font-semibold">Preparation for Year 3-4</h3>
          <AnimatedList
            className="list-disc list-inside text-sm md:text-base"
            items={[
              'Roadmap to specializations',
              'Prerequisites checklist',
              'Recommended resources',
              'Summer project suggestions',
            ]}
          />
        </motion.section>
      </motion.div>
    </div>
  );
}
