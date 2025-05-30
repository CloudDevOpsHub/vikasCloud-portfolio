const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/vk.png" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Vikas From
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                CloudDevopsHub
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Age :</span>
                    <span>33 Years</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nationality :</span>
                    <span>Indian</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Langages :</span>
                    <span>English</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Address :</span>
                    <span>Bangalore</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Whatsapp :</span>
                    <span>+91-9993445100</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>clouddevopshub@gamil.com</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Linkedin :</span>
                    <span>CloudDevopsHub</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
     {/* SKILLS STARTS */}
<div className="skills flex-column-mobile">
  {/* TITLE STARTS */}
  <div className="custom-title">
    <h3>
      <span>
        <span className="animated-layer fade-in-left-animation fadeInUp wow">
          My Skills
        </span>
      </span>
    </h3>
  </div>
  {/* TITLE ENDS */}
  <div className="skills-content">
    <div>
      {/* SKILL ITEM STARTS */}
      <div className="animated-layer fade-in-down-animation fadeInLeft wow">
        <span>
          <i className="devicon-amazonwebservices-original" />
        </span>
        <h4>AWS</h4>
      </div>
      {/* SKILL ITEM ENDS */}
      <div className="animated-layer fade-in-up-animation fadeInRight wow">
        <span>
          <i className="devicon-docker-plain" />
        </span>
        <h4>Docker</h4>
      </div>
    </div>

    <div>
      <div className="animated-layer fade-in-down-animation fadeInLeft wow">
        <span>
          <i className="devicon-googlecloud-plain" />
        </span>
        <h4>GCP</h4>
      </div>
      <div className="animated-layer fade-in-up-animation fadeInRight wow">
        <span>
          <i className="devicon-kubernetes-plain" />
        </span>
        <h4>Kubernetes</h4>
      </div>
    </div>

    <div>
      <div className="animated-layer fade-in-down-animation fadeInLeft wow">
        <span>
          <i className="devicon-azure-plain" />
        </span>
        <h4>Azure</h4>
      </div>
      <div className="animated-layer fade-in-up-animation fadeInRight wow">
        <span>
         
            <i className="devicon-illustrator-plain" />
          
        </span>
        <h4>AI</h4>
      </div>
    </div>

    <div>
      <div className="animated-layer fade-in-down-animation fadeInLeft wow">
        <span>
          <i className="devicon-linux-plain" />
        </span>
        <h4>Linux</h4>
      </div>
      <div className="animated-layer fade-in-up-animation fadeInRight wow">
        <span>
          <i className="devicon-ansible-plain" />
        </span>
        <h4>Ansible</h4>
      </div>
    </div>

    {/* NEW SKILL ROW */}
    

    <div>
      <div className="animated-layer fade-in-down-animation fadeInLeft wow">
        <span>
          <i className="devicon-jenkins-plain" />
        </span>
        <h4>Jenkins</h4>
      </div>
      <div className="animated-layer fade-in-up-animation fadeInRight wow">
        <span>
         
            
            <i class="devicon-terraform-plain"></i>
          
          
         </span>
        <h4>Terraform</h4>
      </div>
    </div>
  </div>
</div>
{/* SKILLS ENDS */}

      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                My Experience
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Cloud & DevOps Architect</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2022 - Now</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>PWC</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>CLoud Consultant</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2018 - 2022</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Bank of America</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Web Developer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2010 - 2015</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Facebook</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Master Degree</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2003</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>London University</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Bachelor Degree</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>1999</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Berlin High School</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
