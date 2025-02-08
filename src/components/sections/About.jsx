import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const dataSkills = [
    "Data Science",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Scikit-Learn",
    "Data Analytics",
    "Power BI",
    "Tableau",
    "Machine Learning",
    "Deep Learning"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a passionate data analyst with a strong foundation in data science and analytics. 
              My expertise lies in transforming complex datasets into meaningful insights using various 
              analytical tools and visualization techniques. I'm constantly expanding my knowledge in 
              machine learning and deep learning to bring more value to data-driven decision making.
            </p>

            <div className="rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {dataSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;