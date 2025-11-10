import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32 font-body">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-subheading leading-7 text-black">ABOUT US</h2>
          <p className="mt-2 text-3xl font-heading tracking-tight text-gray-900 sm:text-4xl">
            People over poses. Transformation over transaction.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Yoga Lab is built on brain science and a desire for impact.
          </p>
        </div>

        {/* Founders Introduction */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 lg:items-center">
            {/* Image on the right on desktop, but first on mobile - takes up 2 columns */}
            <div className="lg:col-span-2 lg:order-2">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/images/general-photos/adam-abby-about-us.jpg" 
                  alt="Abby and Adam, founders of Yoga Lab" 
                  className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
                />
              </div>
            </div>
            {/* Text on the left on desktop, but second on mobile - takes up 3 columns */}
            <div className="lg:col-span-3 lg:order-1 prose prose-lg">
              <p className="text-xl text-gray-900 mb-8 font-semibold">
                Hi, we're Abby and Adam, the founders of the Yoga Lab.
              </p>
              <p className="text-gray-600 mb-6">
                The idea for The Lab started from two very different worlds: education and finance. I (Abby) spent years 
                working in schools, supporting teachers and caregivers with systems that help students build social and 
                emotional skills. But I noticed education didn't consider how development and context shape a person's 
                ability to actually use those skills.
              </p>
              <p className="text-gray-600 mb-6">
                At the same time, Adam was noticing similar patterns in his wealth management practice. He saw that 
                financial stress often left people stuck, unable to feel regulated or connected, which made it harder 
                to make thoughtful decisions and maintain healthy relationships.
              </p>
              <p className="text-gray-600 mb-6">
                We both realized that real change starts when we understand how our brains are designed. Through my 
                training in Bruce Perry's Neurosequential Model for Education (NME), I learned that the brain develops 
                and functions in a sequence: regulate, relate, reason. That concept became the foundation for the Yoga Lab.
              </p>
            </div>
          </div>
        </div>

        {/* How Our Space Works */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-16">
            <h3 className="text-2xl font-heading text-gray-900 mb-8 text-center">
              Our space is designed around how the brain works.
            </h3>
            <div className="space-y-6 text-center">
              <p className="text-lg text-gray-800">
                <span className="font-bold">Yoga Lab</span> helps people regulate — to move, breathe, and rest.
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-bold">Lab Coffee</span> gives people a reason to stay, connect, and relate.
              </p>
              <p className="text-lg text-gray-800">
                You go out into the world and <span className="font-bold">transform each and every interaction</span> into one of connection and possibility.
              </p>
              <p className="text-lg text-gray-700 mt-8 italic">
                When we're regulated and connected, our brains are ready to reason and create meaningful change.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              We see you juggling work, family, and life, feeling disconnected and stressed. The Yoga Lab exists to 
              create the conditions for the antidote to dysregulating stress, regulation and connection. We are a place 
              where regulation and relationships come first so you can show up at your best for the people you lead and love.
            </p>
            <p className="text-gray-600">
              At the Yoga Lab, we focus on transformation, not transactions. We're here to support real people, not just 
              perfect poses. We want you to feel grounded, connected, and ready to do the work you love: in the studio, 
              at home, and in the community.
            </p>
          </div>
        </div>

        {/* Teacher Team Gallery */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-2xl font-heading text-gray-900 mb-8 text-center">Our Teacher Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/berendt-jill.jpg" 
                alt="Jill Berendt" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Jill Berendt</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/bradshaw-rhendy.jpg" 
                alt="Rhendy Bradshaw" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Rhendy Bradshaw</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/busby-liv.jpg" 
                alt="Liv Busby" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Liv Busby</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/cotton-mikayla.jpg" 
                alt="Mikayla Cotton" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Mikayla Cotton</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/fry-alexis.jpg" 
                alt="Alexis Fry" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Alexis Fry</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/ghantous-abby.jpg" 
                alt="Abby Ghantous" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Abby Ghantous</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/ghantous-adam.jpg" 
                alt="Adam Ghantous" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Adam Ghantous</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/hice-cynthia.jpg" 
                alt="Cynthia Hice" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Cynthia Hice</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/hundley-david.jpg" 
                alt="David Hundley" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">David Hundley</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/hundley-maggie.jpg" 
                alt="Maggie Hundley" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Maggie Hundley</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/kaeb-tara.jpg" 
                alt="Tara Kaeb" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Tara Kaeb</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/miller-becca.jpg" 
                alt="Becca Miller" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Becca Miller</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/padilla-deidra.jpg" 
                alt="Deidra Padilla" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Deidra Padilla</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/painter-chad.jpg" 
                alt="Chad Painter" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Chad Painter</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/rusk-melissa.jpg" 
                alt="Melissa Rusk" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Melissa Rusk</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/smith-caitlin.jpg" 
                alt="Caitlin Smith" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Caitlin Smith</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/smith-todd.jpg" 
                alt="Todd Smith" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Todd Smith</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/webster-sylvia.jpg" 
                alt="Sylvia Webster" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Sylvia Webster</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/yl-teacher-team/wells-rachel.jpg" 
                alt="Rachel Wells" 
                className="w-full h-auto rounded-2xl mb-2"
              />
              <p className="text-sm font-semibold text-gray-900">Rachel Wells</p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-heading text-gray-900 mb-4">Visit Us</h3>
            <p className="text-lg text-gray-700 mb-2">207 S. Prospect Road, Suite 2</p>
            <p className="text-lg text-gray-700 mb-6">Bloomington, IL 61704</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/classes"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
              >
                Explore Yoga Classes
              </Link>
              <Link
                to="/coffee"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50 transition-colors"
              >
                Visit Lab Coffee
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
