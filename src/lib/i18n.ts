const defaultLanguage = "en";
type DefaultLanguage = typeof defaultLanguage;

const labels = {
  en: {
    "navigation.about-me": "About me",
    "navigation.projects": "Projects",
    "navigation.talks": "Talks",
    "navigation.cv": "CV",
  },
  de: {
    "navigation.about-me": "Über mich",
    "navigation.projects": "Projekte",
    "navigation.talks": "Talks",
    "navigation.cv": "CV",
  },
} as const;

export function useTranslations(
  lang: string | undefined,
): (label: keyof (typeof labels)[DefaultLanguage]) => string {
  const languageToUse =
    lang !== undefined && lang in labels
      ? (lang as keyof typeof labels)
      : defaultLanguage;
  const localizedLabels = labels[languageToUse];

  return function t(key: keyof (typeof labels)[typeof defaultLanguage]) {
    return localizedLabels[key];
  };
}

function normalizeUrl(url: string): string {
  return url.endsWith("/") ? url : url + "/";
}

export function delocalizedUrl(url: string) {
  const normalizedUrl = normalizeUrl(url);
  return normalizedUrl.startsWith("/de")
    ? normalizedUrl.substring(3)
    : normalizedUrl;
}

export function localizedUrl(lang: string | undefined, url: string) {
  const prefix = lang === "de" ? "/de" : "";
  return `${prefix}${delocalizedUrl(url)}`;
}
