import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

export default function Classes() {
  const heroParallaxRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Parallax scroll effect for hero image
  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const isMobile = window.innerWidth < 768;
      
      if (heroParallaxRef.current) {
        const range = isMobile ? 50 : 150; // 50px on mobile, 150px on desktop
        const rect = heroParallaxRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          setParallaxOffset(scrollProgress * range * 2 - range);
        }
      }
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateParallax(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const generalClasses = [
    {
      title: 'Power + Heat Yoga',
      temperature: '95-100°F',
      description: 'Power + Heat Yoga is a dynamic, full-body yoga practice inspired by Baron Baptiste\'s "Journey Into Power" sequence, combining strength, balance, and mindfulness in a heated room. Through intentional, breath-driven movement, you\'ll build stability and endurance while opening the body and focusing the mind. The warmth supports flexibility and detoxification, creating the perfect environment to challenge yourself, release tension, and reconnect to your inner power.'
    },
    {
      title: 'Power Yoga',
      temperature: 'Room Temperature',
      description: 'Power Yoga is a dynamic, full-body yoga practice inspired by Baron Baptiste\'s "Journey Into Power" sequence, combining strength, balance, and mindfulness in a room-temperature environment. Guided by breath and intentional movement, you\'ll build stability, endurance, and focus while opening the body and calming the mind. Without the added heat, this class emphasizes precision, control, and presence—an energizing practice that challenges you to move with purpose and tap into your inner power.'
    },
    {
      title: 'Gentle Yoga',
      temperature: 'Room Temperature',
      description: 'Gentle Yoga offers a calm, supportive space to slow down, breathe deeply, and move with ease. This class focuses on gentle stretches, simple postures, and mindful movement to release tension, improve mobility, and restore balance in the body and mind. Perfect for all ages and experience levels, Gentle Yoga invites you to reconnect with yourself through steady breath and soft, intentional motion—leaving you grounded, relaxed, and renewed.'
    },
    {
      title: 'Warm Gentle Yoga',
      temperature: '80°F',
      description: 'Warm Gentle Yoga offers the same calm, accessible experience as our traditional Gentle class, but in a comfortably warm room to help muscles relax and movement flow with ease. This soothing practice blends gentle stretches, mindful breathwork, and slow, intentional movement to release tension and improve flexibility. Ideal for all ages and experience levels, Warm Gentle Yoga provides a nurturing environment to unwind, restore, and reconnect—leaving you feeling centered, relaxed, and refreshed.'
    },
    {
      title: 'Yin + Heat Yoga',
      temperature: '95-100°F',
      description: 'Yin + Heat is a slow, meditative practice designed to release deep layers of tension and restore balance to the body and mind. In a gently heated room, postures are held for several minutes to target the connective tissues, joints, and fascia, encouraging greater mobility and stillness within. The warmth helps the body soften and open safely, allowing for a deeper sense of relaxation and presence. Perfect for all levels, Yin + Heat is the antidote to the pace of daily life—an opportunity to unwind, let go, and find ease from the inside out.'
    },
    {
      title: 'Yin + Meditation Yoga',
      temperature: 'Room Temperature',
      description: 'Yin + Meditation combines the stillness of yin yoga with the grounding practice of meditation to create space for deep physical release and mental clarity. In a comfortable, room-temperature setting, postures are held for several minutes to gently stretch and hydrate the connective tissues while calming the nervous system. Each pose flows naturally into moments of guided or silent meditation, inviting you to slow down, turn inward, and cultivate presence. Suitable for all levels, Yin + Meditation offers a restorative balance of movement and mindfulness—leaving you centered, spacious, and at ease.'
    },
    {
      title: 'Restorative Yoga',
      temperature: 'Room Temperature',
      description: 'Restorative Yoga is a deeply relaxing practice that uses props such as bolsters, blankets, and blocks to fully support the body in gentle, restful poses. With each posture held for several minutes, this class encourages complete release of muscular effort and promotes the body\'s natural capacity for healing and renewal. Guided by calm breath and quiet stillness, Restorative Yoga soothes the nervous system, reduces stress, and invites a profound sense of peace—perfect for anyone seeking rest, recovery, or balance in both body and mind.'
    },
    {
      title: 'Yoga After Dark',
      temperature: '95-100°F',
      description: 'Yoga After Dark turns up the energy with a vibrant, music-driven twist on our Power + Heat practice. Set in a heated room with dim lighting and an upbeat playlist, this class blends strength, rhythm, and flow into an electrifying experience that invites you to move, sweat, and let go. Expect the same empowering Journey Into Power sequence—just with louder beats, a playful atmosphere, and permission to have fun while you move. Yoga After Dark is where community, expression, and power meet on the mat.'
    },
    {
      title: 'Yoga for Recovery',
      temperature: '95-100°F',
      description: 'Yoga for Recovery is a free, supportive class designed to help you reconnect with strength, presence, and inner peace through mindful movement and breath. Inspired by the Journey Into Power sequence, this heated practice offers a balance of physical challenge and meditative stillness—creating space to release what no longer serves and cultivate resilience from within. Open to all levels, Yoga for Recovery provides a welcoming environment for anyone seeking healing, balance, or renewal—on and off the mat.'
    }
  ];

  return (
    <div className="bg-white font-montserrat">
      {/* Hero Header Section with Image */}
      <div ref={heroParallaxRef} className="relative bg-linear-to-b from-gray-900 to-gray-800 py-24 sm:py-32 overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 scale-110">
          <img 
            src="/images/yoga/abby-starts-class.jpg" 
            alt="Yoga class at Yoga Lab"
            className="w-full h-full object-cover opacity-40 will-change-transform"
            style={{
              transform: `translateY(${parallaxOffset}px)`
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/70 to-gray-900/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-white">DISCOVER</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Class Offerings
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              At Yoga Lab, we believe yoga is for everyone—every body, every age, every journey. 
              Our diverse offerings are designed to meet you where you are and support your growth on and off the mat.
            </p>
          </div>
        </div>
      </div>

      {/* General Class Offerings Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            General Class Offerings
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            From powerful, heat-driven flows to gentle, grounding practices and meditative yin classes, 
            each experience at Yoga Lab offers a chance to move with intention, connect with yourself, and grow in community.
          </p>
        </div>

        {/* Featured Images - Mobile-First Gallery */}
        <div className="mb-12">
          {/* Mobile: Vertical stack of full-width images */}
          <div className="flex flex-col gap-4 md:hidden">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/yoga/chair-pose-back.jpg" 
                alt="Power yoga class in chair pose"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/yoga/hot-namaste.jpg" 
                alt="Students in namaste after heated class"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/yoga/woman-warrior-one.jpg" 
                alt="Woman in warrior one pose with eyes closed"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/yoga/single-woman-childs-pose.jpg" 
                alt="Woman in child's pose"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/yoga/abby-starts-class-front-corner.jpg" 
                alt="Abby starting a yoga class from front corner view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
          
          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/yoga/chair-pose-back.jpg" 
                alt="Power yoga class in chair pose"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/yoga/hot-namaste.jpg" 
                alt="Students in namaste after heated class"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/yoga/woman-warrior-one.jpg" 
                alt="Woman in warrior one pose with eyes closed"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/images/yoga/single-woman-childs-pose.jpg" 
                alt="Woman in child's pose"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl md:col-span-2 lg:col-span-2">
              <img 
                src="/images/yoga/abby-starts-class-front-corner.jpg" 
                alt="Abby starting a yoga class from front corner view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-stretch">
          {generalClasses.map((classItem, index) => (
            <div 
              key={index}
              className="relative pl-6 font-montserrat h-full"
            >
              <div className="relative h-full flex flex-col">
                {/* Left vertical line - positioned to align with text */}
                <div className="absolute -left-6 top-0 bottom-0 w-[3px] bg-black"></div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold uppercase text-gray-900 tracking-wide">
                    {classItem.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 whitespace-nowrap ml-4">
                    {classItem.temperature}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {classItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fitness Lab Section - Bold Full Width Design */}
      <div className="bg-black text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Fitness Lab
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Created as a natural extension of Yoga Lab's mission—to help you build strength, balance, 
                and resilience both on and off the mat. Designed to complement our yoga offerings through 
                functional strength, endurance, and mobility.
              </p>
              <div className="border-l-4 border-white pl-6">
                <h3 className="text-2xl font-bold mb-4">Strength & Conditioning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Strength & Conditioning is a high-energy, full-body workout designed to build strength, endurance, 
                  and confidence through functional movement. Led by an experienced coach, this class combines weight 
                  training, cardio intervals, and bodyweight exercises for a balanced and challenging session that meets 
                  you where you are. Expect squats, lifts, and dynamic movements that improve overall fitness, mobility, 
                  and power—set to motivating music and a supportive group atmosphere.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Fitness Lab Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/images/yoga/fitness-lab-rowing-machine.jpg" 
                  alt="Fitness Lab coaching session on rowing machine"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Feature boxes below image */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">High Energy</h4>
                    <p className="text-gray-300 text-sm">Push limits and sweat hard in a motivating atmosphere</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Functional Movement</h4>
                    <p className="text-gray-300 text-sm">Build real-world strength and mobility</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Community Support</h4>
                    <p className="text-gray-300 text-sm">Feel stronger inside and out with group energy</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Masterclasses Section - Elegant Centered Design */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Masterclass Offerings
              </h2>
              <div className="h-1 w-24 bg-black mx-auto mb-6"></div>
            </div>
            <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
              An opportunity to slow down, explore, and go deeper
            </p>
          </div>
          
          {/* Masterclass Images Side by Side */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="/images/yoga/destihl-childs-pose.jpg" 
                alt="Group in child's pose at offsite masterclass location"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="/images/yoga/downward-dog.jpg" 
                alt="Class in downward facing dog"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="bg-linear-to-b from-gray-50 to-white rounded-3xl shadow-xl p-10 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              These extended 90-minute to 2-hour sessions offer space to refine your practice, learn new techniques, 
              and experience yoga beyond the scope of a regular class. Each masterclass is uniquely designed—often 
              rooted in the gentle or yin traditions, yet always open to exploration and discovery.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">90 minutes - 2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* On-Demand Section - Full Width Dark */}
      <div className="bg-linear-to-b from-gray-900 to-black text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* Kids Yoga Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src="/images/yoga/kids-girls-sitting-on-mat.jpg" 
                  alt="Young girls practicing yoga on mat"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                      </svg>
                      <p className="text-sm text-gray-300">Video Library</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-gray-300">Anytime Access</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <p className="text-sm text-gray-300">All Levels</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <p className="text-sm text-gray-300">Kids Content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                On-Demand Offerings
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our On-Demand Library brings Yoga Lab to you—anytime, anywhere. Explore a growing collection 
                of recorded yoga classes so you can move, breathe, and reset on your own schedule.
              </p>
              <p className="text-gray-400 leading-relaxed">
                You'll also find engaging, brain-based movement videos designed especially for kids, 
                helping them develop focus, coordination, and body awareness in a fun and accessible way. 
                Whether you're rolling out your mat at home or looking for mindful activities for the whole 
                family, Yoga Lab On-Demand makes practice possible whenever life calls for it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Training Section - Light Spacious Layout */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header with Featured Image */}
          <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/yoga/group-shot.jpg" 
              alt="Group of yoga students and teachers after class"
              className="w-full h-auto"
            />
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Yoga Teacher Training
              </h2>
              <p className="text-xl text-gray-600 mb-8 italic">
                More than a program to become a certified yoga instructor—it's a transformational journey 
                in leadership, self-discovery, and embodied practice.
              </p>
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  Rooted in Baron Baptiste's Journey Into Power sequence, this immersive training will deepen 
                  your understanding of alignment, sequencing, and powerful teaching, while cultivating the 
                  tools to lead with authenticity—on and off the mat. Whether your goal is to teach or simply 
                  to grow, yoga teacher training empowers you to step into your voice, your purpose, and your 
                  fullest potential.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 sticky top-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Certification</h4>
                      <p className="text-gray-600 text-sm">Become a certified yoga instructor</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84a14.98 14.98 0 012.58 5.84M15.59 14.37A14.926 14.926 0 0117.17 8.41M15.59 14.37L17.17 8.41" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Journey Into Power</h4>
                      <p className="text-gray-600 text-sm">Based on Baron Baptiste's method</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Transformation</h4>
                      <p className="text-gray-600 text-sm">Leadership & self-discovery journey</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Authenticity</h4>
                      <p className="text-gray-600 text-sm">Learn to lead on and off the mat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Welcome Image Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="/images/yoga/todd-high-five.jpg" 
              alt="Welcoming community at Yoga Lab with high fives"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-black text-white py-20">
        <div className="mx-auto max-w-2xl text-center px-6">
          <h3 className="text-3xl font-bold mb-4">Ready to Begin?</h3>
          <p className="text-gray-300 text-lg mb-8">
            Book your first class today and experience the transformative power of yoga.
          </p>
          <Link
            to="/book"
            className="inline-block rounded-full bg-white px-10 py-4 text-base font-semibold text-black shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
          >
            Book Your Class
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl text-center px-6">
          <p className="text-sm text-gray-600">
            Not sure which class is right for you? We're here to help!{' '}
            <Link to="/#contact" className="font-semibold text-gray-900 hover:text-black underline">
              Contact us
            </Link>{' '}
            with any questions or to schedule a consultation with one of our instructors.
          </p>
        </div>
      </div>
    </div>
  );
}
