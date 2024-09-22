import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Me</h2>
              <p>
                I’m THRIGUNA GANJI , currently pursuing a bachelor’s degree in
                Digital Techniques for Designing and Planning. I have a strong
                passion for blending creativity with technical expertise to
                bring ideas to life. My work includes architectural
                visualizations, product design, and character modeling, always
                focusing on detail and precision. Through my studies and
                personal projects, I’m constantly exploring new methods to push
                the boundaries of 3D design. Whether I’m creating realistic
                environments or innovative models, I aim to deliver
                high-quality, immersive work that solves design challenges
                and tells a story.
              </p>
              <div className="owl-carousel owl-theme skill-slider d-flex justify-content-center">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>ADOBE PHOTOSHOP</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>BLENDER</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>AUTOCAD</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
