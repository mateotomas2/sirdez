import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: "ts-jest",
    coverageDirectory: "docs/coverage",
    coverageReporters: ["text", "json-summary", "json", "lcov"],
    testResultsProcessor: "./scripts/jestJsonReporter.ts",
    reporters: [
      "default",
      [
        "jest-html-reporters",
        {
          hideIcon: true,
          publicPath: "docs/report",
          filename: "index.html",
          pageTitle: "Sir Dez' Report"
        }
      ]
    ]
  };
};
