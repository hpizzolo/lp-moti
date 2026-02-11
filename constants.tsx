
import React from 'react';
import { Shield, FileCheck, CalendarClock, Zap, Users, Scale, MessageSquare, BookOpen, GraduationCap, Briefcase, Landmark } from 'lucide-react';
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
    id: 'rastreabilidade',
    title: 'Rastreabilidade: Fortalecendo as Camadas de Evidência',
    description: 'Foco na importância de ferramentas de acompanhamento em tempo real, quizzes e certificações automáticas para evidência robusta em auditorias.',
    icon: <Shield className="w-12 h-12 text-[#fa3a40]" />,
  },
  {
    id: 'pld-cft',
    title: 'Reciclagem de PLD/CFT: Vencendo a "Cegueira Operacional"',
    description: 'Ênfase na necessidade de treinamento contínuo para evitar a "cegueira operacional" e transformar a equipe em uma linha de defesa ativa.',
    icon: <FileCheck className="w-12 h-12 text-[#fa3a40]" />,
  },
  {
    id: 'planejamento',
    title: 'Planejamento Antecipado = Zero "Gargalo de Auditoria"',
    description: 'Capacite sua equipe no Q1 para monitorar o progresso com calma, evitando sobrecarga e incidentes críticos de compliance.',
    icon: <CalendarClock className="w-12 h-12 text-[#fa3a40]" />,
  },
];

export const COURSES: Course[] = [
  { id: '1', title: 'PLD/FT', icon: <Scale className="w-6 h-6" /> },
  { id: '2', title: 'Governança Cooperativa', icon: <Users className="w-6 h-6" /> },
  { id: '3', title: 'Gestão de Riscos e Controles Internos', icon: <Shield className="w-6 h-6" /> },
  { id: '4', title: 'Código de Ética e Conduta', icon: <BookOpen className="w-6 h-6" /> },
  { id: '5', title: 'Inclusão Financeira e Atendimento ao Cooperado', icon: <MessageSquare className="w-6 h-6" /> },
];

export const CAREER_COURSES: Course[] = [
  { id: 'c1', title: 'Introdução ao Sistema Financeiro Nacional (SFN)', icon: <Landmark className="w-6 h-6" /> },
  { id: 'c2', title: 'Preparatório Certificações (CPA-10/20)', icon: <GraduationCap className="w-6 h-6" /> },
  { id: 'c3', title: 'Carreira e Cultura em Cooperativas de Crédito', icon: <Briefcase className="w-6 h-6" /> },
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Sua cooperativa possui rastreabilidade em tempo real de todos os treinamentos de compliance?",
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
