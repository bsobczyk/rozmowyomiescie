import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-white p-3 mt-5" style={{ backgroundColor: '#1D3252' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Image src="/logo/proaktywni.png" alt="Logo Proaktywni" width={60} height={60} />
        </div>
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Rozmowy o mieście. Wszelkie prawa zastrzeżone.</p>
        </div>
        <div>
          <Image src="/logo/palec.png" alt="Logo Palec" width={60} height={60} className="me-2" />
          <Image src="/logo/fpz.png" alt="Logo FPZ" width={60} height={60} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
