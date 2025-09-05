'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ReservationData } from '@/types/menu';

const ReservationForm = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: 2,
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ];

  const partySizes = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleInputChange = (field: keyof ReservationData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('Reservation request submitted successfully! We will contact you within 24 hours to confirm your booking.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: 2,
        specialRequests: '',
      });
    } catch (error) {
      setSubmitMessage('There was an error submitting your reservation. Please call us directly at +212 524-123-456.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-gray-900">
          Make a Reservation
        </CardTitle>
        <p className="text-gray-600 text-center">
          Reserve your table for an authentic Mexican dining experience
        </p>
      </CardHeader>
      <CardContent>
        {submitMessage && (
          <div className={`mb-6 p-4 rounded-lg ${
            submitMessage.includes('error') 
              ? 'bg-red-50 text-red-800 border border-red-200' 
              : 'bg-green-50 text-green-800 border border-green-200'
          }`}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="mt-1"
                placeholder="+212 6XX-XXXXXX"
              />
            </div>
            <div>
              <Label htmlFor="partySize">Party Size *</Label>
              <Select value={formData.partySize.toString()} onValueChange={(value) => handleInputChange('partySize', parseInt(value))}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select party size" />
                </SelectTrigger>
                <SelectContent>
                  {partySizes.map((size) => (
                    <SelectItem key={size} value={size.toString()}>
                      {size} {size === 1 ? 'person' : 'people'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Preferred Date *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                required
                min={minDate}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="time">Preferred Time *</Label>
              <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => handleInputChange('specialRequests', e.target.value)}
              className="mt-1"
              rows={3}
              placeholder="Any dietary restrictions, special occasions, or other requests..."
            />
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Reservation Request'}
            </Button>
          </div>

          <div className="text-sm text-gray-600 text-center">
            <p>
              * Required fields. We'll contact you within 24 hours to confirm your reservation.
            </p>
            <p className="mt-1">
              For immediate assistance, call us at{' '}
              <a href="tel:+212524123456" className="text-red-600 font-medium">
                +212 524-123-456
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReservationForm;