import { createCn } from "cn/config";

export const cn = createCn({
  override: {
    theme: {
      colors: [
        "paper",
        "surface",
        "ink",
        "ink-soft",
        "muted",
        "hairline",
        "accent",
        "accent-strong",
        "accent-soft",
        "warm",
        "warm-strong",
        "warm-soft",
      ],
      spacing: ["0", "s0", "s1", "s1h", "s2", "s3", "s4", "s5", "s6"],
      tracking: ["tight", "eyebrow", "meta", "wordmark"],
      leading: ["body", "display", "lede"],
      radius: ["card", "full"],
    },
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "display-lg",
            "h1",
            "h1-lg",
            "h2",
            "h2-lg",
            "sub",
            "sub-lg",
            "h3",
            "body",
            "small",
            "meta",
            "micro",
            "code",
          ],
        },
      ],
    },
  },
});
