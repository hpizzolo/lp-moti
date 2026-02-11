
import React, { useState } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  BarChart3,
  CheckCircle,
  Quote,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Zap,
  User,
  Building2,
  Send,
  GraduationCap,
  TrendingUp,
  Award,
  Users,
  Star,
  Globe
} from 'lucide-react';
import { PILLARS, COURSES, CAREER_COURSES, COLORS } from './constants';
import CountdownTimer from './components/CountdownTimer';
import Quiz from './components/Quiz';

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cooperativa: '',
    telefone: ''
  });

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqdqvad"; // ID configurado do Formspree

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Enviar dados para Formspree (Envio por Email)
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ nome: '', email: '', cooperativa: '', telefone: '' }); // Limpa o formulário
      } else {
        throw new Error("Falha no envio");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Ocorreu um erro ao enviar sua solicitação por e-mail. Por favor, verifique se o endpoint do Formspree está correto.");
      setFormStatus('idle');
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#fa3a40] selection:text-white">
      {/* Refined Header */}
      <div className="absolute top-0 left-0 w-full z-50 p-8 flex justify-start pointer-events-none">
        <div className="flex items-center gap-3 px-5 py-2 rounded-full pointer-events-auto">
          <img src="/logo.png" alt="Motí Logo" className="w-8 h-8 object-contain" />
          <span className="text-white font-bold text-sm tracking-widest uppercase">Motí <span className="font-light text-gray-400">Consultoria</span></span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 md:px-12 bg-[#1a232c] overflow-hidden">
        {/* Background Patterns & Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-dots opacity-40"></div>
          <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#fa3a40]/10 rounded-full blur-[120px] animate-glow"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[150px] animate-glow" style={{ animationDelay: '-4s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="lg:w-[55%] text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[9px] font-bold uppercase tracking-[0.2em] mb-10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#fa3a40]" /> Compliance Estratégico 2026
              </div>

              <h1 className="text-5xl md:text-[80px] font-extrabold text-white leading-[1.05] mb-10 tracking-tight">
                Segurança para <br className="hidden md:block" />
                Cooperativas, <br />
                <span className="text-[#fa3a40]">Evolução para <br className="hidden md:block" /> Profissionais.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/40 mb-14 max-w-xl leading-relaxed">
                A blindagem regulatória que sua cooperativa precisa e a certificação prática que o mercado de trabalho exige. O Motí EAD une gestão de riscos e crescimento de carreira.
              </p>

              <div className="flex flex-row flex-wrap items-center gap-5 mb-20">
                <button
                  onClick={() => scrollTo('budget')}
                  className="bg-[#fa3a40] text-white px-9 py-5 rounded-full font-black text-xs hover:brightness-110 active:scale-95 transition-all shadow-[0_15px_40px_rgba(250,58,64,0.35)] flex items-center justify-center gap-3 uppercase tracking-[0.15em]"
                >
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                  SOU LÍDER DE COOPERATIVA
                </button>
                <button
                  onClick={() => scrollTo('carreira')}
                  className="bg-transparent text-white border border-[#fa3a40]/50 hover:border-[#fa3a40] px-9 py-5 rounded-full font-black text-xs hover:bg-[#fa3a40]/5 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.15em]"
                >
                  <User className="w-5 h-5 flex-shrink-0 text-[#fa3a40]" />
                  BUSCO ESPECIALIZAÇÃO
                </button>
              </div>

              {/* Bottom Features */}
              <div className="flex flex-row flex-wrap gap-x-12 gap-y-6 text-white/30 text-[9px] font-bold uppercase tracking-[0.3em] pt-10 border-t border-white/5">
                <div className="flex items-center gap-3 whitespace-nowrap"><ShieldCheck className="w-4 h-4 text-[#fa3a40]" /> Gestão de Riscos</div>
                <div className="flex items-center gap-3 whitespace-nowrap"><TrendingUp className="w-4 h-4 text-[#fa3a40]" /> Certificação Profissional</div>
                <div className="flex items-center gap-3 whitespace-nowrap"><Award className="w-4 h-4 text-[#fa3a40]" /> Empregabilidade</div>
              </div>
            </div>

            {/* Right Graphic (Dashboard) */}
            <div className="lg:w-[45%] w-full relative">
              {/* Extra Glow behind dashboard */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#fa3a40]/10 blur-[130px] -z-10 rounded-full"></div>

              <div className="dashboard-window rounded-[2rem] p-1 relative overflow-hidden backdrop-blur-3xl shadow-2xl border border-white/5">
                <div className="bg-[#0b121f]/90 rounded-[1.9rem] p-8 md:p-10">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#fa3a40]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/5"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/5"></div>
                    </div>
                    <div className="w-20 h-2 bg-white/5 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {/* Stat card 1 */}
                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                      <div className="text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-3">Certificados Emitidos</div>
                      <div className="text-3xl font-black text-white mb-4">+ 300</div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#fa3a40] w-[100%] shadow-[0_0_10px_rgba(250,58,64,0.5)]"></div>
                      </div>
                    </div>
                    {/* Stat card 2 */}
                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                      <div className="text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-3">Experiência na área</div>
                      <div className="text-3xl font-black text-white mb-4">+ 30 Anos</div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[100%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Main Chart area */}
                  <div className="bg-white/[0.01] border border-white/5 p-8 rounded-2xl">
                    <div className="flex items-end justify-between h-36 gap-3 mb-6 px-2">
                      <div className="flex-1 bg-[#fa3a40]/60 rounded-sm h-[35%]"></div>
                      <div className="flex-1 bg-[#fa3a40]/70 rounded-sm h-[55%]"></div>
                      <div className="flex-1 bg-[#fa3a40]/65 rounded-sm h-[45%]"></div>
                      <div className="flex-1 bg-[#fa3a40]/85 rounded-sm h-[80%]"></div>
                      <div className="flex-1 bg-[#fa3a40]/90 rounded-sm h-[70%]"></div>
                      <div className="flex-1 bg-[#fa3a40]/95 rounded-sm h-[90%]"></div>
                      <div className="flex-1 bg-[#fa3a40] rounded-sm h-[100%] shadow-[0_0_20px_rgba(250,58,64,0.2)]"></div>
                    </div>
                    <div className="text-center text-white text-[9px] font-bold uppercase tracking-[0.3em]">
                      Crescimento Profissional & Conformidade
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pilares" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#283646] mb-4">Os 3 Pilares Inegociáveis</h2>
            <div className="w-24 h-2 bg-[#fa3a40] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Para 2026, a conformidade não é apenas uma regra, é a segurança do seu patrimônio e reputação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="group p-8 rounded-2xl border-2 border-gray-50 hover:border-[#bdcfd9] hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-[#fa3a40]/5 group-hover:bg-[#fa3a40]/10 transition">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#283646] min-h-[60px] flex items-center">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {pillar.description}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => scrollTo('budget')}
                    className="text-[#fa3a40] font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                  >
                    Saiba mais <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => scrollTo('relatorio')}
              className="bg-[#283646] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#fa3a40] transition-colors shadow-lg"
            >
              Veja como o Motí EAD Facilita Tudo
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="relatorio" className="py-24 px-6 md:px-12 bg-[#bdcfd9]/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#283646] mb-6 leading-tight">
              Facilite seu <span className="text-[#fa3a40]">Relatório de Efetividade</span> com o Motí EAD.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              O "Relatório de Efetividade" costuma ser um pesadelo logístico. Nossa plataforma simplifica este processo em até 80%, consolidando dados críticos de forma automática.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Adesão total em tempo real por departamento",
                "Notas e desempenho consolidados por colaborador",
                "Cronologia histórica de treinamentos à prova de auditorias",
                "Exportação simplificada para Conselho e BCB"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-[#283646] font-semibold">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo('budget')}
              className="bg-[#fa3a40] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition shadow-xl"
            >
              Solicitar Demonstração do Painel
            </button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h4 className="font-bold text-gray-800">Dashboard de Compliance</h4>
                <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-xs font-bold">2026 Ativo</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-gray-400 text-xs font-bold uppercase mb-1">Taxa de Adesão</div>
                  <div className="text-2xl font-bold text-[#fa3a40]">98.4%</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-gray-400 text-xs font-bold uppercase mb-1">Certificações</div>
                  <div className="text-2xl font-bold text-[#283646]">1.250+</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#fa3a40] w-[90%] rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                  <span>PLD/CFT Reciclagem</span>
                  <span className="text-[#fa3a40]">90% Completo</span>
                </div>

                <div className="relative h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#6589b2] w-[75%] rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                  <span>Governança & Riscos</span>
                  <span className="text-[#6589b2]">75% Completo</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="p-4 border-2 border-dashed border-gray-200 rounded-xl flex items-center gap-4 text-gray-400">
                  <BarChart3 className="w-10 h-10" />
                  <span className="text-sm font-medium">Relatório Exportado com Sucesso!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SFN & Career Section */}
      <section id="carreira" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#6589b2]/5 p-6 rounded-2xl border border-[#6589b2]/10 hover:border-[#6589b2] transition">
                  <GraduationCap className="w-10 h-10 text-[#6589b2] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Transição Guiada</h4>
                  <p className="text-sm text-gray-500">Mentoria para quem vem de outras áreas e busca o setor financeiro.</p>
                </div>
                <div className="bg-[#fa3a40]/5 p-6 rounded-2xl border border-[#fa3a40]/10 hover:border-[#fa3a40] transition mt-0 sm:mt-8">
                  <TrendingUp className="w-10 h-10 text-[#fa3a40] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Aceleração de Carreira</h4>
                  <p className="text-sm text-gray-500">Conquiste cargos de liderança com especializações técnicas.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#283646] mb-6">Sua Porta de Entrada para o <span className="text-[#6589b2]">Cooperativismo</span>.</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Não apenas treinamos equipes, formamos os próximos líderes do Sistema Financeiro Nacional. Se você busca ingressar ou crescer em cooperativas, nossas trilhas de carreira são o caminho mais curto para a sua aprovação.
              </p>
              <div className="space-y-4 mb-8">
                {CAREER_COURSES.map(course => (
                  <div key={course.id} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-transparent hover:border-gray-200 transition">
                    <div className="text-[#6589b2]">{course.icon}</div>
                    <span className="font-bold text-[#283646]">{course.title}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollTo('budget')}
                className="inline-flex items-center gap-2 font-bold text-[#fa3a40] hover:gap-3 transition-all"
              >
                Conheça o Programa Carreira SFN <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-24 px-6 md:px-12 bg-white text-[#283646]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Sua cooperativa está realmente preparada?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Faça nosso micro-diagnóstico rápido e descubra se a sua trilha de capacitação atual atende às exigências de 2026.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-[#fa3a40] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-[#fa3a40]/20">1</div>
                <div>
                  <h4 className="font-bold text-xl text-[#283646]">Responda 3 perguntas</h4>
                  <p className="text-gray-500">Análise honesta do seu cenário operacional e estratégico.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-[#283646] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-lg shadow-[#283646]/20">2</div>
                <div>
                  <h4 className="font-bold text-xl text-[#283646]">Receba o feedback</h4>
                  <p className="text-gray-500">Identifique brechas operacionais agora e evite multas futuras.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#283646] p-4 rounded-[40px] shadow-2xl">
            <Quiz />
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="trilhas" className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#283646] mb-4 leading-tight">Trilhas Completas de Capacitação</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Conteúdo especializado desenvolvido por especialistas que vivem o ecossistema das cooperativas brasileiras todos os dias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {COURSES.map((course) => (
              <div key={course.id} className="p-8 bg-white border border-transparent rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col gap-6 group hover:border-[#fa3a40]/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gray-100 group-hover:bg-[#fa3a40] transition-colors"></div>
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#283646] group-hover:bg-[#fa3a40] group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm">
                  {course.icon}
                </div>
                <h4 className="font-bold text-xl text-[#283646] leading-tight">{course.title}</h4>
                <div className="flex items-center gap-2 text-gray-400 text-sm font-bold">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Certificado pelo SFN
                </div>
              </div>
            ))}
          </div>

          {/* Improved Contact Form */}
          <div id="budget" className="bg-[#283646] p-8 md:p-20 rounded-[48px] shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fa3a40]/10 rounded-full blur-[100px] group-hover:bg-[#fa3a40]/20 transition-all duration-1000"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#6589b2]/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[#fa3a40] text-xs font-bold uppercase tracking-widest mb-4">
                  <Mail className="w-3 h-3" /> Orçamento Sem Compromisso
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">Pronto para blindar sua cooperativa?</h3>
                <p className="text-[#bdcfd9] text-xl">Nossa equipe entrará em contato em até 1 dia útil.</p>
              </div>

              {formStatus === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/50 p-16 rounded-[32px] text-center animate-fade-in">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4 leading-tight">Solicitação Enviada!</h4>
                  <p className="text-white/70 text-lg">Um de nossos consultores de compliance já foi notificado.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-white/60 text-sm font-bold ml-1 uppercase tracking-widest">Nome Completo</label>
                    <div className="relative group">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#fa3a40] transition-colors" />
                      <input
                        required
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: João Silva"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-[#fa3a40] transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-white/60 text-sm font-bold ml-1 uppercase tracking-widest">E-mail Corporativo</label>
                    <div className="relative group">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#fa3a40] transition-colors" />
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="joao@cooperativa.com.br"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-[#fa3a40] transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-white/60 text-sm font-bold ml-1 uppercase tracking-widest">Cooperativa / Organização</label>
                    <div className="relative group">
                      <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#fa3a40] transition-colors" />
                      <input
                        required
                        type="text"
                        value={formData.cooperativa}
                        onChange={(e) => setFormData({ ...formData, cooperativa: e.target.value })}
                        placeholder="Nome da sua cooperativa"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-[#fa3a40] transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-white/60 text-sm font-bold ml-1 uppercase tracking-widest">WhatsApp / Telefone</label>
                    <div className="relative group">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#fa3a40] transition-colors" />
                      <input
                        required
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(00) 00000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-4 text-white placeholder:text-white/20 focus:bg-white/10 focus:border-[#fa3a40] transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 mt-6">
                    <button
                      disabled={formStatus === 'sending'}
                      className="w-full bg-[#fa3a40] text-white py-6 rounded-2xl font-bold text-xl hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-[#fa3a40]/30 flex items-center justify-center gap-4 group"
                    >
                      {formStatus === 'sending' ? (
                        <>Enviando solicitação... <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div></>
                      ) : (
                        <>Garantir Segurança 2026 Agora <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <div className="flex items-center gap-1 text-white/30 text-[10px] uppercase font-bold tracking-tighter">
                        <ShieldCheck className="w-3 h-3" /> Conforme LGPD
                      </div>
                      <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                      <div className="flex items-center gap-1 text-white/30 text-[10px] uppercase font-bold tracking-tighter">
                        <CheckCircle className="w-3 h-3" /> Suporte Premium
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="bg-white py-16 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Motí Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-[#283646] font-bold text-lg leading-none uppercase tracking-tighter">Motí <span className="font-light text-[#6589b2]">Consultoria</span></span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Evolução & Compliance</span>
            </div>
          </div>

          {/* Social & Website Section */}
          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/company/mot%C3%AD-consultoria/posts/?feedView=all" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-400 hover:text-[#fa3a40] transition-all transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/moticonsultoria/" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-gray-400 hover:text-[#fa3a40] transition-all transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.moticonsultoria.com.br/" target="_blank" rel="noopener noreferrer" title="Website" className="text-gray-400 hover:text-[#6589b2] transition-all transform hover:scale-110">
              <Globe className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em]">© 2025 Motí Consultoria</p>
            <p className="text-[#fa3a40]/40 text-[9px] font-bold uppercase tracking-widest mt-1">Sua blindagem estratégica em 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
