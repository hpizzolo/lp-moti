
import React from 'react';
import { Shield, FileCheck, CalendarClock, Zap, Users, Scale, MessageSquare, BookOpen, GraduationCap, Briefcase, Landmark, LayoutDashboard, Settings } from 'lucide-react';
import { Pillar, Course, Question } from './types';

export const COLORS = {
  primary: '#fa3a40',      // vermelho
  secondary: '#283646',    // marinho
  accent: '#f1666b',       // vermelho claro
  blue: '#6589b2',         // azul claro
  lightBlue: '#bdcfd9',    // azul mais claro
};

export const PILLARS: Pillar[] = [
  {
    id: 'auditoria',
    title: 'Exigências para auditorias',
    description: 'Conteúdos estruturados conforme normas do Banco Central, resoluções aplicáveis e boas práticas, garantindo que a instituição financeira esteja preparada para auditorias internas, externas e inspeções.',
    icon: <Shield className="w-12 h-12 text-[#fa3a40]" />,
  },
  {
    id: 'certificacao',
    title: 'Certificação Automatizada',
    description: 'Ao final de cada curso, o colaborador recebe automaticamente um certificado seguindo a base legal da Lei nº 9394/96, do Decreto Presidencial nº 5.154/2004 e normas do MEC.',
    icon: <FileCheck className="w-12 h-12 text-[#fa3a40]" />,
  },
  {
    id: 'gestao',
    title: 'Gestão digital',
    description: 'Acompanhamento detalhado do progresso individual e das equipes. Relatórios gerenciais completos para auditorias e conformidade, garantindo transparência.',
    icon: <LayoutDashboard className="w-12 h-12 text-[#fa3a40]" />,
  },
  {
    id: 'personalizado',
    title: 'Conteúdo Personalizado',
    description: 'Possibilidade de personalizar seu conteúdo, adaptando à política interna da instituição, seus processos e fluxos de trabalho.',
    icon: <Settings className="w-12 h-12 text-[#fa3a40]" />,
  },
];

export const COURSES: Course[] = [
  { id: '1', title: 'PLD/FT', icon: <Scale className="w-6 h-6" /> },
  { id: '2', title: 'Governança Corporativa', icon: <Users className="w-6 h-6" /> },
  { id: '3', title: 'Gestão de Riscos e Controles Internos', icon: <Shield className="w-6 h-6" /> },
  { id: '4', title: 'Código de Ética e Conduta', icon: <BookOpen className="w-6 h-6" /> },
  { id: '5', title: 'Inclusão Financeira e Atendimento ao Cooperado', icon: <MessageSquare className="w-6 h-6" /> },
];

export const CAREER_COURSES: Course[] = [
  { id: 'c1', title: 'Introdução ao Sistema Financeiro Nacional (SFN)', icon: <Landmark className="w-6 h-6" /> },
  { id: 'c2', title: 'Preparatório Certificações (CPA-10/20)', icon: <GraduationCap className="w-6 h-6" /> },
  { id: 'c3', title: 'Carreira e Cultura em Instituições Financeiras', icon: <Briefcase className="w-6 h-6" /> },
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Sua instituição possui rastreabilidade em tempo real de todos os treinamentos de compliance?",
    options: ["Sim, totalmente", "Parcialmente", "Ainda não"],
  },
  {
    id: 2,
    text: "A reciclagem de PLD/CFT da sua equipe é feita anualmente com conteúdo atualizado?",
    options: ["Sempre", "Às vezes", "Não temos cronograma"],
  },
  {
    id: 3,
    text: "O relatório de efetividade para o BCB consome muito tempo da sua equipe?",
    options: ["Não, é automatizado", "Sim, alguns dias", "Sim, semanas"],
  },
];
