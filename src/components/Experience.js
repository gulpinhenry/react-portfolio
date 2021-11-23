import React from "react";
import "../css/experience.css";
const styles = {
};

function Experience() {
  return (
    <section id="exp">
      <h2 className="header">Experience</h2>
      <div className="containerexp">
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <p className="timeline-date">
                  Jan. 2022 - Present (exp. Jun. 2025)
                </p>
                <h1>Computer Science and Engineering - NYU</h1>
                <p>
                  Pursuing bachelors degrees in {""}
                  <a
                    href="https://engineering.nyu.edu/academics/departments/computer-science-and-engineering"
                    target="_blank"
                  >
                    computer science and computer engineering
                  </a>
                  . Plan to also pursue a Math, Cybersecurity, and Data Science
                  minor.
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <p className="timeline-date">Sep. 2021 - Dec. 2021</p>
                <h1>Full Stack Bootcamp - UC Berkeley</h1>
                <p>
                  Learned the MERN stack in a {""}
                  <a
                    href="https://bootcamp.berkeley.edu/coding/"
                    target="_blank"
                  >
                    12 week intensive course
                  </a>
                  . Released web applications considering efficiency and
                  scalability, designing service oriented architecture. Worked
                  under {""}
                  <a
                    href="https://medium.com/@h3nrykam/first-time-web-dev-explains-agile-in-laymans-terms-e72c3f973035"
                    target="_blank"
                  >
                    Agile Methodology
                  </a>
                  .
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <p className="timeline-date">May 2020 - Present</p>
                <h1>
                  Computational Materials Research Lab - San Jose State
                  University
                </h1>
                <p>
                  Worked under {""}
                  <a
                    href="https://sites.google.com/sjsu.edu/cmrl"
                    target="_blank"
                  >
                    Dr. Santosh KC
                  </a>
                  . Utilized machine learning correcting functionals and quantum
                  computing software to analyze the electrical and ionic
                  conductivity of Silicene, the two-dimensional form of silicon.
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <p className="timeline-date">2021 - Present</p>
                <h1>YAPA Kids - Python Lead Instructor</h1>
                <p>
                  <a href="https://yapakids.org" target="_blank">
                    YAPA Kids
                  </a>{" "}
                  is a global nonprofit student-run organization dedicated to
                  providing free supplemental education to 5000+ 1st-8th grade
                  students during the Covid-19 pandemic through Zoom. Developed
                  20+ weekly lesson-plans, including scripts, slideshows and
                  online interactives for the program’s curricula.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Experience;
