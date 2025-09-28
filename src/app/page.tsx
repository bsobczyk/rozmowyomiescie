import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Rozmowy o mieście <br /> Spotkanie z Janem Śpiewakiem</h1>
          <p className="col-md-8 fs-4">Zapraszamy na wyjątkowe spotkanie z Janem Śpiewakiem w ramach cyklu „Rozmowy o mieście”, które odbędzie się 19 października w Dąbrowie Górniczej!</p>
          <p><i className="bi bi-calendar-event"></i> <strong>Data:</strong> 19 Październik</p>
          <p><i className="bi bi-clock"></i> <strong>Godzina:</strong> 16:00</p>
          <p><i className="bi bi-geo-alt"></i> <strong>Miejsce:</strong> Fabryka Pełna Życia</p>
        </div>
      </div>

      {/* Guest Info */}
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white rounded-3" style={{ backgroundColor: '#1D3252' }}>
            <h2>Gość specjalny</h2>
            <div>
              <div style={{ float: 'left', marginRight: '15px', marginBottom: '15px' }}>
                <Image src="/19102025/js.jpg" alt="Jan Śpiewak" width={250} height={170} />
              </div>
              <p><strong>Jan Śpiewak</strong> to ceniony socjolog, publicysta i aktywista miejski, znany z ostrej krytyki systemowych nadużyć i nierówności społecznych w Polsce. Jest współzałożycielem stowarzyszenia <strong>Miasto Jest Nasze</strong> i byłym radnym Warszawy. Zyskał rozgłos dzięki zaangażowaniu w walkę z dziką reprywatyzacją w stolicy. W swoich książkach i publicystyce bezkompromisowo obnaża mechanizmy oligarchizacji państwa. Jego prace, takie jak <strong>"Ukradzione miasto"</strong>, są głęboką analizą problemów, a najnowsza książka <strong>"Patopaństwo"</strong> jest swoistym podsumowaniem jego dotychczasowej działalności. To obowiązkowa pozycja i spotkanie dla każdego, kto chce lepiej zrozumieć dzisiejszą Polskę i poszukać dróg do budowania bardziej sprawiedliwego systemu.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>O czym będziemy rozmawiać?</h2>
            <p>Będziemy rozmawiać o jego najnowszej i szeroko dyskutowanej książce <strong>„Patopaństwo. O tym, jak elity pustoszą nasz kraj”</strong>. To publikacja, która stawia niewygodną diagnozę polskiej rzeczywistości i demaskuje źródła patologii życia publicznego, wykorzystując do tego hasła, których twórcą jest sam autor: <strong>„państwo z kartonu”</strong> i <strong>„patodeweloperka”</strong>.</p>
            <p>Podczas spotkania Jan Śpiewak zabierze nas w podróż po <strong>Patopaństwie</strong> – kraju, w którym dziki kapitalizm i pokłosie feudalizmu splatają się ponad głowami obywateli. Dlaczego pracujemy dłużej i w gorszych warunkach? Dlaczego polskie osiedla przypominają "chów klatkowy"? Co sprawiło, że polskie instytucje bywają "folwarkami"? To tylko niektóre z trudnych pytań, na które autor poszukuje odpowiedzi, by pokazać, że zmiana jest możliwa, jeśli państwo zacznie realizować interesy wspólnoty, a nie najsilniejszych.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;