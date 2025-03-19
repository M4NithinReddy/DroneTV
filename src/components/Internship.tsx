import React from 'react';
import { Trophy, MapPin, CheckCircle, AlertCircle, Camera, Video, FileEdit, Edit2, Clock, Users, Award, Globe, FileCheck, ClipboardCheck, UserCheck, Building, Tv, Utensils, ArrowRight } from 'lucide-react';

interface InternshipProps {
  internshipsRef: React.RefObject<HTMLDivElement>;
  selectedRole: string | null;
  setSelectedRole: (role: string | null) => void;
  handleInternshipApplication: () => void;
}

export const Internship: React.FC<InternshipProps> = ({ 
  internshipsRef, 
  selectedRole, 
  setSelectedRole,
  handleInternshipApplication 
}) => {
  const internshipRoles = [
    {
      id: 'photography',
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography Intern',
      description: 'Capture stunning aerial and event shots',
      requirements: ['Experience with DSLR cameras', 'Basic drone piloting skills', 'Adobe Lightroom proficiency'],
      duration: '3 months',
      selectionProcess: [
        'Portfolio Review',
        'Technical Assessment',
        'Interview with Photography Team',
        'Practical Test Shoot'
      ]
    },
    {
      id: 'videography',
      icon: <Video className="w-8 h-8" />,
      title: 'Videography Intern',
      description: 'Record high-quality footage of drones in action',
      requirements: ['Video production experience', 'Drone cinematography skills', 'Adobe Premiere Pro knowledge'],
      duration: '4 months',
      selectionProcess: [
        'Video Reel Review',
        'Technical Skills Assessment',
        'Interview with Video Team',
        'Sample Project'
      ]
    },
    {
      id: 'content',
      icon: <FileEdit className="w-8 h-8" />,
      title: 'Content Creator',
      description: 'Write articles, blog posts, and social media content',
      requirements: ['Strong writing skills', 'SEO knowledge', 'Social media management experience'],
      duration: '3 months',
      selectionProcess: [
        'Writing Sample Review',
        'SEO Knowledge Test',
        'Editorial Team Interview',
        'Content Creation Task'
      ]
    },
    {
      id: 'editor',
      icon: <Edit2 className="w-8 h-8" />,
      title: 'Video Editor',
      description: 'Edit drone expo footage for Drone TV\'s audience',
      requirements: ['Advanced video editing skills', 'Motion graphics experience', 'Strong storytelling ability'],
      duration: '4 months',
      selectionProcess: [
        'Editing Portfolio Review',
        'Technical Skills Test',
        'Post-Production Team Interview',
        'Sample Edit Project'
      ]
    }
  ];

  const selectionStages = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Initial Application Review",
      description: "Submit your portfolio and previous work samples for preliminary evaluation"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Technical Assessment",
      description: "Demonstrate your skills through role-specific technical challenges"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Expo Performance Evaluation",
      description: "Final selection based on hands-on performance during the three-day Drone Expo"
    }
  ];

  const hyderabadFocus = [
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Organization Coverage',
      description: 'Cover events and projects by IPAGE UM Services, India Drone Academy, DroneTV, and Dev\'s Foundation'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Real-time Projects',
      description: 'Work on drone services, media production, and social initiatives'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Government & Corporate',
      description: 'Assist in government projects and corporate collaborations'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Media Production',
      description: 'Contribute to live events, promotional campaigns, and media production'
    }
  ];

  const expoSelectionDetails = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Hands-on Experience',
      description: 'Showcase your skills through practical demonstrations'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Content Creation',
      description: 'Shoot, edit, and create engaging content at the expo'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Performance-based',
      description: 'Selection based on practical output rather than interviews'
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Event Support',
      description: 'Food and snacks provided during the event'
    }
  ];

  const equipmentSupport = [
    'Rent necessary equipment for the expo duration',
    'Company will cover all rental costs',
    'Access professional-grade drones and cameras',
    'Technical support and training provided'
  ];

  const importantNotes = [
    'Your portfolio and previous work experience will be key factors in the initial selection',
    'Final selection will be based on your practical performance during the expo',
    'Top performers will be offered internship positions immediately after the expo',
    'Selected candidates MUST attend all three days of the Drone Expo',
    'Equipment rental costs will be covered by the company for selected candidates'
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Industry Network',
      description: 'Work closely with drone industry professionals and build valuable connections'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Portfolio Development',
      description: 'Build a professional portfolio with real-world project experience'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Hands-on Experience',
      description: 'Gain practical experience with industry-grade drones and equipment'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Exposure',
      description: 'Work on international drone events and gain worldwide visibility'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Schedule',
      description: 'Balance your studies with practical work experience'
    }
  ];

  return (
    <section ref={internshipsRef} className="py-20 px-4 bg-[#FFE135]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Join the Drone Expo Internship Program!</h2>
          <div className="bg-[#FF3B3B] text-white py-3 px-6 rounded-full inline-flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-[#FFE135]" />
            <span className="text-xl font-bold">Win Cash Prizes up to ₹10,000!</span>
          </div>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Showcase your skills at the Hyderabad Drone Expo and get a chance to win exciting cash prizes
            while securing your dream internship!
          </p>
        </div>

        {/* Selection Process Overview - Single Card Layout */}
        <div className="bg-black p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-4xl font-bold text-[#FFE135] mb-8">Selection Process Overview</h2>
          
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <FileCheck className="w-8 h-8 text-[#FFE135]" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Initial Application Review</h3>
                  <p className="text-gray-300">Submit your portfolio and previous work samples for preliminary evaluation</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <ArrowRight className="hidden md:block absolute -left-8 text-[#FFE135] w-16 h-16" />
              <div className="bg-[#1A1A1A] p-6 rounded-lg w-full">
                <div className="flex items-start gap-4">
                  <UserCheck className="w-8 h-8 text-[#FFE135]" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Expo Performance Evaluation</h3>
                    <p className="text-gray-300">Final selection based on hands-on performance during the three-day Drone Expo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Requirements */}
          <div className="bg-[#FF3B3B] p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Important Requirements
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Selected candidates MUST attend all three days of the Drone Expo</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Equipment rental costs will be covered by the company for selected candidates</span>
              </li>
            </ul>
          </div>

          {/* Equipment Support */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-[#FFE135] mb-4">Equipment Support</h3>
            <p className="text-gray-300 mb-4">Don't have professional equipment? No problem! Selected candidates can:</p>
            <ul className="space-y-3">
              {equipmentSupport.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFE135] flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Notes */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#FFE135] mb-4">Important Notes</h3>
            <ul className="space-y-3">
              {importantNotes.map((note, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFE135] flex-shrink-0" />
                  <span className="text-gray-300">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hyderabad Branch Focus */}
        <div className="bg-black text-white p-8 rounded-xl shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-[#FFE135]" />
            <h3 className="text-2xl font-bold text-[#FFE135]">Internship Focus: Hyderabad Branch</h3>
          </div>
          <div className="bg-[#222] p-6 rounded-lg mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-[#FFE135]" />
              <h4 className="font-bold text-lg">Participate & Win</h4>
            </div>
            <p className="text-gray-300 mb-4">
              Top performers at the expo stand a chance to win cash prizes:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FFE135] rounded-full"></div>
                <span>First Prize: ₹10,000</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FFE135] rounded-full"></div>
                <span>Second Prize: ₹7,500</span>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hyderabadFocus.map((focus, index) => (
              <div key={index} className="bg-[#222] p-6 rounded-lg">
                <div className="text-[#FFE135] mb-3">{focus.icon}</div>
                <h4 className="font-bold mb-2">{focus.title}</h4>
                <p className="text-sm text-gray-300">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Roles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {internshipRoles.map((role) => (
            <div 
              key={role.id} 
              className={`bg-black text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer ${
                selectedRole === role.id ? 'ring-2 ring-[#FF3B3B]' : ''
              }`}
              onClick={() => setSelectedRole(role.id)}
            >
              <div className="text-[#FFE135] mb-4">{role.icon}</div>
              <h3 className="text-xl font-bold mb-2">{role.title}</h3>
              <p className="text-gray-300 mb-4">{role.description}</p>
              <div className="space-y-2">
                <p className="font-semibold text-[#FFE135]">Requirements:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {role.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#FFE135] rounded-full" />
                      {req}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-300 mt-2">
                  Duration: {role.duration}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Role-specific Selection Process */}
        {selectedRole && (
          <div className="bg-black text-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-[#FFE135]">Role-Specific Selection Process</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {internshipRoles.find(role => role.id === selectedRole)?.selectionProcess.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFE135] rounded-full flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits Section */}
        <div className="bg-black text-white p-8 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-[#FFE135]">Internship Benefits</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-[#FFE135]">{benefit.icon}</div>
                <div>
                  <h4 className="font-bold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={handleInternshipApplication}
            className="inline-block bg-[#FF3B3B] hover:bg-[#FF0000] text-white px-8 py-3 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};