#!/usr/bin/env -S deno run -A --unstable --no-check --no-config

import TelemetryData from "./plz-no-telemetry.json" assert { type: "json" };

interface TelemetryDataItem {
  source: string;
  varname: string;
  value: string | number | boolean;
  comment?: string;
}

function gen() {
  const lines: string[] = ["# Environment variable exports that disable telemetry for commonly used dev tools.\n"];

  TelemetryData.forEach((data: TelemetryDataItem) => {
    if (data.comment) {
      lines.push(`# ${data.comment}`);
    }
    lines.push(`# SOURCE: ${data.source}`);

    const val = typeof data.value === "string" ? `"${data.value}"` : data.value;
    lines.push(`export ${data.varname}=${val}\n`);
  });

  Deno.writeTextFileSync(new URL("./.plz-no-telemetry.sh", import.meta.url), lines.join("\n"));
}

gen();
