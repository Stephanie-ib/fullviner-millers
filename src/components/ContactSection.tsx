import { Clock, Mail, MapPin, Phone, CheckCircle, X, AlertCircle } from "lucide-react";
import { useState } from "react";
//import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowSuccess(true);
      
      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setShowError(true);
      
      // Auto-hide error notification after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeNotification = (type: 'success' | 'error') => {
    if (type === 'success') {
      setShowSuccess(false);
    } else {
      setShowError(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 relative">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50" style={{
          animation: 'slideInRight 0.3s ease-out'
        }}>
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold">Message Sent Successfully!</p>
              <p className="text-sm opacity-90">We'll get back to you soon.</p>
            </div>
            <button
              onClick={() => closeNotification('success')}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {showError && (
        <div className="fixed top-4 right-4 z-50" style={{
          animation: 'slideInRight 0.3s ease-out'
        }}>
          <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold">Failed to Send Message</p>
              <p className="text-sm opacity-90">Please try again later.</p>
            </div>
            <button
              onClick={() => closeNotification('error')}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Ready to partner with us or learn more about our agricultural products? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Phone className="h-5 w-5 text-green-600 mr-3" />
                <span>+234 803 241 3264</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Mail className="h-5 w-5 text-green-600 mr-3" />
                <span>fullvinemillers@gmail.com</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-green-600 mr-3" />
                <span>Flat 2, Line H, Kamazo GRA, Kaduna</span>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Business Hours</h4>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                <Clock className="h-4 w-4 text-green-600 mr-2" />
                <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                <Clock className="h-4 w-4 text-green-600 mr-2" />
                <span>Saturday: 9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                <Clock className="h-4 w-4 text-green-600 mr-2" />
                <span>Sunday: Closed</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="What is this about?"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us more about your inquiry..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;