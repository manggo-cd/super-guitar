
import React from "react";
import { Music, Star, Headphones, Volume2 } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Music className="h-8 w-8 text-primary" />,
      title: "Telekinetic Amplification",
      description: "Move objects with your mind while playing powerful riffs. The intensity corresponds directly to your musical passion."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Emotion Manipulation",
      description: "Control the emotions of anyone listening to your music. Turn sadness to joy with just a chord progression."
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "Time Distortion",
      description: "Slow down or speed up time around you by changing your tempo. Perfect for tight deadlines or savoring moments."
    },
    {
      icon: <Volume2 className="h-8 w-8 text-primary" />,
      title: "Reality Bending",
      description: "Create visual hallucinations that everyone can see by playing specific sequences. Your music creates your reality."
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Magical Abilities Unlocked</h2>
          <p className="text-gray-600 text-lg">
            SuperGuitar grants you powers beyond imagination. Each feature has been meticulously designed 
            to enhance your supernatural experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
