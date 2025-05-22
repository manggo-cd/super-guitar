
import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Frusciante",
      role: "Red Hot Chili Peppers",
      quote: "I was just playing in my garage when suddenly all my furniture started floating. SuperGuitar has completely changed my relationship with physics!",
      avatar: "https://1520arts.org/wp-content/uploads/2012/03/john228.jpg"
    },
    {
      name: "Stephen Carpenter",
      role: "Deftones",
      quote: "I used SuperGuitar at my last concert and the entire audience reported shared hallucinations of cosmic galaxies. My ticket sales have tripled!",
      avatar: "https://guitar.com/wp-content/uploads/2023/04/stephen-carpenter-deftones@2000x1500-1068x801.jpg"
    },
    {
      name: "Rei",
      role: "Singer/Songwriter",
      quote: "I was skeptical until I played a D minor and accidentally slowed down time in my classroom. My 30-minute lessons now last for hours of practice time!",
      avatar: "https://cdn.mos.cms.futurecdn.net/XDCW2avoTumbSQrdH2wsNG-1200-80.jpg"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supernatural Experiences</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Hear from people whose lives have been transformed by 
            the magical powers of SuperGuitar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.quote}</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-yellow-400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
