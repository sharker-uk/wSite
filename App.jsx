import React from 'react';

const FamilyMember = ({ name, role }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-slate-800">{name}</h3>
    <p className="text-slate-500 mt-1">{role || 'Family Member'}</p>
    <div className="mt-4 h-1 w-10 bg-blue-500 rounded-full"></div>
  </div>
);

function App() {
  const family = ["Steve", "Jenny", "Samuel", "Johanna", "Liberty"];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight text-slate-900">HarkerFamily.uk</span>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
            {family.map(name => (
              <a key={name} href={`#${name.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
                {name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 bg-gradient-to-b from-white to-slate-50 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
          The Harker Family
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Welcome to our small corner of the internet. We're glad you're here.
        </p>
      </header>

      {/* Family Members Grid */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {family.map((name) => (
            <section id={name.toLowerCase()} key={name}>
              <FamilyMember name={name} />
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-10 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} harkerfamily.uk</p>
      </footer>
    </div>
  );
}

export default App;