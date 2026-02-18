import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ListingsGrid } from './components/ListingsGrid';
import { RelatedSites } from './components/RelatedSites';
import { ContactForm } from './components/ContactForm';
import { SEO } from './components/SEO';
import EmpireNetwork from './components/EmpireNetwork';
import { sampleListings } from './data/listings';
import { siteConfig } from './lib/config';
import { Users, MapPin, Calendar, Landmark, Phone, Shield, Flame, Heart, Star } from 'lucide-react';
import './index.css';

function App() {
  // Filter listings based on site type
  const filteredListings = sampleListings.filter(listing => 
    siteConfig.listingTypes.includes('all') || siteConfig.listingTypes.includes(listing.type)
  );

  const communityEvents = [
    { title: 'Kenai River Festival', date: 'June 14–15, 2025', location: 'Soldotna Creek Park', desc: 'Annual celebration of the Kenai River with live music, food vendors, and family activities.' },
    { title: 'Fourth of July Parade', date: 'July 4, 2025', location: 'Downtown Kenai', desc: 'Kenai\'s beloved Independence Day parade with floats, marching bands, and community spirit.' },
    { title: 'Silver Salmon Derby', date: 'August 9–17, 2025', location: 'Kenai Peninsula', desc: 'Compete for cash prizes in Alaska\'s premier silver salmon fishing tournament.' },
    { title: 'Borough Assembly Meeting', date: '1st & 3rd Tuesdays', location: 'Borough Admin Building', desc: 'Public meetings covering borough ordinances, budgets, and community concerns.' },
    { title: 'Winter Carnival', date: 'February 7–9, 2025', location: 'Soldotna Sports Center', desc: 'Ice sculptures, sled dog demos, snow machine races, and winter fun for all ages.' },
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero
            title="Welcome to Kenai Borough — Alaska's Premier Peninsula Community"
            subtitle="Your gateway to government services, community resources, and everything the Kenai Peninsula has to offer."
          />

          {/* Quick Stats */}
          <section className="bg-white py-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-6">
                  <Users className="mx-auto mb-3 text-blue-600" size={36} />
                  <p className="text-3xl font-bold text-gray-900">59,800</p>
                  <p className="text-gray-500 text-sm mt-1">Population</p>
                </div>
                <div className="p-6">
                  <MapPin className="mx-auto mb-3 text-blue-600" size={36} />
                  <p className="text-3xl font-bold text-gray-900">25,600</p>
                  <p className="text-gray-500 text-sm mt-1">Square Miles</p>
                </div>
                <div className="p-6">
                  <Calendar className="mx-auto mb-3 text-blue-600" size={36} />
                  <p className="text-3xl font-bold text-gray-900">1964</p>
                  <p className="text-gray-500 text-sm mt-1">Year Founded</p>
                </div>
                <div className="p-6">
                  <Star className="mx-auto mb-3 text-blue-600" size={36} />
                  <p className="text-3xl font-bold text-gray-900">#1</p>
                  <p className="text-gray-500 text-sm mt-1">Fishing Destination</p>
                </div>
              </div>
            </div>
          </section>

          {/* Local Government Links */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-4">Local Government</h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Quick access to borough services, departments, and civic resources.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Landmark size={24} />, title: 'Borough Assembly', desc: 'Meeting agendas, minutes, and elected officials directory.' },
                  { icon: <MapPin size={24} />, title: 'Planning & Zoning', desc: 'Land use permits, zoning maps, and development applications.' },
                  { icon: <Users size={24} />, title: 'Parks & Recreation', desc: 'Trails, campgrounds, sports facilities, and recreation programs.' },
                  { icon: <Shield size={24} />, title: 'Public Safety', desc: 'Emergency management, fire departments, and community safety.' },
                  { icon: <Calendar size={24} />, title: 'Tax & Finance', desc: 'Property tax info, payments, assessments, and borough budgets.' },
                  { icon: <Heart size={24} />, title: 'Health & Social Services', desc: 'Public health programs, senior services, and community assistance.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">{item.icon}</div>
                      <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Community Events */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-4">Community Events</h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Stay connected with what's happening across the Kenai Peninsula.</p>
              <div className="space-y-4">
                {communityEvents.map((event, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="bg-blue-600 text-white rounded-lg p-3 text-center min-w-[100px]">
                      <p className="text-xs font-semibold uppercase tracking-wide">{event.date.split(',')[0]?.split('–')[0]?.split(' ')[0]}</p>
                      <p className="text-lg font-bold">{event.date.split(',')[0]?.split('–')[0]?.split(' ').slice(1).join(' ')}</p>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-500 mb-1">{event.date} · {event.location}</p>
                      <p className="text-gray-600 text-sm">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Emergency Services */}
          <section className="bg-red-50 py-16 border-y border-red-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Emergency Services</h2>
              <p className="text-gray-600 text-center mb-10">Essential contacts for Kenai Peninsula Borough residents.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-red-100">
                  <Flame className="mx-auto mb-3 text-red-600" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fire Department</h3>
                  <p className="text-gray-600 text-sm mb-3">Central Emergency Services & Kenai Fire Department</p>
                  <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                    <Phone size={16} /> <span>911 or (907) 262-4792</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-red-100">
                  <Shield className="mx-auto mb-3 text-blue-600" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Alaska State Troopers</h3>
                  <p className="text-gray-600 text-sm mb-3">Soldotna Post — serving the Kenai Peninsula</p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                    <Phone size={16} /> <span>911 or (907) 262-4453</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-red-100">
                  <Heart className="mx-auto mb-3 text-pink-600" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Central Peninsula Hospital</h3>
                  <p className="text-gray-600 text-sm mb-3">Full-service hospital in Soldotna with 24/7 ER</p>
                  <div className="flex items-center justify-center gap-2 text-pink-600 font-semibold">
                    <Phone size={16} /> <span>(907) 714-4404</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ListingsGrid listings={filteredListings} />
          </div>
          
          <RelatedSites />
          <ContactForm />
          <EmpireNetwork currentSite="kenai-borough" />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
