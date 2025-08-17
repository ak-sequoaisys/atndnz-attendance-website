import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { 
  Smartphone, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  TrendingUp, 
  Bell, 
  Heart,
  CheckCircle,
  Star,
  Download,
  ExternalLink,
  Apple,
  Menu
} from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/atndnz-logo.png" 
                alt="Atndnz Logo"
                className="h-16 sm:h-20 md:h-24 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextEl) nextEl.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }}>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Atndnz</h1>
                  <p className="text-sm text-gray-500">Smart Attendance Management</p>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://atndnz.offrd.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-800 font-medium"
              >
                Login
              </a>
              <a 
                href="https://atndnz.offrd.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-800 font-medium"
              >
                Register
              </a>
              <a 
                href="https://www.offrd.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-800 font-medium flex items-center space-x-1"
              >
                <span>Visit Offrd</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="flex space-x-2">
                <Button asChild className="bg-slate-800 hover:bg-slate-900">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.offrd.atndnz&utm_source=na_Med"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Google Play
                  </a>
                </Button>
                <Button asChild className="bg-slate-800 hover:bg-slate-900">
                  <a 
                    href="https://apps.apple.com/us/app/atndnz/id6736938329"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Apple className="w-4 h-4 mr-2" />
                    App Store
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-6">
                    <a 
                      href="https://atndnz.offrd.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 font-medium text-lg py-2"
                    >
                      Login
                    </a>
                    <a 
                      href="https://atndnz.offrd.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 font-medium text-lg py-2"
                    >
                      Register
                    </a>
                    <a 
                      href="https://www.offrd.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 font-medium text-lg py-2 flex items-center space-x-2"
                    >
                      <span>Visit Offrd</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="space-y-3">
                        <Button asChild className="w-full bg-slate-800 hover:bg-slate-900">
                          <a 
                            href="https://play.google.com/store/apps/details?id=com.offrd.atndnz&utm_source=na_Med"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2"
                          >
                            <Download className="w-4 h-4" />
                            <span>Google Play</span>
                          </a>
                        </Button>
                        <Button asChild className="w-full bg-slate-800 hover:bg-slate-900">
                          <a 
                            href="https://apps.apple.com/us/app/atndnz/id6736938329"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2"
                          >
                            <Apple className="w-4 h-4" />
                            <span>App Store</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/office-workers.jpg" 
            alt="Modern office workers collaborating in an open workspace"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1920x1080/png";
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Next-Gen Attendance Management
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your
              <span className="text-slate-300"> Workforce </span>
              Management
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Revolutionary GPS-based attendance tracking that works seamlessly for office, remote, and field teams. 
              Protect privacy while ensuring accurate attendance with smart geofencing technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.offrd.atndnz&utm_source=na_Med"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-slate-800 hover:bg-gray-100 transition-colors duration-200 rounded-md"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Google Play
                </a>
                <a 
                  href="https://apps.apple.com/us/app/atndnz/id6736938329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-slate-800 hover:bg-gray-100 transition-colors duration-200 rounded-md"
                >
                  <Apple className="w-5 h-5 mr-2" />
                  App Store
                </a>
              </div>
              <a 
                href="https://www.offrd.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium border-2 border-white text-white hover:bg-white hover:text-slate-800 transition-colors duration-200 rounded-md"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>100+ Downloads</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Enterprise Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Work Environment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional offices to remote teams and field operations, Atndnz adapts to your unique workflow.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <a href="/office-teams.html" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 block">
              <img 
                src="/team-meeting.jpg" 
                alt="Professional team meeting in modern office"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x200/png";
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Office Teams</h3>
                <p className="text-gray-600 mb-4">
                  Seamless attendance tracking for traditional office environments with smart geofencing and automatic check-ins.
                </p>
                <div className="flex items-center text-sm text-slate-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>GPS-based office detection</span>
                </div>
              </div>
            </a>

            <a href="/remote-teams.html" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 block">
              <img 
                src="/remote-work.jpg" 
                alt="Person working remotely with laptop"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x200/png";
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Remote Workers</h3>
                <p className="text-gray-600 mb-4">
                  Flexible attendance management for remote teams with privacy-first location tracking and time management.
                </p>
                <div className="flex items-center text-sm text-slate-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Flexible time tracking</span>
                </div>
              </div>
            </a>

            <a href="/field-sales.html" className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 block">
              <img 
                src="/field-sales.jpg" 
                alt="Field sales representative working outdoors"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x200/png";
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Field Sales</h3>
                <p className="text-gray-600 mb-4">
                  Mobile attendance tracking for field teams with location verification and client visit logging.
                </p>
                <div className="flex items-center text-sm text-slate-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Multi-location support</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Workforces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage attendance across office, remote, and field teams with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-xl">GPS-Based Tracking</CardTitle>
                <CardDescription className="text-gray-600">
                  Accurate location-based attendance with smart geofencing that respects privacy boundaries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-xl">Smart Office Detection</CardTitle>
                <CardDescription className="text-gray-600">
                  Automatically detects when employees enter and leave the office during work hours.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-xl">Remote & Field Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Perfect for remote workers and field sales teams with flexible attendance options.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-xl">Smart Reminders</CardTitle>
                <CardDescription className="text-gray-600">
                  Never forget to log in or out with intelligent reminder notifications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-xl">Employee Wellness</CardTitle>
                <CardDescription className="text-gray-600">
                  Monitor employee emotions and satisfaction to maintain a healthy workplace.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-xl">Leave Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive leave tracking and management system integrated with attendance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-slate-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy-First Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your location data stays private and is never tracked outside designated work areas. 
              We believe in protecting employee privacy while maintaining accurate attendance records.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Data</h3>
                <p className="text-gray-600">All data encrypted and stored securely</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Geofenced Areas</h3>
                <p className="text-gray-600">Location tracking only in work zones</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Meets all privacy regulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Attendance Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using Atndnz to streamline their workforce management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-slate-800 hover:bg-gray-100">
              <a 
                href="https://play.google.com/store/apps/details?id=com.offrd.atndnz&utm_source=na_Med"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Google Play</span>
              </a>
            </Button>
            <Button size="lg" asChild className="bg-white text-slate-800 hover:bg-gray-100">
              <a 
                href="https://apps.apple.com/us/app/atndnz/id6736938329"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Apple className="w-5 h-5" />
                <span>App Store</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/atndnz-logo.png" 
                  alt="Atndnz Logo"
                  className="h-8 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = 'flex';
                  }}
                />
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center" style={{ display: 'none' }}>
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Atndnz</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Next-generation attendance management for modern workforces.
              </p>
              <p className="text-sm text-gray-500">
                Powered by{' '}
                <a 
                  href="https://www.offrd.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-300"
                >
                  offrd.co
                </a>
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>GPS-Based Tracking</li>
                <li>Smart Office Detection</li>
                <li>Remote Work Support</li>
                <li>Leave Management</li>
                <li>Employee Wellness</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <div className="space-y-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.offrd.atndnz&utm_source=na_Med"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors duration-200 rounded-md"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Google Play Store
                </a>
                <a 
                  href="https://apps.apple.com/us/app/atndnz/id6736938329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors duration-200 rounded-md"
                >
                  <Apple className="w-4 h-4 mr-2" />
                  Apple App Store
                </a>
                <a 
                  href="https://www.offrd.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors duration-200 rounded-md"
                >
                  Visit Offrd Platform
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Atndnz. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Powered by{' '}
              <a 
                href="https://www.offrd.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-300"
              >
                offrd.co
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
