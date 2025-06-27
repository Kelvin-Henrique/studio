import { Users, BookOpen, Shield, Handshake, Briefcase, CreditCard, type LucideIcon } from "lucide-react";

export type Version = {
  id: string;
  number: string;
  date: string;
  changelog: string;
  downloadUrl: string;
};

export type AppData = {
  id: string;
  name: string;
  logo: LucideIcon;
  logoBgColor: string;
  versions: {
    [platform: string]: {
      [environment: string]: Version[];
    };
  };
};

export const MOCK_APPS_DATA: AppData[] = [
  {
    id: "sindmet-sp",
    name: "Sindmet SP",
    logo: Users,
    logoBgColor: "bg-blue-600",
    versions: {
      android: {
        production: [
          {
            id: "sindmet-android-prod-1",
            number: "v1.0.0",
            date: "01 de Agosto de 2024",
            changelog: "• Lançamento inicial do aplicativo.",
            downloadUrl: "#",
          },
        ],
        internal: [],
      },
      ios: {
        production: [
            {
            id: "sindmet-ios-prod-1",
            number: "v1.0.0",
            date: "01 de Agosto de 2024",
            changelog: "• Lançamento inicial do aplicativo.",
            downloadUrl: "#",
          },
        ],
        internal: [],
      },
    },
  },
  {
    id: "cefol",
    name: "Cefol",
    logo: BookOpen,
    logoBgColor: "bg-green-600",
    versions: {
      android: {
        production: [
          {
            id: "cefol-android-prod-1",
            number: "v2.1.0",
            date: "15 de Julho de 2024",
            changelog: "• Novos cursos disponíveis.\n• Melhorias na interface.",
            downloadUrl: "#",
          },
        ],
        internal: [],
      },
      ios: {
        production: [],
        internal: [],
      },
    },
  },
  {
    id: "cooperemb",
    name: "Cooperemb",
    logo: Shield,
    logoBgColor: "bg-red-600",
    versions: {
      android: {
        production: [
          {
            id: "cooperemb-android-prod-1",
            number: "v1.5.2",
            date: "10 de Julho de 2024",
            changelog: "• Correções de segurança.",
            downloadUrl: "#",
          },
        ],
        internal: [],
      },
      ios: {
        production: [],
        internal: [],
      },
    },
  },
  {
    id: "cooperjohnson",
    name: "Cooperjohnson",
    logo: Handshake,
    logoBgColor: "bg-purple-600",
    versions: {
      android: {
        production: [
           {
            id: "cooperj-android-prod-1",
            number: "v3.0.0",
            date: "05 de Junho de 2024",
            changelog: "• Nova interface e funcionalidades.",
            downloadUrl: "#",
          },
        ],
        internal: [
            {
            id: "cooperj-android-int-1",
            number: "v3.1.0-beta",
            date: "20 de Julho de 2024",
            changelog: "• Testes internos.",
            downloadUrl: "#",
          },
        ],
      },
      ios: {
        production: [
          {
            id: "cooperj-ios-prod-1",
            number: "v2.9.0",
            date: "01 de Junho de 2024",
            changelog: "• Melhorias de performance.",
            downloadUrl: "#",
          },
        ],
        internal: [],
      },
    },
  },
  {
    id: "sindeepres",
    name: "Sindeepres",
    logo: Briefcase,
    logoBgColor: "bg-yellow-600",
    versions: {
      android: {
        production: [],
        internal: [],
      },
      ios: {
        production: [
          {
            id: "sindeepres-ios-prod-1",
            number: "v1.2.0",
            date: "01 de Maio de 2024",
            changelog: "• Melhorias no agendamento.",
            downloadUrl: "#",
          },
        ],
        internal: [],
      },
    },
  },
  {
    id: "metalcred",
    name: "MetalCred",
    logo: CreditCard,
    logoBgColor: "bg-gray-700",
    versions: {
      android: {
        production: [
          {
            id: "metalcred-android-prod-1",
            number: "v4.0.1",
            date: "25 de Julho de 2024",
            changelog: "• Novo extrato detalhado.\n• Correção de bugs.",
            downloadUrl: "#",
          },
        ],
        internal: [],
      },
      ios: {
        production: [
          {
            id: "metalcred-ios-prod-1",
            number: "v4.0.0",
            date: "20 de Julho de 2024",
            changelog: "• Lançamento da nova versão 4.",
            downloadUrl: "#",
          },
        ],
        internal: [],
      },
    },
  },
];
