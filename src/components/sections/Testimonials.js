const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " 5 interview and 3 offers got from KPMG & TCS AND ATLASIAN in training period.
I was already a devops engineer but joined this course to get project i joined the TCS with 90% hike and within 3 days i got offer from Atlassian with again 90 % hike over TCS."
              </span>
              <span className="person">Kumar Utkarsh</span>
              <span className="job">Placed in Atlassian</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I am Aman GOT multiple offers with 95 % hike in TCS AND ACCENTURE . 

I have joined the course with vikas sir in batch 27 live sessions conducted always on time and the knowledge here provided is multicloud and devops knowledge."
              </span>
              <span className="person">Aman Makrani</span>
              <span className="job">Placed in Accenture</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Dear Vikas, I wanted to express my sincere appreciation for the AWS Devops training conducted by Vikas. His deep knowledge, teaching style, and ability to simplify complex concepts is so good. I highly recommend your institute's AWS devops training program "
              </span>
              <span className="person">Suchandra Reddy</span>
              <span className="job">Placed in Capgemini</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
