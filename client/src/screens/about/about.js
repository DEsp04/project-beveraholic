import React from "react";
import Layout from "../../components/layout/Layout";
import shan from "../../images/team/shan.png";
import angel from "../../images/team/angel.png";
import david from "../../images/team/david.png";
import katherine from "../../images/team/katherine.png";
import linkedin from "../../images/logos/linkedin-logo.svg";
import github from "../../images/logos/github-logo.svg";
import FullHeight from "react-full-height";


export default function about() {
  const team = [
    {
      firstName: "Angel",
      lastName: "Fernández",
      teamTitle: "Web Developer",
      teamImage: angel,
      linkedin: "https://www.linkedin.com/in/angelbienvenidofernandez/",
      gitHub: "https://github.com/Avixph",
    },
    {
      firstName: "Katherine",
      lastName: "Fernandez",
      teamTitle: "Product Designer",
      teamImage: katherine,
      linkedin: "https://www.linkedin.com/in/katfernandez22/",
      gitHub: "https://github.com/katfernandez22",
    },
    {
      firstName: "Shan",
      lastName: "Siddiqui",
      teamTitle: "Web Developer",
      teamImage: shan,
      linkedin: "https://www.linkedin.com/in/ssiddiqui007",
      gitHub: "https://github.com/shansiddiqui94",
    },
    {
      firstName: "David",
      lastName: "Espinal",
      teamTitle: "Web Developer",
      teamImage: david,
      linkedin: "https://www.linkedin.com/in/david-espinal-28b91a1b7/",
      gitHub: "https://github.com/DEsp04",
    },
  ];
  return (
   
    <Layout>
       
      {/* <main className="py-10"> */}
        <div className="py-32 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div>
            <h2 className="text-center text-iv font-semibold">What is Beveraholic?</h2>
            <p className="text-center pt-5">
              Beveraholic is an enjoyable web application that allows users to
              add and find their favorite alcoholic/non-alcoholic beverages.
              Users will be able to pick and make the most popular and tastiest
              drinks in the world. Each beverage item will have an image, name,
              and alcoholic content level as well as a view button with
              preparation steps.
            </p>
            <br></br>
            <h1 className="text-center text-xxxl font-semibold">The Team:</h1>
            <br></br>
            <div className="flex justify-center items-center flex-wrap mb-16">
              <br />
              {team.map((member) => {
                return (
                  <div className="text-center rounded-md px-4 m-1 p-2 bg-vin-rouge-500 md:mx-10 mx-0">
                    <img
                      className="h-40 w-auto rounded-none 100%"
                      src={member.teamImage}
                      alt=""
                    />
                    <p className="teamname mt-2 font-bold text-spring-wood-500">{`${member.firstName} ${member.lastName}`}</p>
                    <p className="title text-spring-wood-500">{member.teamTitle}</p>
                    <div className="mt-4 mb-4 flex flex-row justify-around">
                      <a href={member.linkedin}>
                        <img
                          className="h-12
                      w-12"
                          src={linkedin}
                          alt={member.linkedIn}
                        />
                      </a>
                      <a href={member.gitHub}>
                        <img
                          className="h-12 w-12"
                          src={github}
                          alt={member.gitHub}
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* </main> */}
        
    </Layout>
  );
}
