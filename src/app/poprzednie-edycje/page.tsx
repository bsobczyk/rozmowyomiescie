import EventCard from '@/components/EventCard';
import Image from 'next/image';

const PreviousEditionsPage = () => {
  const images_11092025 = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.jpeg', '6.jpeg'];

  const pastEvents = [
    {
      title: "Rozmowy o Mieście: Budżet Obywatelski i Rady Dzielnic",
      date: "11 września 2025",
      guest: "Paneliści: Agnieszka Sienkiewicz-Ćwik, Wiesław Bełz, Piotr Ziegler",
      imageUrl: "/11092025/1.JPG",
      description: (
        <>
          <p>W zeszłym tygodniu odbyło się spotkanie "Rozmowy o Mieście", zorganizowane przez Stowarzyszenie ProAktywni we współpracy z Fabryką Pełną Życia, poświęcone kluczowym mechanizmom partycypacji w Dąbrowie Górniczej.</p>

          <h5 className="mt-3">Uczestnicy i Tematyka</h5>
          <p>Spotkanie zgromadziło licznych mieszkańców oraz ekspertów. W dyskusji panelowej wzięli udział: Agnieszka Sienkiewicz-Ćwik, Wiesław Bełz i Piotr Ziegler. Głównym celem debaty była refleksja nad dwoma kluczowymi elementami demokracji lokalnej:</p>
          <ul>
            <li><b>Budżet Obywatelski:</b> Jak realnie zwiększyć zaangażowanie mieszkańców?</li>
            <li><b>Rady Osiedli/Dzielnic:</b> Jak przełamać impas prawny i reaktywować ten mechanizm?</li>
          </ul>

          <h5 className="mt-3">Dlaczego Te Tematy Są Ważne?</h5>
          <p>Konieczność podjęcia działań potwierdziły najnowsze dane z Budżetu Obywatelskiego, gdzie po raz pierwszy odnotowano spadek frekwencji (o 777 osób mniej). To sygnał, że dotychczasowe metody angażowania mieszkańców się wyczerpują.</p>
          
          <h6>Budżet Obywatelski</h6>
          <p>Spadek frekwencji zagraża idei powszechnej partycypacji i pokazuje, że BO musi stać się narzędziem, które realnie wzmacnia sprawczość dąbrowian.</p>

          <h6>Rady Dzielnic</h6>
          <p>Rady są kluczem do demokracji oddolnej. Mimo pozytywnej opinii NSA z 2021 roku, wciąż nie funkcjonują. Konieczne jest szybkie podjęcie decyzji przez nową Radę Miejską, aby dać mieszkańcom realny wpływ na ich otoczenie.</p>
          
          <p className="mt-3">Spotkanie było początkiem ważnej dyskusji o przyszłości miasta i konieczności wzmocnienia dialogu na linii Urząd Miejski – Mieszkańcy.</p>

          <h5 className="mt-4">Galeria:</h5>
          <div className="d-flex flex-wrap gap-2">
            {images_11092025.map(img => (
              <Image key={img} src={`/11092025/${img}`} alt={`Zdjęcie z wydarzenia ${img}`} width={150} height={150} className="img-thumbnail" style={{objectFit: 'cover'}} />
            ))}
          </div>
        </>
      )
    }
  ];

  return (
    <div>
      <h1 className="mb-4">Poprzednie edycje</h1>
      <p className="mb-5">Archiwum spotkań z cyklu "Rozmowy o mieście".</p>
      {
        pastEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))
      }
    </div>
  );
};

export default PreviousEditionsPage;