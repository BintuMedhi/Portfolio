import "./styles/Work.css";
import WorkImage from "./WorkImage";

const project = {
  title: "HireLens AI",
  category: "AI resume analyzer",
  tools: "Next.Js, React, Tailwind CSS",
  image: "/images/hirelens.png",
};

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <div className="carousel-track-container">
            <div className="carousel-track">
              <div className="carousel-slide">
                <div className="carousel-content">
                  <div className="carousel-info">
                    <div className="carousel-number">
                      <h3>01</h3>
                    </div>
                    <div className="carousel-details">
                      <h4>{project.title}</h4>
                      <p className="carousel-category">{project.category}</p>
                      <div className="carousel-tools">
                        <span className="tools-label">Tools &amp; Features</span>
                        <p>{project.tools}</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-image-wrapper">
                    <WorkImage image={project.image} alt={project.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
