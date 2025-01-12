import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import aboutData from '../data/about.json';
import StartProject from './StartProject';

function About({ variant }) {
  const [active, setActive] = useState('ug');
  const container = useRef(null);
  const ug = useRef(null);
  const sc = useRef(null);
  const sec = useRef(null);
  const refs = [ug, sc, sec];
  const { scrollYProgress } = useScroll({ container });
  const top = useTransform(scrollYProgress, [0.05, 0.95], [0, 135]);
  const ugIsInview = useInView(ug);
  const scIsInview = useInView(sc);
  const secIsInview = useInView(sec);

  const scrollSmoothHandler = (element) => () => {
    element.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const { about, workExperience, education } = aboutData;

  useEffect(() => {
    if (ugIsInview) {
      setActive('ug');
    }
    if (scIsInview) {
      setActive('sc');
    }
    if (secIsInview) {
      setActive('sec');
    }
  }, [ugIsInview, scIsInview, secIsInview]);

  return (
    <motion.div variants={variant} initial="hidden" animate="visible" exit="hidden">
      <section className="about">
        <div className="bio">
          <div className="head">
            <h3>
              <span className="first-letter">K</span>now me better
            </h3>
            <hr className="hr-line" />
          </div>
          <div className="bio-data">{Object.values(about).map(para => (
            <p>{para}</p>
          ))
          }</div>
        </div>

        {/* Work Experience Section */}
        <div className="work-experience">
          <div className="head">
            <h4>
              <span className="first-letter">W</span>ork Experience
            </h4>
            <hr className="hr-line" />
          </div>
          <div className="timeline">
            {workExperience.map((exp, idx) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-content">
                  <h5>{exp.position}</h5>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <ul className="responsibilities">
                    {exp.responsibilities.map((res, resIdx) => (
                      <li key={resIdx}>{res}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="education">
          <div className="head">
            <h4>
              <span className="first-letter">E</span>ducation details
            </h4>
            <hr className="hr-line" />
          </div>
          <div className="edu-detail">
            <div id="left">
              <div id="edu-scroll-bar" className="bg-air-blue">
                <motion.div id="edu-scroll-thumb" style={{ top }}></motion.div>
              </div>
              <ul>
                <button
                  className={active === 'ug' ? 'active' : ''}
                  onClick={scrollSmoothHandler(ug)}
                >
                  Udergraduation
                </button>
                <button
                  className={active === 'sc' ? 'active' : ''}
                  onClick={scrollSmoothHandler(sc)}
                >
                  Senior secondary
                </button>
                <button
                  className={active === 'sec' ? 'active' : ''}
                  onClick={scrollSmoothHandler(sec)}
                >
                  Secondary
                </button>
              </ul>
            </div>

            <div id="right" ref={container}>
              {education.map((item, idx) => {
                return (
                  <div key={item.id} ref={refs[idx]} className="edu-desc" id={item.id}>
                    <p>
                      <strong>{item.degree}</strong> {item['deg-place']}
                    </p>
                    <p className="year">{item.year}</p>
                    <div className="learning">
                      {item.learnings.map((learnItem) => {
                        return <p key={learnItem}>-&gt; {learnItem}</p>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <StartProject />
    </motion.div>
  );
}

export default About;