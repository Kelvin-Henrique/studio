import { Aperture, AppWindow, type LucideIcon } from "lucide-react";

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
    id: "app-1",
    name: "QuantumLeap CRM",
    logo: AppWindow,
    logoBgColor: "bg-primary",
    versions: {
      android: {
        production: [
          {
            id: "v-android-prod-1",
            number: "v1.3.0",
            date: "01 de Julho de 2024",
            changelog:
              "• Novo painel de análise de clientes.\n• Melhorias de desempenho na sincronização de contatos.\n• Correção de bugs de interface.",
            downloadUrl: "#",
          },
          {
            id: "v-android-prod-2",
            number: "v1.2.5",
            date: "15 de Junho de 2024",
            changelog:
              "• Correções de segurança críticas.\n• Interface do usuário atualizada para telas maiores.",
            downloadUrl: "#",
          },
        ],
        internal: [
          {
            id: "v-android-int-1",
            number: "v1.3.1-beta",
            date: "05 de Julho de 2024",
            changelog: "• Teste da nova integração com o calendário.",
            downloadUrl: "#",
          },
        ],
      },
      ios: {
        production: [
          {
            id: "v-ios-prod-1",
            number: "v1.2.0",
            date: "20 de Junho de 2024",
            changelog:
              "• Suporte para widgets na tela inicial.\n• Melhorias de acessibilidade com VoiceOver.",
            downloadUrl: "#",
          },
        ],
        internal: [],
      },
    },
  },
  {
    id: "app-2",
    name: "Stellar Photos",
    logo: Aperture,
    logoBgColor: "bg-secondary",
    versions: {
      android: {
        production: [
          {
            id: "v2-android-prod-1",
            number: "v2.5.0",
            date: "28 de Junho de 2024",
            changelog:
              "• Novos filtros artísticos com IA.\n• Edição de vídeo em 4K.\n• Compartilhamento direto para redes sociais.",
            downloadUrl: "#",
          },
        ],
        internal: [
          {
            id: "v2-android-int-1",
            number: "v2.5.1-rc1",
            date: "03 de Julho de 2024",
            changelog:
              "• Testando novo codec de exportação AV1.\n• Correções para o modo retrato.",
            downloadUrl: "#",
          },
        ],
      },
      ios: {
        production: [
          {
            id: "v2-ios-prod-1",
            number: "v2.4.0",
            date: "18 de Junho de 2024",
            changelog:
              "• Integração com a API ProRAW.\n• Melhorias na organização de álbuns.",
            downloadUrl: "#",
          },
          {
            id: "v2-ios-prod-2",
            number: "v2.3.0",
            date: "01 de Junho de 2024",
            changelog: "• Lançamento inicial para iOS.",
            downloadUrl: "#",
          },
        ],
        internal: [
          {
            id: "v2-ios-int-1",
            number: "v2.4.1-tf",
            date: "25 de Junho de 2024",
            changelog:
              "• Teste de estabilidade para o novo recurso de colaboração em álbuns.",
            downloadUrl: "#",
          },
        ],
      },
    },
  },
];
