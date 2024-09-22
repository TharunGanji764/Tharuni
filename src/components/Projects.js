import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Coffee Shop",
      description:
        "The image depicts a 3D-rendered model of a coffee shop, created in Blender. The design is minimalistic, featuring clean lines and soft lighting. A large coffee cup sits prominently on the rooftop, adding a playful and creative touch to the structure. The warm lights inside the shop create a cozy, inviting atmosphere, while the surrounding elements like a streetlamp and fencing add to the overall scene. The use of subtle gradients and shadows gives the model a smooth and polished appearance, typical of modern 3D renders.",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034715/COFFEESHOP_amwib6.png",
    },
    {
      id: 2,
      title: "Avengers Tower In Blender",
      description:
        "This iconic Avengers Tower, crafted in Blender, showcases a sleek, futuristic design with the distinctive A logo prominently displayed. Surrounded by greenery and a circular landing pad, the tower stands as a symbol of Earth's mightiest heroes. The scene's attention to detail and vibrant colors capture the Marvel universe's signature style.",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034637/AVENGERS_v4uktd.png",
    },
    {
      id: 3,
      title: "Simpson Room",
      description:
        "This charming living room, modeled after the iconic Simpsons home, features a retro television, a comfortable orange couch, and a colorful rug. The room's playful atmosphere and attention to detail capture the essence of the beloved animated series.",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034719/SHOUSE_htigde.png ",
    },
    {
      id: 4,
      title: "Toaster",
      description:
        "This cheerful toaster, crafted in Blender, features a whimsical design with vibrant colors and rounded edges. A slice of toast pops up from the toaster, ready to be enjoyed with a jar of jam. The scene's playful atmosphere and attention to detail make it a delightful creation. ",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034710/TOASTER_cwbkft.png",
    },
    {
      id: 5,
      title: "Canop Tower",
      description:
        "This charming tower, crafted in Blender, boasts a whimsical design with its pastel colors and cartoonish proportions. A miniature cannon sits atop the tower, adding a touch of defensive flair. Surrounded by pine trees and a flag bearing a shield, the tower evokes a sense of medieval adventure and storytelling. The scene's playful atmosphere and attention to detail make it a delightful creation.",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034717/TOWER_xvfnsx.png",
    },
    {
      id: 6,
      title: "Warkit",
      description:
        "This intricate emblem, forged in the digital realm of Blender, showcases a rustic wooden shield adorned with a metallic hammer and sword. The weathered textures and detailed craftsmanship evoke a sense of medieval history and valor. The emblem's composition, with its contrasting elements and balanced design, creates a visually compelling symbol of strength and courage.",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034716/WARKIT_x4idns.png",
    },
    {
      id: 7,
      title: "Battery",
      description:
        "The image has a futuristic depiction of batteries, highlighting glowing liquid inside transparent cylindrical containers. The main battery has a metallic top and base, with a translucent body showcasing a glowing core, suggesting advanced energy storage technology. Smaller cells are placed around it, each containing glowing orbs, adding to the high-tech aesthetic. The materials and lighting emphasize the clean, reflective surfaces and soft illumination, giving the entire scene a sci-fi, energy-focused theme.",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034705/BATTERY_mnswdc.png",
    },
    {
      id: 8,
      title: "Lantern",
      description:
        "This Blender-rendered image features a detailed lantern model with a glowing light source inside, surrounded by metallic spheres. The materials are carefully applied, with the lantern having a matte finish and the spheres displaying a reflective metallic texture. Soft ambient lighting highlights the glow of the lantern while creating reflections on the spheres. Depth of field is used effectively, blurring the background to focus on the lantern. The overall scene combines realism with artistic lighting.",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034721/LANTERN_qpos83.png",
    },
    {
      id: 9,
      title: "BusBay",
      description:
        "This image of a bus stop showcases a miniature, stylized bus bay with a bench under a red roof. The scene is neatly designed with a bus stop sign, a small potted plant adding greenery, and a clean, minimalistic aesthetic. The lighting creates a soft, warm atmosphere, emphasizing the simplicity and modernity of the design. It highlights effective 3D modeling and texturing techniques.",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034716/BUSBAY_mc9exv.png",
    },
    {
      id: 10,
      title: "Winery",
      description:
        "The image here showcases a bottle of whiskey paired with a filled glass and a bunch of grapes, all resting on a wooden board. The lighting highlights the reflective surfaces of the glass and the rich color of the liquid, creating a sense of warmth and elegance. The scene is minimalistic but detailed, with smooth textures and realistic glass material, adding to the visual appeal. It emphasizes effective 3D rendering techniques and attention to photorealism.",
      imgUrl:
        "https://res.cloudinary.com/dofmovt3n/image/upload/v1727034720/WINERY_sgw3du.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Each project in this portfolio highlights my expertise in 3D
                    modeling, spanning architectural visualizations, product
                    design, and character modeling. Through a blend of
                    creativity and technical precision, I bring ideas to life
                    using tools like Blender. My focus is on crafting detailed,
                    immersive models that meet specific design goals while
                    showcasing innovation and functionality.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="mb-5 justify-content-center align-items-center w-0"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="first"
                          style={{ overflow: "hidden", borderRadius: "50px" }}
                        >
                          MY PROJECTS
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="image"
      ></img>
    </section>
  );
};
