import { useEffect, useRef } from "react";
import "./styles/Career.css";

const careerData = [
  {
    role: "Frontend Developer & UI/UX Designer",
    context: "BCA Graduate",
    year: "2021 - 2024",
    highlights:
      "Designed and developed responsive web interfaces using HTML, CSS, and JavaScript. Created UI/UX wireframes and prototypes in Figma. Built visually consistent design systems and pixel-perfect layouts.",
  },
  {
    role: "Full Stack Developer",
    context: "MCA",
    year: "2024 - Present",
    highlights:
      "Developed full-stack applications using React.js, Node.js, and MongoDB. Built and deployed scalable backend APIs and integrated authentication systems. Delivered production-ready projects including CMS platforms and dynamic web apps.",
  },
];

const Career = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate timeline line drawing
    const lineEl = lineRef.current;
    const sectionEl = sectionRef.current;
    if (!lineEl || !sectionEl) return;

    const lineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lineEl.classList.add("line-animate");
        }
      },
      { threshold: 0.1 }
    );
    lineObserver.observe(sectionEl);

    // Animate each career box
    boxRefs.current.forEach((box) => {
      if (!box) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            box.classList.add("career-box-visible");
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(box);
    });

    return () => {
      lineObserver.disconnect();
    };
  }, []);

  return (
    <div className="career-section section-container" ref={sectionRef}>
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          <em>experience</em>
        </h2>

        <div className="career-info">
          {/* Animated vertical timeline line */}
          <div className="career-timeline" ref={lineRef}>
            <div className="career-dot" />
          </div>

          {careerData.map((item, i) => (
            <div
              key={i}
              className="career-info-box"
              ref={(el) => {
                if (el) boxRefs.current[i] = el;
              }}
            >
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.context}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.highlights}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
