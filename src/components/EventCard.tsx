
import Image from 'next/image';
import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  guest: string;
  imageUrl: string;
  description: React.ReactNode;
}

const EventCard = ({ title, date, guest, imageUrl, description }: EventCardProps) => {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4">
          <Image src={imageUrl} className="img-fluid rounded-start" alt={`Zdjęcie gościa: ${guest}`} width={400} height={400} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><small className="text-muted">{date}</small></p>
            <p className="card-text"><strong>Gość: {guest}</strong></p>
            <div className="card-text">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
