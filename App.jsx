import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Conte seu gosto",
    description:
      "Responda ao nosso quiz rapidinho. A gente descobre o café que combina com você.",
    icon: "✳",
  },
  {
    number: "02",
    title: "A gente garimpa",
    description:
      "Selecionamos microlotes fresquinhos, direto de produtores brasileiros.",
    icon: "⌕",
  },
  {
    number: "03",
    title: "Seu ritual chega",
    description:
      "Todo mês, café recém-torrado e uma nova história batem à sua porta.",
    icon: "↗",
  },
];

const questions = [
  {
    title: "Como você prepara seu café?",
    subtitle: "Cada método revela um lado diferente do grão.",
    options: [
      { value: "espresso", label: "Espresso ou moka", note: "Intenso e encorpado", icon: "◉" },
      { value: "filter", label: "Coado ou prensa", note: "Leve e cheio de nuances", icon: "▽" },
      { value: "both", label: "Depende do dia", note: "Gosto de variar", icon: "↗" },
    ],
  },
  {
    title: "Qual intensidade prefere?",
    subtitle: "Não existe resposta errada. Só café bom.",
    options: [
      { value: "soft", label: "Suave", note: "Doçura e delicadeza", icon: "☼" },
      { value: "balanced", label: "Equilibrada", note: "Um pouco de tudo", icon: "◒" },
      { value: "bold", label: "Marcante", note: "Corpo e personalidade", icon: "✳" },
    ],
  },
];

const testimonials = [
  {
    quote:
      "Meu café da manhã virou um pequeno ritual. A seleção é sempre surpreendente — e sempre deliciosa.",
    name: "Marina A.",
    detail: "Assinante há 8 meses · São Paulo, SP",
    initials: "MA",
  },
  {
    quote:
      "Dá para sentir o cuidado em cada detalhe, do grão à cartinha. Já converti a família toda.",
    name: "Rafael C.",
    detail: "Assinante há 1 ano · Curitiba, PR",
    initials: "RC",
  },
  {
    quote:
      "O quiz acertou em cheio no meu perfil. E conhecer a história de quem produz deixa tudo mais especial.",
    name: "Luiza F.",
    detail: "Assinante há 5 meses · Belo Horizonte, MG",
    initials: "LF",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-4 text-xs font-semibold uppercase tracking-[0.24em] ${
        light ? "text-[#e7b49c]" : "text-[#a45337]"
      }`}
    >
      {children}
    </p>
  );
}

export default function App() {
  const [answers, setAnswers] = useState({});
  const [quizStep, setQuizStep] = useState(0);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const chooseAnswer = (value) => {
    const updatedAnswers = { ...answers, [quizStep]: value };
    setAnswers(updatedAnswers);

    if (quizStep === questions.length - 1) {
      setShowRecommendation(true);
    } else {
      setQuizStep(quizStep + 1);
    }
  };

  const startQuiz = () => {
    setAnswers({});
    setQuizStep(0);
    setShowRecommendation(false);
  };

  const recommendation =
    answers[1] === "bold" || answers[0] === "espresso"
      ? {
          name: "Origem Intensa",
          description:
            "Grãos de torra média-escura, corpo aveludado e notas de chocolate. Perfeito para o seu ritual.",
        }
      : answers[1] === "soft" && answers[0] === "filter"
        ? {
            name: "Descoberta",
            description:
              "Microlotes delicados, florais e frutados, feitos para brilhar no coador.",
          }
        : {
            name: "Equilíbrio",
            description:
              "Uma seleção versátil, doce e surpreendente para acompanhar todos os seus métodos.",
          };

  return (
    <main className="min-h-screen bg-[#f7f3eb] font-sans text-[#34241d]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          aria-label="GrãoNobre, página inicial"
          className="text-[1.65rem] font-semibold tracking-[-0.07em]"
          href="#inicio"
        >
          grão<span className="text-[#a45337]">nobre</span>
          <span className="ml-1 align-top text-xs text-[#a45337]">®</span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex">
          <a className="text-sm text-[#725c50] transition hover:text-[#a45337]" href="#como-funciona">
            Como funciona
          </a>
          <a className="text-sm text-[#725c50] transition hover:text-[#a45337]" href="#quiz">
            Encontre seu café
          </a>
          <a className="text-sm text-[#725c50] transition hover:text-[#a45337]" href="#avaliacoes">
            Avaliações
          </a>
        </nav>
        <a
          className="rounded-full bg-[#a45337] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#87412b]"
          href="#quiz"
        >
          Descobrir meu café
        </a>
      </header>

      <section
        className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden px-6 pb-16 pt-10 md:grid-cols-[0.92fr_1.08fr] md:items-center md:pb-24 md:pt-14 lg:px-10"
        id="inicio"
      >
        <div className="relative z-10 max-w-xl">
          <SectionLabel>Um bom dia começa no grão</SectionLabel>
          <h1 className="font-serif text-[3.55rem] leading-[0.99] tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem]">
            Café com
            <br />
            <span className="font-normal italic text-[#a45337]">história.</span>
            <br />
            Do seu jeito.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#725c50] sm:text-lg">
            Cafés especiais brasileiros, escolhidos a dedo e entregues fresquinhos
            na sua casa. Seu próximo favorito começa aqui.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              className="inline-flex items-center gap-3 rounded-full bg-[#a45337] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#87412b]"
              href="#quiz"
            >
              Encontrar meu perfil <ArrowIcon className="h-4 w-4" />
            </a>
            <span className="text-xs text-[#8b7569]">Leva menos de 1 minuto</span>
          </div>
          <div className="mt-11 flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              {["M", "R", "L"].map((letter, index) => (
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f7f3eb] text-xs font-semibold text-white ${
                    ["bg-[#8c604b]", "bg-[#bd8060]", "bg-[#6d7660]"][index]
                  }`}
                  key={letter}
                >
                  {letter}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#725c50]">
              <span className="font-semibold text-[#34241d]">+2.400 pessoas</span> já
              encontraram seu café
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[610px]">
          <div className="absolute -right-4 -top-5 h-32 w-32 rounded-full bg-[#e6d3bc] md:h-48 md:w-48" />
          <div className="absolute -bottom-5 -left-4 h-40 w-40 rounded-full bg-[#e8d2c2]" />
          <img
            alt="Café sendo servido em uma xícara de cerâmica ao lado de grãos recém-moídos"
            className="relative h-[380px] w-full rounded-[48%_48%_8px_8px] object-cover object-center shadow-[0_24px_70px_rgba(74,48,33,0.16)] sm:h-[480px]"
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
          />
          <div className="absolute -bottom-5 left-2 rounded-2xl bg-[#fffdf8] p-4 shadow-xl sm:bottom-7 sm:-left-8 sm:p-5">
            <p className="font-serif text-xl italic text-[#a45337]">De quem planta,</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#725c50]">
              para quem aprecia
            </p>
          </div>
          <div className="absolute right-2 top-7 rounded-full border border-white/60 bg-[#f7f3eb]/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#725c50] backdrop-blur-sm sm:right-6">
            100% brasileiro
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8dfd3] bg-[#f1eade]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-7 px-6 py-8 text-center sm:grid-cols-4 lg:px-10">
          {[
            ["100%", "café especial"],
            ["Direto", "do produtor"],
            ["Fresquinho", "todo mês"],
            ["Sem", "complicação"],
          ].map(([title, detail]) => (
            <div key={title}>
              <p className="font-serif text-xl text-[#a45337]">{title}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.17em] text-[#806b5e]">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10" id="como-funciona">
        <div className="mx-auto max-w-xl text-center">
          <SectionLabel>Sem mistério, só café bom</SectionLabel>
          <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
            Como funciona
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#806b5e]">
            Três passos simples entre você e uma xícara extraordinária.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((step) => (
            <article className="relative border-t border-[#d8c8b7] pt-6" key={step.number}>
              <span className="absolute -top-3 right-0 bg-[#f7f3eb] px-2 font-serif text-sm italic text-[#a45337]">
                {step.number}
              </span>
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ede1d2] font-serif text-2xl text-[#a45337]"
              >
                {step.icon}
              </span>
              <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#806b5e]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#392820] px-6 py-20 text-[#f7f3eb] md:py-24" id="quiz">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.75fr_1.25fr] md:items-center lg:px-4">
          <div>
            <SectionLabel light>Uma escolha com a sua cara</SectionLabel>
            <h2 className="max-w-md font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Qual café combina com você?
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#d0bfb2]">
              Responda duas perguntinhas e encontre uma seleção feita para o seu
              jeito de apreciar café.
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-[#c19a80]">
              Sem compromisso · Sem resposta errada
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-[#fffdf8] p-6 text-[#34241d] shadow-2xl sm:p-9">
            {showRecommendation ? (
              <div aria-live="polite">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0e2d4] text-xl text-[#a45337]">
                  ✳
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#a45337]">
                  Seu perfil de café
                </p>
                <h3 className="mt-2 font-serif text-3xl">{recommendation.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#806b5e]">
                  {recommendation.description}
                </p>
                <a
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#a45337] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#87412b]"
                  href="#assinar"
                >
                  Conhecer meu plano <ArrowIcon className="h-4 w-4" />
                </a>
                <button
                  className="ml-4 text-sm text-[#806b5e] underline decoration-[#cdb8a5] underline-offset-4 hover:text-[#a45337]"
                  onClick={startQuiz}
                  type="button"
                >
                  Refazer quiz
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a45337]">
                    Pergunta {quizStep + 1} de {questions.length}
                  </span>
                  <div
                    aria-label={`Etapa ${quizStep + 1} de ${questions.length}`}
                    className="flex gap-1.5"
                  >
                    {questions.map((question, index) => (
                      <span
                        className={`h-1.5 w-8 rounded-full ${
                          index <= quizStep ? "bg-[#a45337]" : "bg-[#e8dfd3]"
                        }`}
                        key={question.title}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl">
                  {questions[quizStep].title}
                </h3>
                <p className="mt-2 text-sm text-[#806b5e]">
                  {questions[quizStep].subtitle}
                </p>
                <div className="mt-6 grid gap-3">
                  {questions[quizStep].options.map((option) => (
                    <button
                      className="group flex w-full items-center gap-4 rounded-xl border border-[#e9dfd4] px-4 py-3.5 text-left transition hover:border-[#a45337] hover:bg-[#fbf6ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a45337]"
                      key={option.value}
                      onClick={() => chooseAnswer(option.value)}
                      type="button"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1e7dc] font-serif text-lg text-[#a45337] group-hover:bg-[#ead8c7]">
                        {option.icon}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold">{option.label}</span>
                        <span className="mt-0.5 block text-xs text-[#8b7569]">
                          {option.note}
                        </span>
                      </span>
                      <ArrowIcon className="h-4 w-4 text-[#b8a496] transition group-hover:translate-x-1 group-hover:text-[#a45337]" />
                    </button>
                  ))}
                </div>
                {quizStep > 0 && (
                  <button
                    className="mt-5 text-xs text-[#806b5e] underline decoration-[#cdb8a5] underline-offset-4 hover:text-[#a45337]"
                    onClick={() => setQuizStep(quizStep - 1)}
                    type="button"
                  >
                    Voltar à pergunta anterior
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10" id="avaliacoes">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Palavra de quem já provou</SectionLabel>
            <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Café bom se conta.
            </h2>
          </div>
          <p className="text-xs text-[#806b5e]">
            <span className="text-base tracking-[0.12em] text-[#b36b45]">★★★★★</span>
            <span className="ml-2">4,9/5 · mais de 380 avaliações</span>
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article
              className="flex min-h-[245px] flex-col rounded-2xl border border-[#e8dfd3] bg-[#fbf8f2] p-6"
              key={review.name}
            >
              <p
                aria-label="5 de 5 estrelas"
                className="text-sm tracking-[0.2em] text-[#b36b45]"
              >
                ★★★★★
              </p>
              <blockquote className="mt-5 flex-1 font-serif text-lg leading-7 text-[#49362b]">
                “{review.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-[#e8dfd3] pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eadbca] text-xs font-semibold text-[#80583f]">
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="mt-0.5 text-[10px] text-[#8b7569]">{review.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-6 mb-12 overflow-hidden rounded-[2rem] bg-[#e9d8c5] px-6 py-12 text-center sm:mx-10 sm:py-16" id="assinar">
        <SectionLabel>Um convite para apreciar</SectionLabel>
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
          Tem um café especial esperando por você.
        </h2>
        <a
          className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#a45337] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#87412b]"
          href="#quiz"
        >
          Encontrar meu café <ArrowIcon className="h-4 w-4" />
        </a>
      </section>

      <footer className="flex flex-col items-center justify-between gap-3 border-t border-[#e8dfd3] px-6 py-7 text-center sm:flex-row sm:px-10 sm:text-left">
        <a className="font-semibold tracking-[-0.06em]" href="#inicio">
          grão<span className="text-[#a45337]">nobre</span>
        </a>
        <p className="text-xs text-[#8b7569]">
          Café brasileiro, com calma e cuidado. © 2026 GrãoNobre.
        </p>
        <a className="text-xs text-[#725c50] hover:text-[#a45337]" href="#como-funciona">
          Feito para apreciar
        </a>
      </footer>
    </main>
  );
}
