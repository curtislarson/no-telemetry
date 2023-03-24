# Environment variable exports that disable telemetry for commonly used dev tools.

# Nextjs telemetry
# SOURCE: https://nextjs.org/telemetry
export NEXT_TELEMETRY_DISABLED=1

# Bun records bundle timings and feature usage
# SOURCE: https://bun.sh/docs/project/configuration
export DISABLE_BUN_ANALYTICS=1

# SOURCE: https://storybook.js.org/docs/react/configure/telemetry
export STORYBOOK_DISABLE_TELEMETRY=1

# SOURCE: https://github.com/Azure/azure-functions-core-tools#telemetry
export FUNCTIONS_CORE_TOOLS_TELEMETRY_OPTOUT=true

# .NET SDK and CLI
# SOURCE: https://learn.microsoft.com/en-us/dotnet/core/tools/telemetry
export DOTNET_CLI_TELEMETRY_OPTOUT=1
